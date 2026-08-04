import { NextResponse } from "next/server";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function splitName(value = "") {
  const parts = String(value).trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "Website",
    lastName: parts.slice(1).join(" ") || "Lead",
  };
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request) {
  const { email, name, company, phone, websiteUrl, interests = [], message, prompt, source, formId, details = {}, bestEffort = false } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const results = { crm: false, forms: false, prospectEmail: false, internalEmail: false };
  const errors = [];
  const selectedInterests = Array.isArray(interests) ? interests : [];
  const promptText = prompt || message || "";
  const bridgedForms = new Set(["contact", "partner_application", "local_consult", "transform_brief"]);
  const shouldUseFormsBridge =
    bridgedForms.has(formId) || source === "contact-form" || source === "partner-application" || source === "local-consult";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safePhone = escapeHtml(phone);
  const safeWebsiteUrl = escapeHtml(websiteUrl);
  const safeSource = escapeHtml(source);
  const safePrompt = escapeHtml(promptText);
  const safeInterests = selectedInterests.map(escapeHtml);
  const safeFormId = escapeHtml(formId);
  const safeDetails = Object.entries(details || {}).map(([key, value]) => [
    escapeHtml(key),
    Array.isArray(value) ? value.map(escapeHtml).join(", ") : escapeHtml(value),
  ]);

  // Preferred path for the new site: send leads to Esteemed Acquire's public inbound API.
  try {
    const inboundUrl = process.env.ACQUIRE_INBOUND_API_URL;
    const inboundKey = process.env.ACQUIRE_INBOUND_API_KEY;

    if (inboundUrl && inboundKey) {
      const { firstName, lastName } = splitName(name);
      const inboundRes = await fetchWithTimeout(`${inboundUrl.replace(/\/$/, "")}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${inboundKey}` },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company: company || "Not provided",
          source: source || formId || "esteemed.io/contact",
          useCase: [
            selectedInterests.length ? `Interests: ${selectedInterests.join(", ")}` : "",
            promptText ? `Message: ${promptText}` : "",
            websiteUrl ? `Website: ${websiteUrl}` : "",
            phone ? `Phone: ${phone}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (inboundRes.ok || inboundRes.status === 409) {
        results.crm = true;
      } else {
        const errorText = await inboundRes.text();
        throw new Error(`Acquire inbound HTTP ${inboundRes.status}: ${errorText}`);
      }
    }
  } catch (err) {
    console.error("Acquire inbound error:", err.message);
    errors.push(`Acquire inbound: ${err.message}`);
  }

  // The live esteemed.io forms submit to a DO Serverless function that feeds Acquire.
  // Keep partner applications on that same path while this Next app replaces Drupal.
  try {
    const formsApi =
      process.env.ESTEEMED_FORMS_API_URL ||
      "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-40cb0fd1-016f-4383-8b38-97bdc816fd0f/forms/submit";

    if (shouldUseFormsBridge && formsApi && !results.crm) {
      const formsRes = await fetchWithTimeout(formsApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId: formId || (source === "partner-application" ? "partner_application" : "contact"),
          _form_id: formId || (source === "partner-application" ? "partner_application" : "contact"),
          fields: {
            name: name || "",
            email,
            company_name: company || "",
            phone: phone || "",
            website_url: websiteUrl || "",
            interests: selectedInterests.join(", "),
            message: promptText,
            source: source || "",
            ...details,
            selected_interests: selectedInterests.join(", "),
          },
        }),
      });

      if (!formsRes.ok) {
        const errorText = await formsRes.text();
        throw new Error(`Forms bridge HTTP ${formsRes.status}: ${errorText}`);
      }

      results.forms = true;
    }
  } catch (err) {
    console.error("Forms bridge error:", err.message);
    errors.push(`Forms bridge: ${err.message}`);
  }

  // 1. Oceanic CRM — create Contact + log Activity
  try {
    const crmBase = process.env.OCEANIC_CRM_BASE_URL;
    const crmKey = process.env.OCEANIC_CRM_API_KEY;

    if (crmBase && crmKey) {
      const contactRes = await fetchWithTimeout(`${crmBase}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${crmKey}` },
        body: JSON.stringify({ email, name: name || "", phone: phone || "", websiteUrl: websiteUrl || "" }),
      });
      const contact = await contactRes.json();

      if (contact?.id) {
        await fetchWithTimeout(`${crmBase}/contacts/${contact.id}/activities`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${crmKey}` },
          body: JSON.stringify({
            type: "lead-capture",
            source,
            prompt: promptText,
            company: company || "",
            phone: phone || "",
            websiteUrl: websiteUrl || "",
            interests: selectedInterests,
            formId: formId || "",
            details,
            timestamp: new Date().toISOString(),
          }),
        });
        results.crm = true;
      }
    }
  } catch (err) {
    console.error("CRM error:", err.message);
    errors.push(`CRM: ${err.message}`);
  }

  // 2. Resend — prospect confirmation email
  try {
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      await fetchWithTimeout("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: "Esteemed <hello@esteemed.io>",
          to: email,
          subject: "We got your idea.",
          html: `<p>Hi${safeName ? ` ${safeName}` : ""},</p>
<p>We received your message${safePrompt ? `:</p><blockquote style="border-left:3px solid #FEE546;padding-left:12px;color:#555;">${safePrompt}</blockquote><p>` : ". "}A real person from our team will be in touch within one business day to start building with you.</p>
<p>— The Esteemed Team</p>`,
        }),
      });
      results.prospectEmail = true;
    }
  } catch (err) {
    console.error("Resend (prospect) error:", err.message);
    errors.push(`Prospect email: ${err.message}`);
  }

  // 3. Resend — internal notification
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.INTERNAL_NOTIFICATION_EMAIL;

    if (resendKey && notifyEmail) {
      await fetchWithTimeout("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: "Esteemed Leads <hello@esteemed.io>",
          to: notifyEmail,
          subject: `New lead: ${email}`,
          html: `<p><strong>Name:</strong> ${safeName || "(not provided)"}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Company:</strong> ${safeCompany || "(not provided)"}</p>
<p><strong>Phone:</strong> ${safePhone || "(not provided)"}</p>
<p><strong>Website:</strong> ${safeWebsiteUrl || "(not provided)"}</p>
<p><strong>Interests:</strong> ${safeInterests.length ? safeInterests.join(", ") : "(not provided)"}</p>
<p><strong>Source:</strong> ${safeSource}</p>
<p><strong>Form:</strong> ${safeFormId || "(not provided)"}</p>
<p><strong>Message:</strong> ${safePrompt || "(empty)"}</p>
${safeDetails.length ? `<p><strong>Details:</strong></p><ul>${safeDetails.map(([key, value]) => `<li><strong>${key}:</strong> ${value || "(empty)"}</li>`).join("")}</ul>` : ""}
<p><strong>Time:</strong> ${new Date().toISOString()}</p>`,
        }),
      });
      results.internalEmail = true;
    }
  } catch (err) {
    console.error("Resend (internal) error:", err.message);
    errors.push(`Internal email: ${err.message}`);
  }

  if (!bestEffort && shouldUseFormsBridge && !results.forms && !results.crm) {
    return NextResponse.json({ error: "Lead capture failed", results, errors }, { status: 502 });
  }

  return NextResponse.json({ ok: true, results });
}

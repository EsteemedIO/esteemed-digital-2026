import { NextResponse } from "next/server";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  const { email, name, company, interests = [], message, prompt, source } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const results = { crm: false, prospectEmail: false, internalEmail: false };
  const selectedInterests = Array.isArray(interests) ? interests : [];
  const promptText = prompt || message || "";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safeSource = escapeHtml(source);
  const safePrompt = escapeHtml(promptText);
  const safeInterests = selectedInterests.map(escapeHtml);

  // 1. Oceanic CRM — create Contact + log Activity
  try {
    const crmBase = process.env.OCEANIC_CRM_BASE_URL;
    const crmKey = process.env.OCEANIC_CRM_API_KEY;

    if (crmBase && crmKey) {
      const contactRes = await fetch(`${crmBase}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${crmKey}` },
        body: JSON.stringify({ email, name: name || "" }),
      });
      const contact = await contactRes.json();

      if (contact?.id) {
        await fetch(`${crmBase}/contacts/${contact.id}/activities`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${crmKey}` },
          body: JSON.stringify({
            type: "lead-capture",
            source,
            prompt: promptText,
            company: company || "",
            interests: selectedInterests,
            timestamp: new Date().toISOString(),
          }),
        });
        results.crm = true;
      }
    }
  } catch (err) {
    console.error("CRM error:", err.message);
  }

  // 2. Resend — prospect confirmation email
  try {
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
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
  }

  // 3. Resend — internal notification
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.INTERNAL_NOTIFICATION_EMAIL;

    if (resendKey && notifyEmail) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: "Esteemed Leads <hello@esteemed.io>",
          to: notifyEmail,
          subject: `New lead: ${email}`,
          html: `<p><strong>Name:</strong> ${safeName || "(not provided)"}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Company:</strong> ${safeCompany || "(not provided)"}</p>
<p><strong>Interests:</strong> ${safeInterests.length ? safeInterests.join(", ") : "(not provided)"}</p>
<p><strong>Source:</strong> ${safeSource}</p>
<p><strong>Message:</strong> ${safePrompt || "(empty)"}</p>
<p><strong>Time:</strong> ${new Date().toISOString()}</p>`,
        }),
      });
      results.internalEmail = true;
    }
  } catch (err) {
    console.error("Resend (internal) error:", err.message);
  }

  return NextResponse.json({ ok: true, results });
}

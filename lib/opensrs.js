/**
 * OpenSRS (Tucows) API client — white-labeled domain registration.
 * Uses the XCP XML protocol over HTTPS.
 */

import crypto from "crypto";

const LIVE_URL = "https://rr-n1-tor.opensrs.net:55443";
const TEST_URL = "https://horizon.opensrs.net:55443";

function getConfig() {
  const key = process.env.OPENSRS_API_KEY;
  const username = process.env.OPENSRS_RESELLER_USERNAME;
  const env = process.env.OPENSRS_ENV || "test";
  const proxyUrl = process.env.OPENSRS_PROXY_URL;
  if (!key || !username) throw new Error("OpenSRS credentials not configured.");
  return {
    key,
    username,
    url: proxyUrl || (env === "live" ? LIVE_URL : TEST_URL),
    proxyToken: process.env.OPENSRS_PROXY_TOKEN || "",
  };
}

function sign(xml, key) {
  const inner = crypto.createHash("md5").update(xml + key).digest("hex");
  return crypto.createHash("md5").update(inner + key).digest("hex");
}

function buildXml(action, object, attributes) {
  const attrItems = Object.entries(attributes)
    .map(([k, v]) => `<item key="${k}">${v}</item>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE OPS_envelope SYSTEM "ops.dtd">
<OPS_envelope>
<header><version>0.9</version></header>
<body>
<data_block>
<dt_assoc>
<item key="protocol">XCP</item>
<item key="action">${action}</item>
<item key="object">${object}</item>
<item key="attributes">
<dt_assoc>
${attrItems}
</dt_assoc>
</item>
</dt_assoc>
</data_block>
</body>
</OPS_envelope>`;
}

function parseResponse(xml) {
  const getText = (tag) => {
    const match = xml.match(new RegExp(`<item key="${tag}">([^<]*)</item>`));
    return match ? match[1] : null;
  };
  return {
    isSuccess: getText("is_success") === "1",
    responseCode: getText("response_code"),
    responseText: getText("response_text"),
    raw: xml,
  };
}

async function request(action, object, attributes) {
  const config = getConfig();
  const xml = buildXml(action, object, attributes);
  const signature = sign(xml, config.key);

  const headers = {
    "Content-Type": "text/xml",
    "X-Username": config.username,
    "X-Signature": signature,
  };
  if (config.proxyToken) headers["X-Proxy-Token"] = config.proxyToken;

  const res = await fetch(config.url, {
    method: "POST",
    headers,
    body: xml,
  });

  const text = await res.text();
  return parseResponse(text);
}

/**
 * Check domain availability.
 * Returns { available: boolean, domain: string }
 */
export async function lookupDomain(domain) {
  const result = await request("LOOKUP", "DOMAIN", { domain });
  return {
    domain,
    available: result.responseCode === "210",
    status: result.responseText,
  };
}

/**
 * Get suggestions for a domain name.
 */
export async function suggestDomains(searchString, tlds = [".com", ".io", ".net", ".org", ".co"]) {
  const results = [];
  for (const tld of tlds) {
    const domain = searchString.replace(/\.[^.]+$/, "") + tld;
    const lookup = await lookupDomain(domain);
    results.push(lookup);
  }
  return results;
}

/**
 * Get the price for a TLD from our retail map.
 */
export function getDomainPrice(tld) {
  const prices = {
    ".com": 19.99,
    ".io": 49.99,
    ".net": 17.99,
    ".org": 14.99,
    ".co": 34.99,
    ".dev": 16.99,
    ".app": 16.99,
    ".ai": 89.99,
    ".us": 12.99,
    ".biz": 19.99,
    ".info": 19.99,
    ".xyz": 14.99,
    ".tech": 49.99,
    ".online": 39.99,
    ".store": 49.99,
    ".site": 34.99,
  };
  const normalized = tld.startsWith(".") ? tld.toLowerCase() : `.${tld.toLowerCase()}`;
  return prices[normalized] || 19.99;
}

/**
 * Build a nested dt_assoc XML block for contact info.
 */
function buildContactBlock(contact) {
  const fields = {
    first_name: contact.firstName || "Domain",
    last_name: contact.lastName || "Owner",
    org_name: contact.company || "Esteemed Customer",
    address1: contact.address || "123 Main St",
    city: contact.city || "Olympia",
    state: contact.state || "WA",
    postal_code: contact.zip || "98501",
    country: contact.country || "US",
    phone: contact.phone || "+1.3607017353",
    email: contact.email || "domains@esteemed.io",
  };

  const items = Object.entries(fields)
    .map(([k, v]) => `<item key="${k}">${v}</item>`)
    .join("\n");

  return `<dt_assoc>\n${items}\n</dt_assoc>`;
}

/**
 * Register a domain via OpenSRS SW_REGISTER.
 * Returns { isSuccess, responseCode, responseText, raw }
 */
export async function registerDomain(domain, period = 1, contact = {}) {
  const config = getConfig();
  const contactBlock = buildContactBlock(contact);

  // SW_REGISTER requires contact_set with owner, admin, billing, tech
  const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE OPS_envelope SYSTEM "ops.dtd">
<OPS_envelope>
<header><version>0.9</version></header>
<body>
<data_block>
<dt_assoc>
<item key="protocol">XCP</item>
<item key="action">SW_REGISTER</item>
<item key="object">DOMAIN</item>
<item key="attributes">
<dt_assoc>
<item key="domain">${domain}</item>
<item key="period">${period}</item>
<item key="reg_type">new</item>
<item key="handle">process</item>
<item key="custom_tech_contact">0</item>
<item key="custom_nameservers">0</item>
<item key="auto_renew">1</item>
<item key="f_whois_privacy">1</item>
<item key="contact_set">
<dt_assoc>
<item key="owner">${contactBlock}</item>
<item key="admin">${contactBlock}</item>
<item key="billing">${contactBlock}</item>
<item key="tech">${contactBlock}</item>
</dt_assoc>
</item>
</dt_assoc>
</item>
</dt_assoc>
</data_block>
</body>
</OPS_envelope>`;

  const signature = sign(xml, config.key);

  const res = await fetch(config.url, {
    method: "POST",
    headers: {
      "Content-Type": "text/xml",
      "X-Username": config.username,
      "X-Signature": signature,
    },
    body: xml,
  });

  const text = await res.text();
  return parseResponse(text);
}

const WEBHOOK_TOLERANCE_SECONDS = 300;

export function constantTimeEqual(a, b) {
  const left = new TextEncoder().encode(String(a || ""));
  const right = new TextEncoder().encode(String(b || ""));
  if (left.length !== right.length) return false;

  let result = 0;
  for (let i = 0; i < left.length; i += 1) {
    result |= left[i] ^ right[i];
  }
  return result === 0;
}

export async function verifyWebhookSignature(rawBody, signatureHeader, secret, now = Date.now()) {
  const parts = String(signatureHeader || "").split(",").reduce(
    (acc, part) => {
      const [key, value] = part.split("=");
      if (key === "v1") acc.v1.push(value);
      else if (key) acc[key] = value;
      return acc;
    },
    { v1: [] },
  );

  const timestamp = parts.t;
  if (!timestamp || parts.v1.length === 0) return false;

  const timestampNumber = Number(timestamp);
  const ageSeconds = Math.abs(now / 1000 - timestampNumber);
  if (!Number.isFinite(timestampNumber) || ageSeconds > WEBHOOK_TOLERANCE_SECONDS) return false;

  const payload = `${timestamp}.${rawBody}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const hex = Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return parts.v1.some((expectedSig) => constantTimeEqual(hex, expectedSig));
}

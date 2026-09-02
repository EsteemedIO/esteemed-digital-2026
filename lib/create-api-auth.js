export async function exchangeCreateAccessToken(identityToken, createApiBase) {
  if (!identityToken) {
    const error = new Error("Your Esteemed session needs to be renewed.");
    error.status = 401;
    throw error;
  }

  const response = await fetch(new URL("/api/auth/oidc/exchange", createApiBase), {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${identityToken}`,
    },
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !payload.accessToken) {
    const error = new Error(payload.error || "Unable to authenticate with Esteemed Create.");
    error.status = response.status || 502;
    throw error;
  }

  return payload.accessToken;
}

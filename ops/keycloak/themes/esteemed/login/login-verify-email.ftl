<#assign productName = "Esteemed">
<#assign productIcon = "esteemed-logo.svg">
<#assign productStylesheet = "auth.css">
<#if client?? && client.clientId == "hcmgpt">
  <#assign productName = "HCMGPT">
  <#assign productIcon = "hcmgpt-icon.svg">
  <#assign productStylesheet = "hcmgpt-auth.css">
</#if>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Verify your email for ${productName}</title>
  <link rel="icon" href="${url.resourcesPath}/img/${productIcon}">
  <link rel="stylesheet" href="${url.resourcesPath}/css/${productStylesheet}?v=20260901a">
</head>
<body>
  <main class="auth-page">
    <section class="auth-card" aria-labelledby="auth-title">
      <div class="brand-panel"><div class="logo-box"><img src="${url.resourcesPath}/img/${productIcon}" alt="${productName}"></div></div>
      <h1 id="auth-title">Verify your email</h1>
      <p class="auth-subtitle">We sent a verification link to ${user.email}. Open that email to continue.</p>
      <div class="product-note"><strong>${productName}</strong> &mdash; Secure account verification keeps your workspace tied to the right person.</div>
      <a class="auth-action-button" href="${url.loginAction}">Resend verification email</a>
    </section>
  </main>
</body>
</html>

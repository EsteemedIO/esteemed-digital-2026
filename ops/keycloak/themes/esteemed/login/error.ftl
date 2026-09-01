<#assign productName = "Esteemed">
<#assign productIcon = "esteemed-logo.svg">
<#assign productStylesheet = "auth.css">
<#assign returnUrl = "https://www.esteemed.io/">
<#if client?? && client.clientId == "hcmgpt">
  <#assign productName = "HCMGPT">
  <#assign productIcon = "hcmgpt-icon.svg">
  <#assign productStylesheet = "hcmgpt-auth.css">
  <#assign returnUrl = "https://app.hcmgpt.com/api/auth/logout?returnTo=/auth">
</#if>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${productName} sign-in issue</title>
  <link rel="icon" href="${url.resourcesPath}/img/${productIcon}">
  <link rel="stylesheet" href="${url.resourcesPath}/css/${productStylesheet}?v=20260901a">
</head>
<body>
  <main class="auth-page">
    <section class="auth-card" aria-labelledby="auth-title">
      <div class="brand-panel">
        <div class="logo-box">
          <img src="${url.resourcesPath}/img/${productIcon}" alt="${productName}">
        </div>
      </div>

      <h1 id="auth-title">Sign-in issue</h1>
      <p class="auth-subtitle">${productName} could not complete this account step.</p>

      <#if message?has_content>
        <div class="auth-message auth-message-error">
          ${kcSanitize(message.summary)?no_esc}
        </div>
      <#else>
        <div class="auth-message auth-message-error">
          This session could not be completed. Please sign out and try again.
        </div>
      </#if>

      <a class="social-button" href="${returnUrl}">
        <span></span>
        <span>Return to ${productName}</span>
        <span></span>
      </a>
    </section>
  </main>
</body>
</html>

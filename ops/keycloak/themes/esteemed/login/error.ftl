<#assign productName = "Esteemed">
<#assign productIcon = "esteemed-logo.svg">
<#assign productStylesheet = "auth.css">
<#assign returnUrl = "https://www.esteemed.io/">
<#assign retrySession = false>
<#assign chooseEnvironment = false>
<#if client?? && client.clientId == "hcmgpt">
  <#assign productName = "HCMGPT">
  <#assign productIcon = "hcmgpt-icon.svg">
  <#assign productStylesheet = "hcmgpt-auth.css">
  <#-- Restart the same server-owned auth session: it retains the originating
       client callback and PKCE request, including Dev vs Production. -->
  <#assign returnUrl = url.loginRestartFlowUrl>
  <#assign retrySession = returnUrl?contains("tab_id=")>
  <#assign chooseEnvironment = !retrySession>
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

      <#if chooseEnvironment>
        <p class="auth-subtitle">This sign-in session has ended. Choose the workspace where you started.</p>
        <a class="social-button" href="https://dev.hcmgpt.com/api/auth/keycloak/login"><span></span><span>Sign in to HCMGPT Dev</span><span></span></a>
        <a class="social-button" href="https://app.hcmgpt.com/api/auth/keycloak/login"><span></span><span>Sign in to HCMGPT Production</span><span></span></a>
      <#else>
        <a class="social-button" href="${returnUrl}">
          <span></span>
          <span><#if retrySession>Try sign-in again<#else>Return to ${productName}</#if></span>
          <span></span>
        </a>
      </#if>
    </section>
  </main>
</body>
</html>

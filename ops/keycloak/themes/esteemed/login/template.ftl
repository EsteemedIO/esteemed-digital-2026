<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false>
<#assign productName = "Esteemed">
<#assign productTagline = "One account for Create, hosting, cloud, and expert support.">
<#assign productIcon = "esteemed-logo.svg">
<#assign productStylesheet = "auth.css">
<#if client?? && client.clientId == "hcmgpt">
  <#assign productName = "HCMGPT">
  <#assign productTagline = "Your people, policies, documents, and workforce intelligence in one workspace.">
  <#assign productIcon = "hcmgpt-icon.svg">
  <#assign productStylesheet = "hcmgpt-auth.css">
</#if>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>${productName} account</title>
  <link rel="icon" href="${url.resourcesPath}/img/${productIcon}">
  <link rel="stylesheet" href="${url.resourcesPath}/css/${productStylesheet}?v=20260901a">
</head>
<body>
  <main class="auth-page">
    <section class="auth-card kc-card" aria-labelledby="kc-page-title">
      <div class="brand-panel">
        <div class="logo-box"><img src="${url.resourcesPath}/img/${productIcon}" alt="${productName}"></div>
      </div>

      <header class="kc-header">
        <#if !(auth?has_content && auth.showUsername() && !auth.showResetCredentials())>
          <h1 id="kc-page-title"><#nested "header"></h1>
        <#else>
          <#nested "show-username">
          <h1 id="kc-page-title">Welcome back</h1>
          <div id="kc-username" class="attempted-user">
            <span id="kc-attempted-username">${auth.attemptedUsername}</span>
            <a id="reset-login" href="${url.loginRestartFlowUrl}" aria-label="${msg("restartLoginTooltip")}">Change</a>
          </div>
        </#if>
        <p class="auth-subtitle">Secure ${productName} account access</p>
      </header>

      <div class="product-note"><strong>${productName}</strong> &mdash; ${productTagline}</div>

      <#if displayRequiredFields>
        <p class="required-note"><span class="required">*</span> ${msg("requiredFields")}</p>
      </#if>

      <#if displayMessage && message?has_content && (message.type != "warning" || !isAppInitiatedAction??)>
        <div class="auth-message auth-message-${message.type}">${kcSanitize(message.summary)?no_esc}</div>
      </#if>

      <div id="kc-content"><div id="kc-content-wrapper">
        <#nested "form">

        <#if auth?has_content && auth.showTryAnotherWayLink()>
          <form id="kc-select-try-another-way-form" action="${url.loginAction}" method="post">
            <input type="hidden" name="tryAnotherWay" value="on">
            <a class="forgot-link" href="#" id="try-another-way" onclick="document.forms['kc-select-try-another-way-form'].submit();return false;">${msg("doTryAnotherWay")}</a>
          </form>
        </#if>

        <#nested "socialProviders">

        <#if displayInfo>
          <div id="kc-info" class="kc-info"><#nested "info"></div>
        </#if>
      </div></div>
    </section>
  </main>
</body>
</html>
</#macro>

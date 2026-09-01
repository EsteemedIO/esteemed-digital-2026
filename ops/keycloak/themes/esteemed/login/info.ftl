<#assign productName = "Esteemed">
<#assign productTagline = "One account for Create, hosting, cloud, and expert support.">
<#assign productIcon = "esteemed-logo.svg">
<#assign productStylesheet = "auth.css">
<#assign targetUrl = "https://www.esteemed.io/">
<#if client?? && client.clientId == "hcmgpt">
  <#assign productName = "HCMGPT">
  <#assign productTagline = "Your people, policies, documents, and workforce intelligence in one workspace.">
  <#assign productIcon = "hcmgpt-icon.svg">
  <#assign productStylesheet = "hcmgpt-auth.css">
  <#assign targetUrl = "https://app.hcmgpt.com/">
</#if>
<#assign autoProceed = false>
<#if actionUri?? && actionUri?has_content>
  <#assign targetUrl = actionUri>
  <#assign autoProceed = true>
<#elseif pageRedirectUri?? && pageRedirectUri?has_content>
  <#assign targetUrl = pageRedirectUri>
  <#assign autoProceed = true>
<#elseif client?? && client.baseUrl?? && client.baseUrl?has_content>
  <#assign targetUrl = client.baseUrl>
</#if>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <#if autoProceed><meta http-equiv="refresh" content="0;url=${targetUrl}"></#if>
  <title>Continue to ${productName}</title>
  <link rel="icon" href="${url.resourcesPath}/img/${productIcon}">
  <link rel="stylesheet" href="${url.resourcesPath}/css/${productStylesheet}?v=20260901a">
  <#if autoProceed>
    <script>window.location.replace("${targetUrl?js_string}");</script>
  </#if>
</head>
<body>
  <main class="auth-page">
    <section class="auth-card" aria-labelledby="auth-title">
      <div class="brand-panel"><div class="logo-box"><img src="${url.resourcesPath}/img/${productIcon}" alt="${productName}"></div></div>
      <h1 id="auth-title"><#if messageHeader??>${messageHeader}<#else>Continue to ${productName}</#if></h1>
      <p class="auth-subtitle">
        <#if autoProceed>
          Finishing securely...
        <#elseif message?? && message.summary??>
          ${kcSanitize(message.summary)?no_esc}
        <#else>
          Your account action is complete.
        </#if>
      </p>
      <div class="product-note"><strong>${productName}</strong> &mdash; ${productTagline}</div>
      <a class="auth-action-button" href="${targetUrl}">Continue to ${productName}</a>
    </section>
  </main>
</body>
</html>

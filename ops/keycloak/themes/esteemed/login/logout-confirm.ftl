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
  <title>Signing out of ${productName}</title>
  <link rel="icon" href="${url.resourcesPath}/img/${productIcon}">
  <link rel="stylesheet" href="${url.resourcesPath}/css/${productStylesheet}?v=20260901a">
  <script>window.addEventListener('DOMContentLoaded',function(){var f=document.getElementById('kc-logout-confirm-form'); if(f) f.submit();});</script>
</head>
<body>
  <main class="auth-page">
    <section class="auth-card" aria-labelledby="auth-title">
      <div class="brand-panel"><div class="logo-box"><img src="${url.resourcesPath}/img/${productIcon}" alt="${productName}"></div></div>
      <h1 id="auth-title">Signing out</h1>
      <p class="auth-subtitle">Ending your ${productName} session...</p>
      <form id="kc-logout-confirm-form" class="login-form" action="${url.logoutConfirmAction}" method="POST">
        <input type="hidden" name="session_code" value="${logoutConfirm.code}">
        <button name="confirmLogout" id="kc-logout" type="submit">Finish signing out</button>
      </form>
    </section>
  </main>
</body>
</html>

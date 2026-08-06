<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>HCMGPT sign-in issue</title>
  <link rel="icon" href="${url.resourcesPath}/img/hcmgpt-icon.svg">
  <link rel="stylesheet" href="${url.resourcesPath}/css/hcmgpt-auth.css?v=20260806b">
</head>
<body>
  <main class="auth-page">
    <section class="auth-card" aria-labelledby="auth-title">
      <div class="brand-panel">
        <div class="logo-box">
          <img src="${url.resourcesPath}/img/hcmgpt-icon.svg" alt="HCMGPT">
        </div>
      </div>

      <h1 id="auth-title">Sign-in issue</h1>
      <p class="auth-subtitle">HCMGPT could not complete this account step.</p>

      <#if message?has_content>
        <div class="auth-message auth-message-error">
          ${kcSanitize(message.summary)?no_esc}
        </div>
      <#else>
        <div class="auth-message auth-message-error">
          This session could not be completed. Please sign out and try again.
        </div>
      </#if>

      <a class="social-button" href="https://app.hcmgpt.com/api/auth/logout?returnTo=/auth">
        <span></span>
        <span>Sign out and retry</span>
        <span></span>
      </a>
    </section>
  </main>
</body>
</html>

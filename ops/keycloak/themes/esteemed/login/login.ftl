<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sign in to Esteemed</title>
  <link rel="icon" href="${url.resourcesPath}/img/esteemed-logo.svg">
  <link rel="stylesheet" href="${url.resourcesPath}/css/auth.css?v=20260701b">
</head>
<body>
  <main class="auth-page">
    <section class="auth-card" aria-labelledby="auth-title">
      <div class="brand-panel">
        <div class="logo-box">
          <img src="${url.resourcesPath}/img/esteemed-logo.svg" alt="Esteemed">
        </div>
      </div>

      <h1 id="auth-title">Welcome</h1>
      <p class="auth-subtitle">Sign in to your account</p>

      <div class="product-note">
        <strong>Esteemed</strong> &mdash; One account for your websites, cloud, apps, and expert support.
      </div>

      <div class="auth-tabs" aria-label="Authentication options">
        <a class="auth-tab is-active" href="${url.loginUrl}">Login</a>
        <#if realm.registrationAllowed && url.registrationUrl??>
          <a class="auth-tab" href="${url.registrationUrl}">Sign Up</a>
        <#else>
          <span class="auth-tab is-disabled">Sign Up</span>
        </#if>
      </div>

      <#if message?has_content && (message.type != "warning" || !isAppInitiatedAction??)>
        <div class="auth-message auth-message-${message.type}">
          ${kcSanitize(message.summary)?no_esc}
        </div>
      </#if>

      <form id="kc-form-login" class="login-form" action="${url.loginAction}" method="post" onsubmit="login.disabled = true; return true;">
        <label for="username">Email</label>
        <input
          id="username"
          name="username"
          type="text"
          value="${(login.username!'')}"
          autocomplete="username"
          placeholder="your@email.com"
          autofocus
        >

        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          placeholder="••••••••"
        >

        <#if realm.resetPasswordAllowed>
          <a class="forgot-link" href="${url.loginResetCredentialsUrl}">Forgot password?</a>
        </#if>

        <#if auth.selectedCredential?has_content>
          <input type="hidden" name="credentialId" value="${auth.selectedCredential}">
        </#if>

        <button id="kc-login" name="login" type="submit">Sign In</button>
      </form>

      <#if social.providers?? && social.providers?size gt 0>
        <div class="divider"><span>OR CONTINUE WITH</span></div>
        <div class="social-buttons">
          <#list social.providers as provider>
            <#if provider.alias == "google">
              <a id="social-${provider.alias}" class="social-button social-${provider.alias}" href="${provider.loginUrl}">
                <span class="social-icon" aria-hidden="true">G</span>
                <span>Sign in with Google</span>
              </a>
            </#if>
          </#list>
        </div>
      </#if>
    </section>
  </main>
</body>
</html>

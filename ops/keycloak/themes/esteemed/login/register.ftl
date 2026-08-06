<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sign up for HCMGPT</title>
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

      <h1 id="auth-title">Create Account</h1>
      <p class="auth-subtitle">Start with your HCMGPT account</p>

      <div class="product-note">
        <strong>HCMGPT</strong> &mdash; Your people, policies, documents, and workforce intelligence in one workspace.
      </div>

      <div class="auth-tabs" aria-label="Authentication options">
        <a class="auth-tab" href="${url.loginUrl}">Login</a>
        <a class="auth-tab is-active" href="${url.registrationUrl}">Sign Up</a>
      </div>

      <#if message?has_content && (message.type != "warning" || !isAppInitiatedAction??)>
        <div class="auth-message auth-message-${message.type}">
          ${kcSanitize(message.summary)?no_esc}
        </div>
      </#if>

      <form id="kc-register-form" class="login-form register-form" action="${url.registrationAction}" method="post">
        <div class="field-grid">
          <div>
            <label for="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" value="${(register.formData.firstName!'')}" autocomplete="given-name">
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" value="${(register.formData.lastName!'')}" autocomplete="family-name">
          </div>
        </div>

        <label for="email">Email</label>
        <input id="email" name="email" type="email" value="${(register.formData.email!'')}" autocomplete="email" placeholder="your@email.com">

        <#if !realm.registrationEmailAsUsername>
          <label for="username">Username</label>
          <input id="username" name="username" type="text" value="${(register.formData.username!'')}" autocomplete="username">
        </#if>

        <label for="password">Password</label>
        <input id="password" name="password" type="password" autocomplete="new-password" placeholder="••••••••">

        <label for="password-confirm">Confirm Password</label>
        <input id="password-confirm" name="password-confirm" type="password" autocomplete="new-password" placeholder="••••••••">

        <button type="submit">Create Account</button>
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

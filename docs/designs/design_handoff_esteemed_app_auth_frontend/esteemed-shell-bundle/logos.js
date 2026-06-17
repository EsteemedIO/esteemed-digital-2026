/* Esteemed Shell — brand logo sprite for third-party services.
   Recognizable, brand-colored marks so the coding agent (and user) can tell
   Gmail from a generic mail glyph, Slack from a chat bubble, etc.
   Simplified nominative logos for identification only. viewBox 0 0 24 24. */
(function () {
  var SHEET = `
<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
  <symbol id="logo-gmail" viewBox="0 0 24 24"><path fill="#fff" d="M4 6h16v12H4z"/><path fill="#EA4335" d="M4 7.5V18H6v-8l6 4.4L18 10v8h2V7.5a1.5 1.5 0 0 0-2.4-1.2L12 10.4 6.4 6.3A1.5 1.5 0 0 0 4 7.5Z"/></symbol>
  <symbol id="logo-gdrive" viewBox="0 0 24 24"><path fill="#FFCF63" d="M9 3h6l6 10.4h-6z"/><path fill="#11A861" d="M21 13.4 18 19H6l3-5.6z"/><path fill="#2684FC" d="M9 3 3 13.4 6 19l6-10.4z"/></symbol>
  <symbol id="logo-slack" viewBox="0 0 24 24"><path fill="#36C5F0" d="M9 3.5a1.9 1.9 0 1 0 0 3.8h1.9V5.4A1.9 1.9 0 0 0 9 3.5z"/><path fill="#2EB67D" d="M20.5 9a1.9 1.9 0 1 0-3.8 0v1.9h1.9A1.9 1.9 0 0 0 20.5 9z"/><path fill="#ECB22E" d="M15 20.5a1.9 1.9 0 1 0 0-3.8h-1.9v1.9A1.9 1.9 0 0 0 15 20.5z"/><path fill="#E01E5A" d="M3.5 15a1.9 1.9 0 1 0 3.8 0v-1.9H5.4A1.9 1.9 0 0 0 3.5 15z"/><path fill="#2EB67D" d="M9 20.5a1.9 1.9 0 1 0 3.8 0v-1.9a1.9 1.9 0 0 0-3.8 0z" opacity=".0"/></symbol>
  <symbol id="logo-linkedin" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path fill="#fff" d="M7.2 9.6H4.7V19h2.5zM5.95 5.3a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9zM9.2 9.6h2.4v1.28c.4-.78 1.5-1.55 3-1.55 2.27 0 3.6 1.4 3.6 4.15V19h-2.5v-4.35c0-1.18-.46-1.98-1.57-1.98-1 0-1.55.67-1.8 1.35-.1.24-.1.58-.1.93V19H9.2z"/></symbol>
  <symbol id="logo-x" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#000"/><path fill="#fff" d="M6.6 6h2.7l3 4.15L15.7 6h1.9l-4.25 5L18 18h-2.7l-3.25-4.7L8.3 18H6.4l4.55-5.4z"/></symbol>
  <symbol id="logo-gcal" viewBox="0 0 24 24"><rect x="4.5" y="4.5" width="15" height="15" rx="2" fill="#fff" stroke="#4285F4" stroke-width="1.6"/><rect x="8" y="8" width="8" height="8" fill="#4285F4"/></symbol>
  <symbol id="logo-confluence" viewBox="0 0 24 24"><path fill="#2684FF" d="M3 17c3.8-4.6 7.7-4.7 12.6-1.9l2.9 1.6-2 3.4C11.8 16.6 8.6 16.6 4.6 20.4z"/><path fill="#0052CC" d="M21 7c-3.8 4.6-7.7 4.7-12.6 1.9L5.5 7.3l2-3.4C12.2 7.4 15.4 7.4 19.4 3.6z"/></symbol>
  <symbol id="logo-notion" viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="#fff" stroke="#111" stroke-width="1.5"/><path d="M8.4 16V8.6l7.2 7.4V8" fill="none" stroke="#111" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="logo-github" viewBox="0 0 24 24"><path fill="#181717" d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></symbol>
  <symbol id="logo-jira" viewBox="0 0 24 24"><path fill="#2684FF" d="M12 2.5 21 11.5a1 1 0 0 1 0 1.4l-2.1 2.1-6.9-6.9-6.9 6.9-2.1-2.1a1 1 0 0 1 0-1.4z" opacity=".0"/><path fill="#2684FF" d="M12 2 5 9h4.5a4.5 4.5 0 0 0 4.5 4.5V11z" transform="rotate(0 12 12)"/><path fill="#2684FF" d="M12 6.5 8.5 10H12a4.5 4.5 0 0 0 4.5 4.5V11z" opacity=".8" transform="translate(0 5)"/><path fill="#2684FF" d="M12 12 8.5 15.5H12a4.5 4.5 0 0 0 4.5 4.5v-3.5z" opacity=".6"/></symbol>
  <symbol id="logo-salesforce" viewBox="0 0 24 24"><path fill="#00A1E0" d="M10 7.2A3 3 0 0 1 15.2 6 3.5 3.5 0 0 1 20 9.2 3 3 0 0 1 19.4 15H7.3A3.4 3.4 0 0 1 6.6 8.2 3 3 0 0 1 10 7.2z"/></symbol>
  <symbol id="logo-dropbox" viewBox="0 0 24 24"><path fill="#0061FF" d="M7 4 2 7.4l5 3.4 5-3.4zm10 0-5 3.4 5 3.4 5-3.4zM2 14.2l5 3.4 5-3.4-5-3.4zm15-3.4-5 3.4 5 3.4 5-3.4zM7 18.6l5 3.4 5-3.4-5-3.3z"/></symbol>
  <symbol id="logo-sharepoint" viewBox="0 0 24 24"><circle cx="10" cy="8.5" r="5" fill="#036C70"/><circle cx="16" cy="13" r="4.3" fill="#1A9BA1"/><circle cx="12.5" cy="17.5" r="3.5" fill="#37C6D0"/></symbol>
  <symbol id="logo-zendesk" viewBox="0 0 24 24"><path fill="#03363D" d="M11 8.5V19H3z"/><path fill="#03363D" d="M13 15.5a4 4 0 0 1 8 0z"/></symbol>
  <symbol id="logo-greenhouse" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#24A47F"/><path fill="#fff" d="M8 7h2.1v10H8zM13.9 7H16v10h-2.1zM8.4 11h7.2v2H8.4z"/></symbol>
  <symbol id="logo-workday" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2" fill="#0875E1"/><path fill="#fff" d="M5.7 9.6c1 3.1 2.5 5.2 3.6 5.2s1.3-1.6 1.8-3.1c.4 1.5.8 3.1 1.8 3.1s2.6-2.1 3.6-5.2h-1.7c-.6 2-1.3 3.3-1.7 3.3-.5 0-.8-1.6-1.3-3.3h-1.6c-.4 1.7-.8 3.3-1.3 3.3-.4 0-1.1-1.3-1.7-3.3z"/></symbol>
  <symbol id="logo-web" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="#475569" stroke-width="1.7"/><path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" fill="none" stroke="#475569" stroke-width="1.6"/></symbol>
</svg>`;
  function inject() {
    if (document.getElementById('es-logo-sheet')) return;
    var wrap = document.createElement('div');
    wrap.id = 'es-logo-sheet';
    wrap.innerHTML = SHEET;
    document.body.insertBefore(wrap, document.body.firstChild);
  }
  if (document.body) inject();
  else document.addEventListener('DOMContentLoaded', inject);
})();

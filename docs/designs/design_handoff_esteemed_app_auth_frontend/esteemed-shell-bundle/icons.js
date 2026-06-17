/* Esteemed Shell — inline icon sprite (Lucide-derived, 1.75px stroke) + brand star.
   Injects a hidden <svg> symbol sheet so screens use <svg class="i"><use href="#name"/></svg>.
   The Curate glyph is the monochrome line version of the provided brand tile (Group 4.svg). */
(function () {
  var SHEET = `
<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
  <defs>
    <style>
      symbol[id]:not([id^="logo-"]):not(#star):not(#star-white):not(#apps){fill:none;stroke:currentColor;stroke-width:1.85;stroke-linecap:round;stroke-linejoin:round;}
    </style>
  </defs>
  <symbol id="star" viewBox="0 0 24 24"><path d="M12 2l2.95 6.3L22 9.27l-5 4.95 1.18 6.78L12 17.77l-6.18 3.23L7 14.22l-5-4.95 7.05-.97z" fill="#FEE546" stroke="none"/></symbol>
  <symbol id="star-white" viewBox="0 0 24 24"><path d="M12 2l2.95 6.3L22 9.27l-5 4.95 1.18 6.78L12 17.77l-6.18 3.23L7 14.22l-5-4.95 7.05-.97z" fill="#FFFFFF" stroke="none"/></symbol>
  <symbol id="home" viewBox="0 0 24 24"><path d="m3 9.5 9-7 9 7V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></symbol>
  <symbol id="message" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></symbol>
  <symbol id="calendar" viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 9.5h18"/></symbol>
  <symbol id="folder" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/></symbol>
  <symbol id="insights" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></symbol>
  <symbol id="chevron-right" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol>
  <symbol id="chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>
  <symbol id="heart" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/></symbol>
  <symbol id="settings" viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></symbol>
  <symbol id="help" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M9.2 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4"/><path d="M12 17h.01"/></symbol>
  <symbol id="search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.3-4.3"/></symbol>
  <symbol id="bell" viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></symbol>
  <symbol id="plus" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></symbol>
  <symbol id="paperclip" viewBox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></symbol>
  <symbol id="mic" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></symbol>
  <symbol id="arrow-up" viewBox="0 0 24 24"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></symbol>
  <symbol id="arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
  <symbol id="briefcase" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></symbol>
  <symbol id="users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
  <symbol id="sparkles" viewBox="0 0 24 24"><path d="M11.5 3 13 7.5 17.5 9 13 10.5 11.5 15 10 10.5 5.5 9 10 7.5z"/><path d="M19 14v4"/><path d="M21 16h-4"/><path d="M6 17v3"/><path d="M7.5 18.5h-3"/></symbol>
  <symbol id="create" viewBox="0 0 24 24"><path d="M18 8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8"/><path d="M7 19h5"/><path d="M9.5 15.5V19"/><rect x="15.5" y="11.5" width="6.5" height="10.5" rx="1.5"/></symbol>
  <symbol id="bot" viewBox="0 0 24 24"><path d="M12 8V4.5"/><circle cx="12" cy="3.5" r="1.2" fill="currentColor" stroke="none"/><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M2 14h2M20 14h2"/><path d="M9 13.5v1.5M15 13.5v1.5"/></symbol>
  <symbol id="connect" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.5"/><circle cx="5.5" cy="18" r="2.5"/><circle cx="18.5" cy="18" r="2.5"/><path d="M12 7.5v3.5M10.4 12.6 6.8 15.8M13.6 12.6l3.6 3.2"/><path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="currentColor" stroke="none"/></symbol>
  <symbol id="curate" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 7v10M11 7v10M15 7l2 10"/></symbol>
  <symbol id="external" viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></symbol>
  <symbol id="file-text" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5M9 13h6M9 17h6"/></symbol>
  <symbol id="globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.5 2.5 2.5 16.5 0 19M12 2.5c-2.5 2.5-2.5 16.5 0 19"/></symbol>
  <symbol id="user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></symbol>
  <symbol id="square" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/></symbol>
  <symbol id="clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3 2"/></symbol>
  <symbol id="check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
  <symbol id="alert" viewBox="0 0 24 24"><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></symbol>
  <symbol id="inbox" viewBox="0 0 24 24"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></symbol>
  <symbol id="bolt" viewBox="0 0 24 24"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></symbol>
  <symbol id="link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></symbol>
  <symbol id="building" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></symbol>
  <symbol id="shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
  <symbol id="card" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></symbol>
  <symbol id="x" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>
  <symbol id="user-plus" viewBox="0 0 24 24"><circle cx="9" cy="8" r="4"/><path d="M3 21v-1a6 6 0 0 1 6-6h2"/><path d="M19 14v6M22 17h-6"/></symbol>
  <symbol id="mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></symbol>
  <symbol id="linkedin" viewBox="0 0 24 24"><path d="M4.5 9H7v9H4.5zM5.75 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10 9h2.4v1.3c.45-.85 1.6-1.6 3.1-1.6 2.3 0 3.5 1.4 3.5 4.2V18h-2.5v-4.4c0-1.2-.45-2-1.6-2-1 0-1.6.7-1.85 1.4-.1.25-.1.6-.1.95V18H10z" fill="currentColor" stroke="none"/></symbol>
  <symbol id="x-social" viewBox="0 0 24 24"><path d="M4.6 4h3.9l3.6 5 4.3-5H20l-5.9 6.8L20.4 20h-3.9l-3.9-5.4L7.9 20H5l6.3-7.3z" fill="currentColor" stroke="none"/></symbol>
  <symbol id="workflow" viewBox="0 0 24 24"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/><path d="M6.75 10.5v2.25a2 2 0 0 0 2 2h4.75"/></symbol>
  <symbol id="plug" viewBox="0 0 24 24"><path d="M12 22v-5"/><path d="M9.5 8.5V3M14.5 8.5V3"/><path d="M7 8.5h10v3.5a5 5 0 0 1-10 0z"/></symbol>
  <symbol id="pencil" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></symbol>
  <symbol id="megaphone" viewBox="0 0 24 24"><path d="m3 11 14-6v14L3 13z"/><path d="M3 11v2a2 2 0 0 0 2 2h1"/><path d="M8 15.5V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3"/><path d="M19 8a3 3 0 0 1 0 6"/></symbol>
  <symbol id="target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></symbol>
  <symbol id="command" viewBox="0 0 24 24"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></symbol>
  <symbol id="lock" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></symbol>
  <symbol id="arrow-down-right" viewBox="0 0 24 24"><path d="M7 7l10 10M17 7v10H7"/></symbol>
  <symbol id="banknote" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></symbol>
  <symbol id="kanban" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7M12 7v4M16 7v9"/></symbol>
  <symbol id="trending-up" viewBox="0 0 24 24"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></symbol>
  <symbol id="dashboard" viewBox="0 0 24 24"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></symbol>
</svg>`;
  function inject() {
    if (document.getElementById('es-icon-sheet')) return;
    var wrap = document.createElement('div');
    wrap.id = 'es-icon-sheet';
    wrap.innerHTML = SHEET;
    document.body.insertBefore(wrap, document.body.firstChild);
  }
  if (document.body) inject();
  else document.addEventListener('DOMContentLoaded', inject);
})();

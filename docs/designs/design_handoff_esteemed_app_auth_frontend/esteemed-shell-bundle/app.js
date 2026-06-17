/* Esteemed Platform Shell — prototype interactions
   View switching · Create dropdown · App Switcher · Settings takeover modal ·
   Toggles + live cost calc · keyboard + click-away · localStorage persistence.
   (HeroUI mapping: Dropdown=Create menu, Modal=Settings takeover, Switch=.toggle, Button=pills) */
(function () {
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var LS = window.localStorage;

  /* ---------- VIEW SWITCHING ---------- */
  function setView(view) {
    if (!view) return;
    var panel = $('[data-view-panel="' + view + '"]');
    if (!panel) return;
    $$('[data-view-panel]').forEach(function (p) { p.classList.toggle('is-active', p === panel); });
    $$('.nav-item[data-view]').forEach(function (n) { n.classList.toggle('is-selected', n.getAttribute('data-view') === view); });
    $$('.mtab[data-view]').forEach(function (n) { n.classList.toggle('is-active', n.getAttribute('data-view') === view); });
    try { LS.setItem('es-view', view); } catch (e) {}
    var body = $('[data-view-panel].is-active'); if (body) body.scrollTop = 0;
  }
  $$('[data-view]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); setView(el.getAttribute('data-view')); closeAll(); });
  });

  /* ---------- CREATE DROPDOWN ---------- */
  var createBtn = $('#createBtn'), createMenu = $('#createMenu');
  function openCreate(open) {
    createMenu.classList.toggle('is-open', open);
    createBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  createBtn.addEventListener('click', function (e) { e.stopPropagation(); var willOpen = !createMenu.classList.contains('is-open'); closeAll(); openCreate(willOpen); });
  $$('#createMenu .menu-item').forEach(function (mi) {
    mi.addEventListener('click', function () { openCreate(false); flash(mi.textContent.trim() + ' — create flow (stub)'); });
  });

  /* ---------- APP SWITCHER ---------- */
  var appsBtn = $('#appsBtn'), appPanel = $('#appPanel'), appScrim = $('#appScrim');
  function openApps(open) {
    appPanel.classList.toggle('is-open', open);
    appScrim.classList.toggle('is-open', open);
    appsBtn.classList.toggle('is-active', open);
    appsBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  appsBtn.addEventListener('click', function (e) { e.stopPropagation(); var willOpen = !appPanel.classList.contains('is-open'); closeAll(); openApps(willOpen); });
  appScrim.addEventListener('click', function () { openApps(false); });
  $$('#appPanel .app-tile').forEach(function (t) {
    t.addEventListener('click', function () {
      $$('#appPanel .app-tile').forEach(function (x) { x.classList.remove('is-current'); });
      t.classList.add('is-current');
      flash('Opening ' + $('.name', t).textContent + ' …'); openApps(false);
    });
  });

  /* ---------- USER MENU ---------- */
  var userBtn = $('#userBtn'), userMenu = $('#userMenu');
  function openUser(open) { if (!userMenu) return; userMenu.classList.toggle('is-open', open); if (userBtn) userBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  if (userBtn) userBtn.addEventListener('click', function (e) { e.stopPropagation(); var willOpen = !userMenu.classList.contains('is-open'); closeAll(); openUser(willOpen); });
  var uSet = $('#userSettings'); if (uSet) uSet.addEventListener('click', function () { openUser(false); openSettings(true); });

  /* ---------- NOTIFICATIONS ---------- */
  var notifBtn = $('#notifBtn'), notifMenu = $('#notifMenu');
  function openNotif(open) { if (!notifMenu) return; notifMenu.classList.toggle('is-open', open); if (notifBtn) notifBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  if (notifBtn) notifBtn.addEventListener('click', function (e) { e.stopPropagation(); var willOpen = !notifMenu.classList.contains('is-open'); closeAll(); openNotif(willOpen); });

  /* ---------- PROMPT STARTERS ---------- */
  $$('.starter').forEach(function (s) { s.addEventListener('click', function () { var inp = $('.star-input-top input'); if (inp) inp.focus(); flash(s.textContent.trim() + ' — starting a prompt…'); }); });

  /* ---------- SETTINGS TAKEOVER MODAL ---------- */
  var overlay = $('#settingsOverlay');
  function openSettings(open) {
    overlay.classList.toggle('is-open', open);
    overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  $('#settingsNav').addEventListener('click', function (e) { e.preventDefault(); closeAll(); openSettings(true); });
  var sTab = $('#settingsTab'); if (sTab) sTab.addEventListener('click', function (e) { e.preventDefault(); closeAll(); openSettings(true); });
  $('#closeSettings').addEventListener('click', function () { openSettings(false); });
  $$('[data-close-settings]').forEach(function (el) { el.addEventListener('click', function () { openSettings(false); }); });
  $$('#settingsOverlay .subnav-item').forEach(function (it) {
    it.addEventListener('click', function (e) { e.preventDefault(); $$('#settingsOverlay .subnav-item').forEach(function (x) { x.classList.remove('is-selected'); }); it.classList.add('is-selected'); });
  });

  /* ---------- TOGGLES + LIVE COST CALC ---------- */
  function recalc() {
    var on = $$('#settingsOverlay .int-row .toggle.is-on').length;
    var srcCost = on * 15;
    var total = 240 + srcCost + 18;
    if ($('#srcCount')) $('#srcCount').textContent = on;
    if ($('#srcCost'))  $('#srcCost').textContent = '$' + srcCost;
    if ($('#calcTotal')) $('#calcTotal').textContent = '$' + total;
  }
  $$('.toggle').forEach(function (tg) {
    if (tg.disabled) return;
    tg.addEventListener('click', function () {
      var on = tg.classList.toggle('is-on');
      tg.setAttribute('aria-checked', on ? 'true' : 'false');
      var row = tg.closest('.int-row');
      if (row) {
        var st = $('.int-status', row);
        if (st) { st.classList.toggle('on', on); st.classList.toggle('off', !on);
          st.innerHTML = '<span class="dot"></span>' + (on ? 'Connected' : 'Not connected'); }
      }
      var id = tg.getAttribute('aria-label'); if (id) { try { LS.setItem('es-int-' + id, on ? '1' : '0'); } catch (e) {} }
      recalc();
    });
  });

  /* ---------- CONVERSATIONS: unified inbox ---------- */
  var threadList = $('#threadList');
  function channelIcon(ch) {
    var m = { star:'#star', email:'#mail', linkedin:'#linkedin', x:'#x-social', slack:'#message' };
    return '<svg><use href="' + (m[ch] || '#message') + '"/></svg>';
  }
  function selectThread(r) {
    $$('#threadList .thread-row').forEach(function (x) { x.classList.remove('is-active'); });
    r.classList.add('is-active'); r.classList.remove('is-unread');
    var d = r.dataset, ch = d.channel;
    $('#rWho').textContent = d.name;
    $('#rSub').textContent = d.context || d.clabel;
    var pill = $('#rPill'); pill.className = 'ch-pill ' + ch; pill.style.marginLeft = 'auto';
    pill.innerHTML = channelIcon(ch) + d.clabel;
    var pic = $('#rPic');
    if (ch === 'star') { pic.style.background = 'var(--es-yellow-50)'; pic.innerHTML = '<svg class="star" style="width:20px;height:20px"><use href="#star"/></svg>'; }
    else { pic.style.background = 'var(--es-surface-alt)'; pic.textContent = d.initials; }
    var head = (ch === 'star')
      ? '<svg class="star"><use href="#star"/></svg><span class="who">' + escapeHtml(d.from) + '</span><span class="time">' + escapeHtml(d.time) + '</span>'
      : '<span class="who">' + escapeHtml(d.from) + '</span><span class="time">' + escapeHtml(d.time) + '</span>';
    $('#rScroll').innerHTML = '<div class="msg"><div class="msg-head">' + head + '</div><div class="msg-bubble">' + escapeHtml(d.msg) + '</div></div>';
    var inp = $('#askStar'); if (inp) inp.placeholder = (ch === 'star') ? 'Ask Star anything…' : 'Reply to ' + d.name + '…';
    var cs = $('#rComposerStar'); if (cs) cs.style.display = (ch === 'star') ? '' : 'none';
    var ib = $('#inbox'); if (ib) ib.classList.add('show-reading');
  }
  if (threadList) {
    $$('#inboxFilters .fchip').forEach(function (c) {
      c.addEventListener('click', function () {
        $$('#inboxFilters .fchip').forEach(function (x) { x.classList.remove('is-active'); });
        c.classList.add('is-active');
        var f = c.getAttribute('data-filter');
        $$('#threadList .thread-row').forEach(function (r) { r.style.display = (f === 'all' || r.dataset.channel === f) ? '' : 'none'; });
      });
    });
    $$('#threadList .thread-row').forEach(function (r) { r.addEventListener('click', function () { selectThread(r); }); });
    var back = $('#inboxBack'); if (back) back.addEventListener('click', function () { var ib = $('#inbox'); if (ib) ib.classList.remove('show-reading'); });
  }

  /* ---------- COMPOSER (Star + channel replies) ---------- */
  var askSend = $('#askStarSend'), askInput = $('#askStar');
  function sendAsk() {
    if (!askInput || !askInput.value.trim()) return;
    var scroll = $('#rScroll'); if (!scroll) return;
    var me = document.createElement('div'); me.className = 'msg'; me.style.marginTop = '20px'; me.style.marginLeft = 'auto'; me.style.maxWidth = '440px';
    me.innerHTML = '<div class="msg-bubble" style="background:var(--es-ink-900);color:#fff">' + escapeHtml(askInput.value.trim()) + '</div>';
    scroll.appendChild(me); askInput.value = ''; scroll.scrollTop = scroll.scrollHeight;
  }
  if (askSend) askSend.addEventListener('click', sendAsk);
  if (askInput) askInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendAsk(); });

  /* ---------- PAGINATION DOTS ---------- */
  $$('.dots').forEach(function (group) {
    $$('.dot', group).forEach(function (d, i) {
      d.addEventListener('click', function () { $$('.dot', group).forEach(function (x) { x.classList.remove('is-active'); }); d.classList.add('is-active'); });
    });
  });

  /* ---------- CALENDAR: view switching + week/day grids ---------- */
  (function () {
    if (!$('#calViews')) return;
    var titles = { month: 'May 2026', week: 'May 17 – 23, 2026', day: 'Wednesday, May 20', agenda: 'Agenda' };
    $$('#calViews .cal-view').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('#calViews .cal-view').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        var v = b.getAttribute('data-cal');
        $$('[data-cal-view]').forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-cal-view') === v); });
        var t = $('#calTitle'); if (t) t.textContent = titles[v] || 'Calendar';
      });
    });
    var HOURS = [8,9,10,11,12,13,14,15,16,17,18];
    function label(h) { var ap = h < 12 ? 'AM' : 'PM', hh = h % 12 || 12; return hh + ' ' + ap; }
    function evTime(h, m) { var ap = h < 12 ? 'a' : 'p', hh = h % 12 || 12; return hh + (m ? ':' + (m < 10 ? '0' + m : m) : '') + ap; }
    var EV = {
      20: [{h:9,m:0,dur:30,t:'Standup with team',c:'slate'},{h:11,m:0,dur:60,t:'Sarah Chen interview',c:'amber'},{h:13,m:30,dur:45,t:'BCT proposal review',c:'blue'},{h:16,m:0,dur:30,t:'Marcus Webb screening',c:'amber'}],
      21: [{h:9,m:30,dur:30,t:'Glenn Hilton follow-up',c:'blue'},{h:12,m:0,dur:60,t:'Lunch · Anthony Dryer',c:'blue'},{h:14,m:0,dur:30,t:'Priya Raman interview',c:'amber'},{h:16,m:30,dur:60,t:'IEEE quarterly review',c:'blue'}]
    };
    function build(container, days) {
      if (!container) return;
      var cols = '56px repeat(' + days.length + ',1fr)';
      var html = '<div class="tg-head" style="grid-template-columns:' + cols + '"><div class="gutter"></div>';
      days.forEach(function (d) { html += '<div class="tg-col-head' + (d.today ? ' today' : '') + '"><div class="dow">' + d.dow + '</div><div class="dnum">' + d.n + '</div></div>'; });
      html += '</div><div class="tg-body">';
      HOURS.forEach(function (h) {
        html += '<div class="tg-row" style="grid-template-columns:' + cols + '"><div class="gutter">' + label(h) + '</div>';
        days.forEach(function (d) {
          html += '<div class="tg-cell">';
          (EV[d.n] || []).forEach(function (e) {
            if (e.h === h) html += '<div class="tg-evt ' + e.c + '" style="top:' + (e.m / 60 * 56) + 'px;height:' + (e.dur / 60 * 56 - 4) + 'px"><b>' + evTime(e.h, e.m) + '</b> ' + e.t + '</div>';
          });
          html += '</div>';
        });
        html += '</div>';
      });
      container.innerHTML = html + '</div>';
    }
    build($('#weekGrid'), [{dow:'Sun',n:17},{dow:'Mon',n:18},{dow:'Tue',n:19},{dow:'Wed',n:20,today:true},{dow:'Thu',n:21},{dow:'Fri',n:22},{dow:'Sat',n:23}]);
    build($('#dayGrid'), [{dow:'Wed',n:20,today:true}]);
  })();

  /* ---------- INSIGHTS: Reports (Recharts-style SVG charts) ---------- */
  (function () {
    var setsEl = document.getElementById('repSets');
    if (!setsEl) return;
    var C = { ink:'#1A1A1A', yellow:'#FEE546', blue:'#2A6FDB', green:'#1F8A5B', red:'#C8341F',
              amber:'#D08A1F', purple:'#6D28D9', teal:'#0E7490', coral:'#C2410C', pink:'#BE2065', slate:'#475569',
              // softer cool categorical palette (for donuts/category fills) — from brand palette
              c1:'#5856D6', c2:'#007AFF', c3:'#34AADC', c4:'#5AC8FA', c5:'#4CD964', c6:'#BB86FC', c7:'#FF2D55',
              gold:'#C99A00', gold2:'#9A7A1A', goldlt:'#EAC83C' };  // gold family for multi-line yellow charts
    var MO = ['Dec','Jan','Feb','Mar','Apr','May'];
    function fmt(n) { n = Math.round(n); if (Math.abs(n) >= 1e6) return (n/1e6).toFixed(n%1e6?1:0)+'M'; if (Math.abs(n) >= 1e3) return (n/1e3).toFixed(n%1e3?1:0)+'k'; return ''+n; }
    // expand sparse points into a dense, lifelike series (interpolate + deterministic noise)
    function densify(vals, n, jitter, seed) {
      seed = seed || 1; var out = [], seg = vals.length - 1;
      for (var i = 0; i < n; i++) {
        var t = i / (n - 1) * seg, lo = Math.floor(t), hi = Math.min(lo + 1, vals.length - 1), f = t - lo;
        var base = vals[lo] + (vals[hi] - vals[lo]) * f;
        var r = Math.sin((i + 1) * 12.9898 * seed + seed * 78.233) * 43758.5453; r = r - Math.floor(r);
        var env = Math.sin(i / (n - 1) * Math.PI);           // less noise at the ends
        out.push(base + (r - 0.5) * jitter * (0.35 + env));
      }
      return out;
    }

    function svgLine(s, opts) {
      opts = opts || {}; var wide = opts.wide;
      var W = wide ? 1180 : 600, H = wide ? 250 : 220, pl = 46, pr = 16, pt = 12, pb = 26;
      var unit = opts.unit || '', seed = opts.seed || 1;
      var dense = opts.dense !== false;
      var series = s.series.map(function (se) {
        var spread = Math.max.apply(null, se.values) - Math.min.apply(null, se.values) || 1;
        return { color: se.color, stroke: se.stroke || se.color, dash: se.dash, name: se.name,
                 values: dense ? densify(se.values, wide ? 150 : 90, spread * 0.07, seed) : se.values };
      });
      var all = series.reduce(function (a, x) { return a.concat(x.values); }, []);
      var max = Math.max.apply(null, all), min = Math.min.apply(null, all);
      var pad = (max - min) * 0.18 || 1; max += pad; min -= pad * 0.5; if (min < 0 && Math.min.apply(null, all) >= 0) min = 0;
      var n = series[0].values.length;
      var X = function (i) { return pl + i * ((W - pl - pr) / (n - 1)); };
      var Y = function (v) { return pt + (1 - (v - min) / (max - min)) * (H - pt - pb); };
      var g = '';                                            // 3 faint dashed gridlines, labels left
      for (var k = 0; k < 3; k++) { var val = min + (max - min) * (k / 2), yy = Y(val); g += '<line class="grid-dash" x1="' + pl + '" y1="' + yy.toFixed(1) + '" x2="' + (W - pr) + '" y2="' + yy.toFixed(1) + '"/><text x="' + (pl - 9) + '" y="' + (yy + 4).toFixed(1) + '" text-anchor="end">' + unit + fmt(val) + '</text>'; }
      var xl = '', L = s.labels; L.forEach(function (l, i) { var xx = pl + (i / (L.length - 1)) * (W - pl - pr); xl += '<text x="' + xx.toFixed(1) + '" y="' + (H - 7) + '" text-anchor="' + (i === 0 ? 'start' : i === L.length - 1 ? 'end' : 'middle') + '">' + l + '</text>'; });
      var paths = '';
      series.forEach(function (se) {
        var d = se.values.map(function (v, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' ');
        if (opts.fill !== false && !se.dash) {
          var gid = 'g' + Math.random().toString(36).slice(2, 7);
          var area = d + 'L' + X(n - 1).toFixed(1) + ',' + (H - pb) + 'L' + X(0) + ',' + (H - pb) + 'Z';
          paths += '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + se.color + '" stop-opacity="0.32"/><stop offset="0.9" stop-color="' + se.color + '" stop-opacity="0"/></linearGradient></defs><path d="' + area + '" fill="url(#' + gid + ')"/>';
        }
        paths += '<path d="' + d + '" fill="none" stroke="' + se.stroke + '" stroke-width="2"' + (se.dash ? ' stroke-dasharray="5 5"' : '') + ' stroke-linejoin="round" stroke-linecap="round"/>';
      });
      return '<svg class="chart-svg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" style="width:100%;height:' + (wide ? 250 : 200) + 'px">' + g + xl + paths + '</svg>';
    }

    function svgBars(s, opts) {
      opts = opts || {}; var wide = opts.wide; var W = wide ? 1180 : 600, H = wide ? 300 : 250, pl = 42, pr = 14, pt = 14, pb = 28;
      var labels = s.labels, series = s.series, unit = opts.unit || '';
      var max = Math.max.apply(null, series.reduce(function (a, x) { return a.concat(x.values); }, [])) * 1.18 || 1;
      var Y = function (v) { return pt + (1 - v / max) * (H - pt - pb); };
      var gw = (W - pl - pr) / labels.length, bgw = gw * 0.62, bw = bgw / series.length;
      var g = '';
      for (var k = 0; k <= 4; k++) { var yy = pt + k * (H - pt - pb) / 4; var val = max * (1 - k / 4); g += '<line class="grid-line" x1="' + pl + '" y1="' + yy + '" x2="' + (W - pr) + '" y2="' + yy + '"/><text x="' + (pl - 8) + '" y="' + (yy + 4) + '" text-anchor="end">' + unit + fmt(val) + '</text>'; }
      var bars = '', xl = '';
      labels.forEach(function (l, i) {
        var gx = pl + i * gw + (gw - bgw) / 2;
        series.forEach(function (se, si) { var v = se.values[i], bx = gx + si * bw, by = Y(v), bh = (H - pb) - by; bars += '<rect x="' + (bx + 1) + '" y="' + by + '" width="' + (bw - 2) + '" height="' + Math.max(0, bh) + '" rx="3" fill="' + se.color + '"/>'; });
        xl += '<text x="' + (pl + i * gw + gw / 2) + '" y="' + (H - 9) + '" text-anchor="middle">' + l + '</text>';
      });
      return '<svg class="chart-svg" viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:auto">' + g + xl + bars + '</svg>';
    }

    function svgDonut(segs) {
      var r = 64, sw = 24, c = 2 * Math.PI * r, cx = 84, cy = 84, total = segs.reduce(function (a, s) { return a + s.v; }, 0), off = 0;
      var ring = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="var(--es-surface-alt)" stroke-width="' + sw + '"/>';
      segs.forEach(function (s) { var len = s.v / total * c; ring += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + s.color + '" stroke-width="' + sw + '" stroke-dasharray="' + len + ' ' + (c - len) + '" stroke-dashoffset="' + (-off) + '" transform="rotate(-90 ' + cx + ' ' + cy + ')"/>'; off += len; });
      var svg = '<svg viewBox="0 0 168 168" style="width:168px;height:168px;flex:none">' + ring + '<text x="' + cx + '" y="' + (cy - 2) + '" text-anchor="middle" style="font-size:22px;font-weight:800;fill:var(--es-ink-900)">' + total + '</text><text x="' + cx + '" y="' + (cy + 16) + '" text-anchor="middle" style="font-size:11px;fill:var(--es-fg-3)">total</text></svg>';
      var leg = '<div class="donut-legend">' + segs.map(function (s) { return '<span class="lg"><span style="display:flex;align-items:center;gap:6px"><span class="sw" style="background:' + s.color + '"></span>' + s.label + '</span><b>' + s.v + '</b></span>'; }).join('') + '</div>';
      return '<div class="donut-wrap">' + svg + leg + '</div>';
    }

    function hbars(items) {
      var max = Math.max.apply(null, items.map(function (i) { return i.v; }));
      return items.map(function (i) { return '<div class="hbar-row"><span class="hbar-name">' + i.name + '</span><span class="hbar-track"><span class="hbar-fill" style="width:' + (i.v / max * 100) + '%;background:' + (i.color || C.yellow) + '"></span></span><span class="hbar-val">' + i.label + '</span></div>'; }).join('');
    }

    function legend(series) { return '<div class="chart-legend">' + series.filter(function (s) { return s.name; }).map(function (s) { return '<span class="lg"><span class="sw" style="background:' + (s.stroke || s.color) + (s.dash ? ';opacity:.5' : '') + '"></span>' + s.name + '</span>'; }).join('') + '</div>'; }

    var lineReg = {}, lineUid = 0;
    function rangesHtml() { return '<div class="port-ranges">' + ['1D', '1M', '1Y', 'All'].map(function (r, i) { return '<button class="pr' + (i === 2 ? ' is-active' : '') + '" data-seed="' + (i + 1) + '">' + r + '</button>'; }).join('') + '</div>'; }

    function card(spec) {
      if (spec.type === 'line') {
        var lid = 'L' + (lineUid++); lineReg[lid] = spec;
        var svg = svgLine(spec, Object.assign({ wide: spec.wide, seed: 3 }, spec.opts));
        if (spec.wide) {
          var right = '<div class="port-right">' + (spec.series.length > 1 ? legend(spec.series) : '<span></span>') + rangesHtml() + '</div>';
          var hd = '<div class="port-head"><div><div class="chart-title">' + spec.title + '</div>' +
            (spec.headline ? '<div class="port-val">' + spec.headline + (spec.delta ? '<span class="port-delta ' + (spec.deltaCls || 'up') + '">' + spec.delta + '</span>' : '') + '</div>' : '') +
            (spec.stamp ? '<div class="port-stamp">' + spec.stamp + '</div>' : (spec.sub ? '<div class="chart-sub">' + spec.sub + '</div>' : '')) +
            '</div>' + right + '</div>';
          return '<div class="chart-card wide" data-lid="' + lid + '">' + hd + svg + '</div>';
        }
        var head = '<div class="chart-head"><div><div class="chart-title">' + spec.title + '</div>' + (spec.sub ? '<div class="chart-sub">' + spec.sub + '</div>' : '') + '</div>' + (spec.series.length > 1 ? legend(spec.series) : '') + '</div>';
        return '<div class="chart-card">' + head + svg + '</div>';
      }
      var body = '', head = '<div class="chart-head"><div><div class="chart-title">' + spec.title + '</div>' + (spec.sub ? '<div class="chart-sub">' + spec.sub + '</div>' : '') + '</div>';
      if (spec.type === 'bars') { head += legend(spec.series); body = svgBars(spec, Object.assign({ wide: spec.wide }, spec.opts)); }
      else if (spec.type === 'donut') { body = svgDonut(spec.segments); }
      else if (spec.type === 'hbars') { body = hbars(spec.items); }
      head += '</div>';
      return '<div class="chart-card' + (spec.wide ? ' wide' : '') + '">' + head + body + '</div>';
    }

    function kpiCard(k) { var arrow = k.cls === 'up' ? '#arrow-up' : k.cls === 'down' ? '#arrow-down-right' : '#arrow-right'; return '<div class="kpi"><div class="kpi-label">' + k.label + '</div><div class="kpi-val">' + k.val + '</div><div class="kpi-foot"><span class="kpi-delta ' + k.cls + '"><svg><use href="' + arrow + '"/></svg>' + k.delta + '</span><span class="kpi-since">' + k.since + '</span></div></div>'; }

    var REPORTS = {
      overview: {
        src: 'Sourced from <b>Acquire</b>, <b>Hire</b>, and connected integrations. Connect more sources to unlock additional reports.',
        kpis: [
          { label: 'Open priorities', val: '12', delta: '3 today', cls: 'flat', since: 'across all apps' },
          { label: 'Time to hire', val: '18 days', delta: '32% faster', cls: 'up', since: 'vs last quarter' },
          { label: 'Active pipeline', val: '$486k', delta: '8.4%', cls: 'up', since: 'vs last month' },
          { label: 'Tasks automated', val: '1,284', delta: '12%', cls: 'up', since: 'this month' }
        ],
        charts: [
          { type: 'line', wide: true, title: 'Activity across apps', headline: '1,284', delta: '+12.4%', deltaCls: 'up', stamp: 'Total actions · last 6 months', labels: MO, series: [{ name: 'Hire', color: C.yellow, stroke: C.gold, values: [120, 145, 160, 158, 190, 220] }, { name: 'Acquire', color: C.goldlt, stroke: C.gold2, values: [80, 95, 110, 140, 155, 175] }] },
          { type: 'donut', title: 'Work by source', segments: [{ label: 'Hire', v: 42, color: C.c1 }, { label: 'Acquire', v: 31, color: C.c2 }, { label: 'Create', v: 16, color: C.c3 }, { label: 'Curate', v: 11, color: C.c4 }] },
          { type: 'hbars', title: 'Top projects by activity', items: [{ name: 'Q3 Eng hires', v: 320, label: '320' }, { name: 'BCT proposal', v: 250, label: '250' }, { name: 'IEEE pilot', v: 190, label: '190' }, { name: 'esteemed.io', v: 140, label: '140' }] }
        ]
      },
      finance: {
        src: 'Sourced from <b>Acquire</b> (payroll & onboarding) and <b>Salesforce</b>. Figures in USD.',
        kpis: [
          { label: 'Revenue (MTD)', val: '$1.24M', delta: '9.2%', cls: 'up', since: 'vs last month' },
          { label: 'Gross margin', val: '62%', delta: '3 pts', cls: 'up', since: 'vs last month' },
          { label: 'Monthly burn', val: '$310k', delta: '4.1%', cls: 'down', since: 'vs last month' },
          { label: 'Runway', val: '14 mo', delta: '1 mo', cls: 'down', since: 'vs last month' }
        ],
        charts: [
          { type: 'line', wide: true, title: 'Revenue vs. expenses', headline: '$1.24M', delta: '+9.2%', deltaCls: 'up', stamp: 'Revenue this month · trailing 6 months', opts: { unit: '$' }, labels: MO, series: [{ name: 'Revenue', color: C.green, values: [820000, 910000, 980000, 1050000, 1135000, 1240000] }, { name: 'Expenses', color: C.red, values: [610000, 640000, 690000, 720000, 760000, 800000] }] },
          { type: 'donut', title: 'Cost breakdown', segments: [{ label: 'Payroll', v: 48, color: C.c1 }, { label: 'Contractors', v: 26, color: C.c2 }, { label: 'Tooling', v: 14, color: C.c6 }, { label: 'Operations', v: 12, color: C.c3 }] },
          { type: 'bars', title: 'Spend by department', labels: ['Eng', 'Sales', 'Mktg', 'Ops', 'G&A'], series: [{ name: 'This month', color: C.ink, values: [142000, 98000, 76000, 54000, 38000] }] },
          { type: 'hbars', title: 'Largest invoices', items: [{ name: 'AWS', v: 42000, label: '$42k', color: C.slate }, { name: 'Contractor pool', v: 88000, label: '$88k', color: C.teal }, { name: 'Benefits', v: 31000, label: '$31k', color: C.blue }, { name: 'Software', v: 19000, label: '$19k', color: C.purple }] }
        ]
      },
      workforce: {
        src: 'Sourced from <b>Hire</b> (ATS) and <b>Acquire</b> (system of record). Includes Colleagues network.',
        kpis: [
          { label: 'Headcount', val: '248', delta: '6.0%', cls: 'up', since: 'vs last quarter' },
          { label: 'New hires (MTD)', val: '14', delta: '3', cls: 'up', since: 'vs last month' },
          { label: 'Attrition', val: '4.2%', delta: '0.8 pts', cls: 'up', since: 'improving' },
          { label: 'Time to fill', val: '23 days', delta: '5 days', cls: 'up', since: 'faster' }
        ],
        charts: [
          { type: 'line', wide: true, title: 'Headcount growth', headline: '248', delta: '+6.0%', deltaCls: 'up', stamp: 'FTE + active contractors · trailing 6 months', labels: MO, series: [{ name: 'Headcount', color: C.yellow, stroke: C.gold, values: [210, 218, 225, 233, 240, 248] }] },
          { type: 'bars', title: 'Hires vs. departures', labels: MO, series: [{ name: 'Hires', color: C.green, values: [9, 11, 8, 13, 12, 14] }, { name: 'Departures', color: C.red, values: [4, 3, 5, 4, 6, 3] }] },
          { type: 'donut', title: 'Workforce by type', segments: [{ label: 'Full-time', v: 162, color: C.c2 }, { label: 'Contractor', v: 54, color: C.c3 }, { label: 'Colleagues', v: 32, color: C.c4 }] },
          { type: 'hbars', title: 'Open roles by team', items: [{ name: 'Engineering', v: 8, label: '8', color: C.amber }, { name: 'Sales', v: 5, label: '5', color: C.amber }, { name: 'Design', v: 3, label: '3', color: C.amber }, { name: 'Ops', v: 2, label: '2', color: C.amber }] }
        ]
      },
      projects: {
        src: 'Sourced from <b>Jira</b>. Current sprint and trailing activity.',
        kpis: [
          { label: 'Open issues', val: '156', delta: '11', cls: 'down', since: 'vs last week' },
          { label: 'In progress', val: '38', delta: '5', cls: 'flat', since: 'this sprint' },
          { label: 'Velocity', val: '62 pts', delta: '7%', cls: 'up', since: 'vs last sprint' },
          { label: 'Avg cycle time', val: '3.4 days', delta: '0.6 days', cls: 'up', since: 'faster' }
        ],
        charts: [
          { type: 'line', wide: true, title: 'Sprint burndown', headline: '8 pts', delta: 'remaining', deltaCls: 'flat', stamp: 'Story points · ideal vs. actual', labels: ['D1', 'D3', 'D5', 'D7', 'D9', 'D10'], series: [{ name: 'Ideal', color: C.slate, stroke: C.slate, values: [62, 50, 38, 25, 12, 0], dash: true }, { name: 'Actual', color: C.yellow, stroke: C.gold, values: [62, 55, 47, 33, 20, 8] }], opts: { fill: true, dense: false } },
          { type: 'bars', title: 'Issues by status', labels: ['To do', 'In prog', 'Review', 'Done'], series: [{ name: 'Issues', color: C.blue, values: [56, 38, 22, 140] }] },
          { type: 'donut', title: 'Issues by type', segments: [{ label: 'Story', v: 64, color: C.c5 }, { label: 'Task', v: 48, color: C.c2 }, { label: 'Bug', v: 32, color: C.c7 }, { label: 'Epic', v: 12, color: C.c6 }] },
          { type: 'hbars', title: 'Issues by assignee', items: [{ name: 'A. Dryer', v: 28, label: '28', color: C.blue }, { name: 'S. Chen', v: 22, label: '22', color: C.blue }, { name: 'P. Raman', v: 19, label: '19', color: C.blue }, { name: 'M. Webb', v: 14, label: '14', color: C.blue }] }
        ]
      },
      sales: {
        src: 'Sourced from <b>Salesforce</b> and <b>Acquire</b>. Open + closed opportunities.',
        kpis: [
          { label: 'Open pipeline', val: '$2.4M', delta: '14%', cls: 'up', since: 'vs last month' },
          { label: 'Win rate', val: '31%', delta: '2 pts', cls: 'up', since: 'vs last quarter' },
          { label: 'Avg deal size', val: '$48k', delta: '5%', cls: 'up', since: 'vs last quarter' },
          { label: 'Closed won (MTD)', val: '$486k', delta: '8.4%', cls: 'up', since: 'vs last month' }
        ],
        charts: [
          { type: 'line', wide: true, title: 'Pipeline trend', headline: '$2.4M', delta: '+14%', deltaCls: 'up', stamp: 'Open pipeline value · trailing 6 months', opts: { unit: '$' }, labels: MO, series: [{ name: 'Pipeline', color: C.yellow, stroke: C.gold, values: [1600000, 1750000, 1900000, 2050000, 2200000, 2400000] }] },
          { type: 'bars', title: 'Deals by stage', labels: ['Lead', 'Qual', 'Prop', 'Neg', 'Won'], series: [{ name: 'Deals', color: C.purple, values: [42, 31, 18, 11, 14] }] },
          { type: 'donut', title: 'Pipeline by source', segments: [{ label: 'Inbound', v: 38, color: C.c1 }, { label: 'Outbound', v: 29, color: C.c2 }, { label: 'Referral', v: 21, color: C.c3 }, { label: 'Partner', v: 12, color: C.c4 }] },
          { type: 'hbars', title: 'Top opportunities', items: [{ name: 'IEEE Marketplace', v: 180000, label: '$180k', color: C.purple }, { name: 'BCT Partners', v: 96000, label: '$96k', color: C.purple }, { name: 'Elevated Third', v: 72000, label: '$72k', color: C.purple }, { name: 'ImageX', v: 48000, label: '$48k', color: C.purple }] }
        ]
      }
    };

    function renderReport(key) {
      var r = REPORTS[key]; if (!r) return;
      lineReg = {}; lineUid = 0;
      document.getElementById('repSrcNote').innerHTML = '<svg><use href="#bolt"/></svg><span>' + r.src + '</span>';
      document.getElementById('repKpis').innerHTML = r.kpis.map(kpiCard).join('');
      var host = document.getElementById('repCharts');
      host.innerHTML = r.charts.map(card).join('');
      // wire range pills on wide line cards
      host.querySelectorAll('.chart-card[data-lid]').forEach(function (cardEl) {
        var spec = lineReg[cardEl.getAttribute('data-lid')];
        cardEl.querySelectorAll('.pr').forEach(function (pill) {
          pill.addEventListener('click', function () {
            cardEl.querySelectorAll('.pr').forEach(function (x) { x.classList.remove('is-active'); });
            pill.classList.add('is-active');
            var seed = +pill.getAttribute('data-seed');
            var fresh = svgLine(spec, Object.assign({ wide: true, seed: seed }, spec.opts));
            var old = cardEl.querySelector('svg.chart-svg');
            if (old) old.outerHTML = fresh;
          });
        });
      });
    }
    setsEl.querySelectorAll('.rep-set').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.classList.contains('locked')) { flash('Connect ' + b.textContent.replace(/.*Connect /, '') + ' to enable this report'); return; }
        setsEl.querySelectorAll('.rep-set').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        renderReport(b.getAttribute('data-rep'));
      });
    });
    renderReport('overview');
  })();

  /* ---------- PROJECTS: section filter ---------- */
  (function () {
    var pf = document.getElementById('projFilters'); if (!pf) return;
    pf.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () {
        pf.querySelectorAll('.chip').forEach(function (x) { x.classList.remove('is-active'); });
        c.classList.add('is-active');
        var f = c.getAttribute('data-pfilter');
        document.querySelectorAll('.proj-section').forEach(function (s) {
          s.style.display = (f === 'all' || s.getAttribute('data-section') === f) ? '' : 'none';
        });
      });
    });
  })();

  /* ---------- GLOBAL CLOSE / KEYBOARD ---------- */
  function closeAll() { openCreate(false); openApps(false); openUser(false); openNotif(false); }
  document.addEventListener('click', function (e) {
    if (createMenu.classList.contains('is-open') && !e.target.closest('.create-wrap')) openCreate(false);
    if (appPanel.classList.contains('is-open') && !e.target.closest('#appPanel') && !e.target.closest('#appsBtn')) openApps(false);
    if (userMenu && userMenu.classList.contains('is-open') && !e.target.closest('.user-wrap')) openUser(false);
    if (notifMenu && notifMenu.classList.contains('is-open') && !e.target.closest('.user-wrap')) openNotif(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (overlay.classList.contains('is-open')) return openSettings(false);
      closeAll();
    }
  });

  /* ---------- TINY TOAST ---------- */
  var toast;
  function flash(msg) {
    if (!toast) {
      toast = document.createElement('div'); document.body.appendChild(toast);
      toast.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(12px);background:#111;color:#fff;padding:11px 18px;border-radius:999px;font:600 14px/1 Inter,sans-serif;z-index:999;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,.25)';
    }
    toast.textContent = msg; toast.style.opacity = '1'; toast.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(toast._t); toast._t = setTimeout(function () { toast.style.opacity = '0'; toast.style.transform = 'translateX(-50%) translateY(12px)'; }, 1600);
  }
  function escapeHtml(s) { return s.replace(/[&<>"]/g, function (c) { return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]; }); }

  /* ---------- RESTORE STATE ---------- */
  try {
    var v = LS.getItem('es-view'); if (v) setView(v);
    $$('.toggle[aria-label]').forEach(function (tg) {
      var saved = LS.getItem('es-int-' + tg.getAttribute('aria-label'));
      if (saved === null) return;
      var on = saved === '1';
      tg.classList.toggle('is-on', on); tg.setAttribute('aria-checked', on ? 'true' : 'false');
      var row = tg.closest('.int-row'); if (row) { var st = $('.int-status', row); if (st) { st.classList.toggle('on', on); st.classList.toggle('off', !on); st.innerHTML = '<span class="dot"></span>' + (on ? 'Connected' : 'Not connected'); } }
    });
    recalc();
  } catch (e) {}
})();

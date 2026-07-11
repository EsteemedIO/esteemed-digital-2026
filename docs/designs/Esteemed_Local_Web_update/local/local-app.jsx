/* Esteemed — Local Markets landing page (South Sound). Depends on window.MARKET. */
const { useState } = React;
const M = window.MARKET;

/* ---------- Star + icons ---------- */
const EsStar = ({ size = 14, fill = '#FEE546', style }) => (
  <svg width={size} height={size} viewBox="0 0 268 268" style={style} aria-hidden="true">
    <path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill={fill}/>
  </svg>
);

const Icon = ({ name, size = 20, stroke = 1.75 }) => {
  const paths = {
    neighbors: <><path d="M3 11.5 8 7l5 4.5"/><path d="M4.5 10.5V20h7v-9.5"/><path d="M13 20h7v-7l-4-3.2"/><path d="M16 9V5.5"/></>,
    refresh: <><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v5h-5"/></>,
    sliders: <><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></>,
    users: <><path d="M16 18a5 5 0 0 0-10 0"/><circle cx="11" cy="8" r="3.5"/><path d="M18 14a4 4 0 0 1 4 4"/><circle cx="18.5" cy="7.5" r="2.5"/></>,
    check: <><path d="M20 6 9 17l-5-5"/></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    arrowLeft: <><path d="M19 12H5M11 5l-7 7 7 7"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    pen: <><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></>,
    server: <><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3 7.5 9 6 9-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></>,
    quote: <><path d="M6 11c0-2.8 2-5 5-5v2.2C9.3 8.2 8.5 9.4 8.5 11H11v6H4v-4A2 2 0 0 1 6 11Zm10 0c0-2.8 2-5 5-5v2.2c-1.7 0-2.5 1.2-2.5 2.8H21v6h-7v-4a2 2 0 0 1 2-2Z"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
};

/* Official product icon (white-paneled SVG tile) */
const OFFICIAL = new Set(['acquire','hire','create','curate','connect','intelligence','assist','support','cloud']);
const ProdIcon = ({ name, size = 48 }) => (
  OFFICIAL.has(name)
    ? <img src={`pricing/product-icons/${name}.svg`} alt="" width={size} height={size} style={{ display: 'block', flexShrink: 0 }}/>
    : <TileIcon name={name} size={size}/>
);
/* Yellow tile + black glyph (for generic / non-product icons) */
const TileIcon = ({ name, size = 48 }) => (
  <div style={{ width: size, height: size, borderRadius: Math.round(size * 0.24), background: 'var(--es-yellow-500)', color: 'var(--es-ink-1000)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <Icon name={name} size={Math.round(size * 0.52)} stroke={2}/>
  </div>
);

/* ---------- Nav ---------- */
const Chevron = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 5, opacity: .65 }} aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
);
const Nav = () => {
  const items = [
    { label: 'Products & Services', chev: true },
    { label: 'Solutions', chev: true },
    { label: 'Resources', chev: true },
    { label: 'Pricing', chev: false },
  ];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(250,250,247,.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--es-border)' }}>
      <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center', height: 72 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}><img src="pricing/assets/esteemed-lockup.svg" alt="esteemed" style={{ height: 24, display: 'block' }}/></a>
        <div className="nav-links" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', gap: 4 }}>
          {items.map(it => (
            <a key={it.label} href="#" style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 13px', borderRadius: 10, fontSize: 15, fontWeight: 600, color: 'var(--es-fg-2)', whiteSpace: 'nowrap' }}>{it.label}{it.chev && <Chevron/>}</a>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href="#" className="btn btn-ghost btn-sm" style={{ borderRadius: 999, whiteSpace: 'nowrap' }}>Login</a>
          <a href="#" className="btn btn-primary btn-sm" style={{ borderRadius: 999, whiteSpace: 'nowrap' }}>Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

/* ---------- Hero ---------- */
const Hero = () => (
  <header className="hero-full">
    <image-slot id="local-hero" src="https://images.pexels.com/photos/12735489/pexels-photo-12735489.jpeg?auto=compress&cs=tinysrgb&w=1900" shape="rect" fit="cover" placeholder="Drop a South Sound photo — Capitol dome, Budd Inlet waterfront, or a downtown Olympia main street" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></image-slot>
    <div className="hero-scrim"></div>
    <div className="container hero-inner">
      <div className="hero-tags">
        <div className="prog-tag on-photo"><EsStar size={13} fill="#FEE546"/><span>{M.program}</span></div>
        <div className="loc-pill on-photo"><Icon name="pin" size={14} stroke={2.2}/><span>{M.region}, {M.stateAbbr}</span></div>
      </div>
      <h1 className="hero-h1">
        {M.headline[0]}<span className="hero-em">{M.headline[1]}</span>{M.headline[2]}
      </h1>
      <p className="hero-sub">{M.sub}</p>
      <div className="hero-cta">
        <a href="#offer" className="btn btn-primary" style={{ borderRadius: 999 }}>{M.ctaPrimary}</a>
        <a href="#how" className="btn btn-onDark" style={{ borderRadius: 999 }}>{M.ctaSecondary}</a>
      </div>
      <div className="hero-meta">
        <span className="hero-star"><EsStar size={15} fill="#FEE546"/></span>
        <span><strong>Free website rebuild</strong> with Managed Hosting · Local team since 2011 · {M.phone}</span>
      </div>
    </div>
  </header>
);

/* ---------- Local trust strip ---------- */
const Stats = () => (
  <div style={{ background: 'var(--es-ink-900)', color: '#fff' }}>
    <div className="container stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, padding: '30px 32px' }}>
      {M.stats.map((s, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-.02em', color: 'var(--es-yellow-500)' }}>{s.n}</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,.75)', lineHeight: 1.35 }}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ---------- Section header ---------- */
const SectionHead = ({ kicker, title, sub, center }) => (
  <div style={{ maxWidth: center ? 720 : 640, margin: center ? '0 auto' : 0, textAlign: center ? 'center' : 'left' }}>
    <div className="es-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><EsStar size={12} fill="#B89D1F"/>{kicker}</div>
    <h2 style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.2vw,40px)', letterSpacing: '-.025em', lineHeight: 1.06, margin: '14px 0 0', textWrap: 'balance' }}>{title}</h2>
    {sub && <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--es-fg-2)', margin: '14px 0 0' }}>{sub}</p>}
  </div>
);

/* ---------- Why ---------- */
const Why = () => (
  <section className="container" style={{ padding: '84px 32px 28px' }}>
    <SectionHead kicker="Why local businesses choose us" title="Big-agency websites, with a South Sound handshake" sub="Expert website design and WebOps support — the tech, content and SEO — backed by people who live and work where you do." />
    <div className="why-grid">
      {M.why.map((w, i) => (
        <div key={i} className="why-item">
          <div className="why-ico"><Icon name={w.icon} size={22} stroke={1.9}/></div>
          <div className="why-accent"></div>
          <div className="why-title">{w.title}</div>
          <p className="why-body">{w.body}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ---------- Everything you need on one platform ---------- */
const PlatformMock = ({ type }) => {
  if (type === 'editor') return (
    <div className="pm-browser">
      <div className="pm-bar"><i></i><i></i><i></i></div>
      <div className="pm-canvas">
        <div className="pm-h"></div>
        <div className="pm-p"></div>
        <div className="pm-p short"></div>
        <span className="pm-btn">Button</span>
        <div className="pm-tool"><span className="pm-aa">Aa</span><span className="pm-sw s1"></span><span className="pm-sw s2"></span><span className="pm-sw s3"></span></div>
      </div>
    </div>
  );
  if (type === 'ai') return (
    <div className="pm-ai">
      <div className="pm-chip pm-c1"><span className="pm-aa">Aa</span><span className="pm-sw s1"></span><span className="pm-sw s2"></span><span className="pm-sw s3"></span></div>
      <div className="pm-chip pm-c2">Heading<div className="pm-subline"></div></div>
      <div className="pm-chip pm-c3"><span className="pm-blob"></span></div>
    </div>
  );
  if (type === 'email') return (
    <div className="pm-mail">
      <div className="pm-mail-badge">
        <svg width="58" height="44" viewBox="0 0 58 44" fill="none" aria-label="Gmail">
          <path d="M4 44h9V22L0 12v28a4 4 0 0 0 4 4z" fill="#34A853"/>
          <path d="M45 44h9a4 4 0 0 0 4-4V12L45 22v22z" fill="#4285F4"/>
          <path d="M45 8 29 20 13 8v14l16 12 16-12V8z" fill="#EA4335"/>
          <path d="M58 6.4V12L45 22V8l7.7-5.8C55.1.4 58 2.2 58 6.4z" fill="#FBBC04"/>
          <path d="M0 6.4V12l13 10V8L5.3 2.2C2.9.4 0 2.2 0 6.4z" fill="#C5221F"/>
        </svg>
      </div>
      <div className="pm-mail-cap">you@yourshop.com</div>
    </div>
  );
  if (type === 'domain') return (
    <div className="pm-domain">
      <div className="pm-dom-card">
        <div className="pm-dom-input"><Icon name="search" size={15} stroke={2}/><span>yourshop<b>.com</b></span></div>
        <span className="pm-dom-ok"><Icon name="check" size={13} stroke={2.5}/>Available</span>
      </div>
      <div className="pm-tlds">
        <span>.org</span><span>.co</span><span className="on">.shop</span>
      </div>
    </div>
  );
  return null;
};

const Platform = () => (
  <section className="plat-sec">
    <div className="plat-head">
      <h2 className="plat-title">{M.platformHead.title}</h2>
      <p className="plat-sub">{M.platformHead.sub}</p>
    </div>
    <div className="plat-grid">
      {M.platformApps.map((a, i) => (
        <div key={i} className={'plat-card pmc-' + a.mock}>
          <div className="plat-card-head">
            <div className="plat-card-title">{a.title}</div>
            <p className="plat-card-desc">{a.desc}</p>
          </div>
          <div className="plat-art"><PlatformMock type={a.mock}/></div>
          <span className="plat-arrow"><Icon name="arrow" size={17} stroke={2.25}/></span>
        </div>
      ))}
    </div>
  </section>
);

/* ---------- Feature mock UIs (float on the photo, Squarespace-style) ---------- */
const MOCK = { 'cap-store': 'store', 'cap-book': 'book', 'cap-blog': 'blog', 'cap-forms': 'form', 'cap-donate': 'donate', 'cap-member': 'member', 'cap-seo': 'seo', 'cap-gallery': 'gallery' };
const pxThumb = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400`;
const Stars = () => <span style={{ color: '#E8B93B', fontSize: 12, letterSpacing: '1px' }}>★★★★★</span>;
const mockBtn = { marginTop: 14, width: '100%', border: 'none', borderRadius: 999, padding: '10px 0', background: 'var(--es-yellow-500)', color: 'var(--es-ink-1000)', fontWeight: 700, fontSize: 13, cursor: 'default' };
const pill = (on) => ({ flex: 1, textAlign: 'center', fontSize: 11.5, fontWeight: 700, padding: '7px 0', borderRadius: 8, border: '1px solid var(--es-border)', background: on ? 'var(--es-ink-900)' : '#fff', color: on ? '#fff' : 'var(--es-fg-2)' });
const Mock = ({ type }) => {
  if (type === 'store') return (
    <div className="ss-mock">
      <div style={{ display: 'flex', gap: 12 }}>
        <img src={pxThumb(2467287)} alt="" style={{ width: 62, height: 62, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }}/>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--es-ink-900)' }}>Harbor Blend · 12 oz</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}><Stars/><span style={{ fontSize: 11, color: 'var(--es-fg-3)' }}>(48)</span></div>
          <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--es-ink-900)', marginTop: 4 }}>$18.00</div>
        </div>
      </div>
      <button style={mockBtn}>Add to cart</button>
      <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--es-fg-3)', marginTop: 9 }}>Free local pickup in Olympia</div>
    </div>
  );
  if (type === 'book') {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
      <div className="ss-mock">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <img src={pxThumb(34164459)} alt="" style={{ width: 34, height: 34, borderRadius: 999, objectFit: 'cover' }}/>
          <div><div style={{ fontWeight: 700, fontSize: 13, color: 'var(--es-ink-900)' }}>Design consultation</div><div style={{ fontSize: 11, color: 'var(--es-fg-3)' }}>30 min · Free</div></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <div style={{ fontWeight: 800, fontSize: 14, fontFamily: 'var(--es-font-display)' }}>September</div>
          <div style={{ fontSize: 11, color: 'var(--es-fg-3)' }}>2026</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, textAlign: 'center' }}>
          {days.map((d, i) => <div key={'d' + i} style={{ fontSize: 10, fontWeight: 700, color: 'var(--es-fg-3)' }}>{d}</div>)}
          {nums.map(n => <div key={n} style={{ fontSize: 11, fontWeight: 600, padding: '4px 0', borderRadius: 8, background: n === 14 ? 'var(--es-ink-900)' : 'transparent', color: n === 14 ? '#fff' : 'var(--es-fg-2)' }}>{n}</div>)}
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
          {['10:30', '11:15', '1:00'].map((t, i) => <span key={t} style={pill(i === 0)}>{t}</span>)}
        </div>
      </div>
    );
  }
  if (type === 'blog') return (
    <div className="ss-mock">
      <img src={pxThumb(35134952)} alt="" style={{ width: '100%', height: 92, borderRadius: 12, objectFit: 'cover', display: 'block' }}/>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.09em', color: 'var(--es-warm-600)', marginTop: 12 }}>JOURNAL</div>
      <div style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 15, lineHeight: 1.2, marginTop: 5, color: 'var(--es-ink-900)' }}>5 ways to bring locals through your door</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 11 }}>
        <img src={pxThumb(34164459)} alt="" style={{ width: 22, height: 22, borderRadius: 999, objectFit: 'cover' }}/>
        <span style={{ fontSize: 11.5, color: 'var(--es-fg-3)' }}>Marisol Reyes · Aug 12</span>
      </div>
    </div>
  );
  if (type === 'form') {
    const field = (label, ph, h) => (
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--es-fg-3)', marginBottom: 4 }}>{label}</div>
        <div style={{ height: h || 34, borderRadius: 8, background: '#fff', border: '1px solid var(--es-border-strong)', padding: '9px 11px', fontSize: 12, color: 'var(--es-warm-500)' }}>{ph}</div>
      </div>
    );
    return (
      <div className="ss-mock">
        <div style={{ fontWeight: 800, fontSize: 14, fontFamily: 'var(--es-font-display)', marginBottom: 12 }}>Get in touch</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {field('Name', 'Marisol Reyes')}
          {field('Email', 'hello@harborcoffee.com')}
          {field('Message', 'Tell us about your project…', 50)}
        </div>
        <button style={mockBtn}>Send message</button>
      </div>
    );
  }
  if (type === 'donate') return (
    <div className="ss-mock">
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <img src={pxThumb(34164459)} alt="" style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }}/>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--es-ink-900)' }}>South Sound Food Bank</div>
          <div style={{ fontSize: 11, color: 'var(--es-fg-3)' }}>Fall giving campaign</div>
        </div>
      </div>
      <div style={{ marginTop: 13 }}>
        <div style={{ height: 7, borderRadius: 999, background: 'var(--es-warm-200)', overflow: 'hidden' }}><div style={{ width: '68%', height: '100%', background: 'var(--es-success)' }}></div></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11.5 }}><span style={{ fontWeight: 700, color: 'var(--es-ink-900)' }}>$6,800 raised</span><span style={{ color: 'var(--es-fg-3)' }}>of $10,000</span></div>
      </div>
      <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
        {['$25', '$50', '$100'].map((a, i) => <span key={a} style={pill(i === 1)}>{a}</span>)}
      </div>
      <button style={mockBtn}>Donate</button>
    </div>
  );
  if (type === 'member') return (
    <div className="ss-mock">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontWeight: 800, fontSize: 14, fontFamily: 'var(--es-font-display)' }}>Members’ Circle</div>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--es-success)', background: 'var(--es-success-bg)', borderRadius: 999, padding: '3px 8px' }}>Active</span>
      </div>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[['Supporter', '$12', 'mo', false], ['Patron', '$120', 'yr', true]].map(([n, p, per, on]) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 10, border: on ? '1px solid var(--es-ink-900)' : '1px solid var(--es-border)', background: on ? 'var(--es-warm-50)' : '#fff' }}>
            <div><div style={{ fontWeight: 700, fontSize: 13, color: 'var(--es-ink-900)' }}>{n}</div><div style={{ fontSize: 11, color: 'var(--es-fg-3)' }}>Billed {per === 'mo' ? 'monthly' : 'yearly'}</div></div>
            <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--es-ink-900)' }}>{p}<span style={{ fontSize: 11, color: 'var(--es-fg-3)', fontWeight: 600 }}>/{per}</span></div>
          </div>
        ))}
      </div>
      <button style={mockBtn}>Join now</button>
    </div>
  );
  if (type === 'seo') return (
    <div className="ss-mock">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--es-warm-100)', borderRadius: 999, padding: '9px 13px', fontSize: 12.5, color: 'var(--es-fg-2)' }}>
        <Icon name="search" size={14} stroke={2}/> coffee near me
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 13 }}>
        <img src={pxThumb(2467287)} alt="" style={{ width: 38, height: 38, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}/>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--es-ink-900)' }}>Percival Landing Coffee</div>
          <div style={{ fontSize: 11, color: 'var(--es-fg-3)' }}><span style={{ color: '#E8B93B' }}>★</span> 4.9 (212) · Open now</div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, color: '#fff', background: 'var(--es-success)', borderRadius: 999, padding: '3px 8px' }}>#1</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10, opacity: .45 }}>
        <div style={{ width: 38, height: 38, borderRadius: 8, background: 'var(--es-warm-200)', flexShrink: 0 }}></div>
        <div style={{ flex: 1 }}><div style={{ height: 8, width: '70%', borderRadius: 4, background: 'var(--es-warm-200)' }}></div><div style={{ height: 7, width: '45%', borderRadius: 4, background: 'var(--es-warm-200)', marginTop: 5 }}></div></div>
      </div>
    </div>
  );
  if (type === 'gallery') return (
    <div className="ss-mock" style={{ padding: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
        {[2467287, 35134952, 34164459].map(id => <img key={id} src={pxThumb(id)} alt="" style={{ width: '100%', height: 66, borderRadius: 8, objectFit: 'cover', display: 'block' }}/>)}
        <div style={{ position: 'relative' }}>
          <img src={pxThumb(29884920)} alt="" style={{ width: '100%', height: 66, borderRadius: 8, objectFit: 'cover', display: 'block' }}/>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 8, background: 'rgba(10,10,10,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>+9</div>
        </div>
      </div>
    </div>
  );
  return null;
};

/* ---------- Trusted-by strip ---------- */
const Trusted = () => (
  <section className="container" style={{ padding: '48px 32px 8px' }}>
    <div className="trust-strip">
      <div>
        <div className="es-eyebrow" style={{ marginBottom: 14 }}>Trusted by teams large &amp; small</div>
        <div style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 'clamp(22px,2.5vw,32px)', letterSpacing: '-.02em', lineHeight: 1.08, color: 'var(--es-fg-1)' }}>No project too big. No business too small.</div>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--es-fg-2)', margin: '12px 0 0', maxWidth: 440 }}>From South Sound main streets to major institutions. We’re proud to build for organizations like the University of Oklahoma’s MUAT, Alvernia University, the IEEE, and Washington’s Department of Fish &amp; Wildlife.</p>
      </div>
      <div className="trust-logos">
        {['University of Oklahoma', 'Alvernia University', 'IEEE', 'WDFW'].map(n => <span key={n} className="trust-logo">{n}</span>)}
      </div>
    </div>
  </section>
);

/* ---------- Services carousel (Squarespace-style, photography-forward) ---------- */
const ServicesCarousel = () => {
  const caps = M.capabilities;
  const N = caps.length;
  const items = caps.concat(caps).concat(caps); // 3 copies for seamless wrap
  const [pos, setPos] = React.useState(N);       // start in the middle copy
  const [tx, setTx] = React.useState(0);
  const [anim, setAnim] = React.useState(true);
  const wrapRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const active = ((pos % N) + N) % N;
  const recalc = React.useCallback(() => {
    const wrap = wrapRef.current, track = trackRef.current;
    if (!wrap || !track) return;
    const card = track.children[pos];
    if (!card) return;
    setTx(wrap.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2));
  }, [pos]);
  React.useEffect(() => { recalc(); }, [recalc]);
  React.useEffect(() => {
    window.addEventListener('resize', recalc);
    const id = setTimeout(recalc, 300);
    return () => { window.removeEventListener('resize', recalc); clearTimeout(id); };
  }, [recalc]);
  const go = (d) => { setAnim(true); setPos(p => p + d); };
  const toTab = (i) => { setAnim(true); setPos(p => p - (((p % N) + N) % N) + i); };
  const onEnd = () => {
    if (pos < N || pos >= 2 * N) { setAnim(false); setPos(N + active); }
  };
  return (
    <section className="ss-sec">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="ss-title">Scale your business, local or global.</h2>
        <p className="ss-sub">We have the experts and tools to help.</p>
        <div className="ss-tabs">
          {caps.map((c, i) => (
            <button key={i} className={'ss-tab' + (i === active ? ' on' : '')} onClick={() => toTab(i)}>{c.title}</button>
          ))}
        </div>
      </div>
      <div className="ss-viewport" ref={wrapRef}>
        <div className="ss-track" ref={trackRef} onTransitionEnd={onEnd} style={{ transform: `translateX(${tx}px)`, transition: anim ? undefined : 'none' }}>
          {items.map((c, i) => {
            const copy = Math.floor(i / N);
            const slotId = copy === 1 ? c.img : c.img + '-' + copy;
            return (
              <div key={i} className={'ss-card' + (i === pos ? ' on' : '')} onClick={() => toTab(i % N)}>
                <image-slot id={slotId} src={c.src} shape="rect" fit="cover" placeholder={c.imgHint} style={{ display: 'block', width: '100%', height: '100%' }}></image-slot>
                <div className="ss-overlay">
                  {c.tag && <span className="ss-tag">{c.tag}</span>}
                  <div className="ss-card-text">
                    <h3 className="ss-card-title">{c.headline}</h3>
                    <p className="ss-card-desc">{c.body}</p>
                  </div>
                </div>
                {MOCK[c.img] && <Mock type={MOCK[c.img]}/>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
        <div className="tc-arrows">
          <button onClick={() => go(-1)} aria-label="Previous"><Icon name="arrowLeft" size={20} stroke={2}/></button>
          <button onClick={() => go(1)} aria-label="Next"><Icon name="arrow" size={20} stroke={2}/></button>
        </div>
      </div>
    </section>
  );
};

/* ---------- How it works ---------- */
const How = () => (
  <section id="how" style={{ background: 'var(--es-warm-100)', borderTop: '1px solid var(--es-border)', borderBottom: '1px solid var(--es-border)', marginTop: 80 }}>
    <div className="container" style={{ padding: '80px 32px' }}>
      <SectionHead kicker="How it works" title="From hello to live in four steps" />
      <div className="step-grid">
        {M.steps.map((s, i) => (
          <div key={i} className="step-item">
            <div className="step-rule"></div>
            <div className="step-num">{s.n}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-body">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Offer band ---------- */
const Offer = () => (
  <section id="offer" className="container" style={{ padding: '80px 32px' }}>
    <div className="offer-band">
      <div className="offer-band-l">
        <div className="es-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--es-yellow-700)' }}><EsStar size={12} fill="#B89D1F"/>{M.offer.kicker}</div>
        <h2 style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.4vw,44px)', letterSpacing: '-.03em', lineHeight: 1.03, margin: '14px 0 0', textWrap: 'balance', color: '#fff' }}>{M.offer.title}</h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(255,255,255,.8)', margin: '16px 0 0', maxWidth: 460 }}>{M.offer.body}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
          <a href="#" className="btn btn-primary" style={{ borderRadius: 999 }}>{M.ctaPrimary}</a>
          <a href="#" className="btn btn-onDark" style={{ borderRadius: 999 }}>{M.ctaSecondary}</a>
        </div>
      </div>
      <div className="offer-band-r">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {M.offer.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15.5, lineHeight: 1.4, color: '#fff', fontWeight: 500 }}>
              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: 999, background: 'var(--es-yellow-500)', color: 'var(--es-ink-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}><Icon name="check" size={16} stroke={2.5}/></span>
              {b}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: 12, lineHeight: 1.5, color: 'rgba(255,255,255,.5)', margin: '24px 0 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.15)' }}>{M.offer.fine}</p>
      </div>
    </div>
  </section>
);

/* ---------- Testimonials (Cohere-style carousel) ---------- */
const Testimonials = () => {
  const items = M.testimonials;
  const [i, setI] = useState(0);
  const t = items[i];
  const go = (d) => setI((i + d + items.length) % items.length);
  return (
    <section className="container" style={{ padding: '38px 32px 20px' }}>
      <div className="tc-head">
        <h2 style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-.025em', lineHeight: 1.06, margin: 0 }}>Why South Sound businesses trust us</h2>
        <div className="tc-arrows">
          <button onClick={() => go(-1)} aria-label="Previous testimonial"><Icon name="arrowLeft" size={20} stroke={2}/></button>
          <button onClick={() => go(1)} aria-label="Next testimonial"><Icon name="arrow" size={20} stroke={2}/></button>
        </div>
      </div>

      <div className="tcard">
        <div className="tcard-text">
          <div className="tcard-logo">{t.company}</div>
          <blockquote className="tcard-quote">“{t.quote}”</blockquote>
          <div className="tcard-attr">— {t.name}, {t.role}</div>
          <a href="#" className="tcard-more">Read more <Icon name="arrow" size={15} stroke={2.25}/></a>
        </div>
        <div className="tcard-img"><image-slot key={t.img} id={t.img} src={t.src} shape="rect" fit="cover" placeholder={t.imgHint} style={{ display: 'block', width: '100%', height: '100%' }}></image-slot></div>
      </div>

      <div className="tc-track"><div className="tc-fill" style={{ width: (100 / items.length) + '%', transform: `translateX(${i * 100}%)` }}></div></div>
    </section>
  );
};

/* ---------- FAQ ---------- */
const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: 'var(--es-warm-100)', borderTop: '1px solid var(--es-border)', borderBottom: '1px solid var(--es-border)' }}>
      <div className="container faq-wrap" style={{ display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 56, alignItems: 'start', padding: '72px 32px' }}>
        <SectionHead kicker="Questions" title="Good to know" sub="Straight answers. If we missed one, a local specialist is a call away." />
        <div>
          {M.faq.map((f, i) => {
            const on = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid var(--es-border)' }}>
                <button onClick={() => setOpen(on ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 0', font: 'inherit' }}>
                  <span style={{ fontFamily: 'var(--es-font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-.01em', color: 'var(--es-fg-1)' }}>{f.q}</span>
                  <span style={{ flexShrink: 0, color: 'var(--es-ink-900)' }}><Icon name={on ? 'minus' : 'plus'} size={20} stroke={2.25}/></span>
                </button>
                {on && <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--es-fg-2)', margin: '0 0 22px', maxWidth: 620 }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- Final CTA (full-bleed) ---------- */
const FinalCta = () => (
  <section className="final-cta-full">
    <div className="container" style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-.03em', lineHeight: 1.02, margin: 0, textWrap: 'balance', color: 'var(--es-ink-1000)' }}>Ready when you are, {M.region}.</h2>
      <p style={{ fontSize: 19, lineHeight: 1.5, color: 'rgba(0,0,0,.72)', margin: '16px auto 0', maxWidth: 600 }}>Claim your free website rebuild and get a local team in your corner — from {M.citiesInline}.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 30 }}>
        <a href="#" className="btn btn-onYellow" style={{ borderRadius: 999 }}>{M.ctaPrimary}</a>
        <a href="#" className="btn btn-onYellowGhost" style={{ borderRadius: 999 }}>{M.ctaSecondary}</a>
      </div>
    </div>
  </section>
);

/* ---------- Footer ---------- */
const Footer = () => {
  const cols = [
    { h: 'Products', items: ['Create', 'Hosting', 'Hire', 'Acquire', 'Curate'] },
    { h: 'Solutions', items: ['Small Business', 'Local Markets', 'Agencies', 'WebOps'] },
    { h: 'Resources', items: ['Become a Colleague', 'Migration guide', 'Blog', 'Events'] },
    { h: 'Company', items: ['About Esteemed', 'Newsroom', 'Careers', 'Contact'] },
  ];
  return (
    <footer style={{ background: 'var(--es-ink-900)', color: '#fff', padding: '64px 0 28px', marginTop: 0 }}>
      <div className="container">
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 40, marginBottom: 48 }}>
          <div>
            <img src="pricing/assets/esteemed-lockup-white.svg" alt="esteemed" style={{ height: 24 }}/>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', margin: '16px 0 0', maxWidth: 280 }}>The AI + Human platform for work.</p>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(it => <li key={it}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,.8)' }}>{it}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.12)', fontSize: 13, color: 'rgba(255,255,255,.5)', flexWrap: 'wrap', gap: 12 }}>
          <div>© 2026 Esteemed Inc.</div>
          <div style={{ display: 'flex', gap: 18 }}><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Status</a></div>
        </div>
      </div>
    </footer>
  );
};

/* ---------- App ---------- */
function App() {
  return (
    <div data-screen-label="Esteemed Local — South Sound">
      <Nav/>
      <Hero/>
      <Stats/>
      <Platform/>
      <ServicesCarousel/>
      <How/>
      <Offer/>
      <Faq/>
      <Testimonials/>
      <FinalCta/>
      <Footer/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

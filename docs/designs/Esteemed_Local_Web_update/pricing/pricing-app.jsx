/* Esteemed Pricing — app (lead-in card model). Depends on PRICING + design tokens. */
const { useState } = React;
const P = window.PRICING;

/* ---------- Star + icons ---------- */
const EsStar = ({ size = 14, fill = '#FEE546', style }) => (
  <svg width={size} height={size} viewBox="0 0 268 268" style={style} aria-hidden="true">
    <path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill={fill}/>
  </svg>
);

const Icon = ({ name, size = 20, stroke = 1.75 }) => {
  const paths = {
    window: <><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path d="M7 6.5h.01"/></>,
    cloud: <><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.7A4 4 0 0 0 7 19h10.5Z"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"/><path d="M3 12h18"/></>,
    pen: <><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></>,
    cpu: <><rect x="5" y="5" width="14" height="14" rx="2.5"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
    refresh: <><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v5h-5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    migrate: <><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></>,
    check: <><path d="M20 6 9 17l-5-5"/></>,
    users: <><path d="M16 18a5 5 0 0 0-10 0"/><circle cx="11" cy="8" r="3.5"/><path d="M18 14a4 4 0 0 1 4 4"/><circle cx="18.5" cy="7.5" r="2.5"/></>,
    support: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="m5.6 5.6 3.3 3.3M15.1 15.1l3.3 3.3M18.4 5.6l-3.3 3.3M8.9 15.1l-3.3 3.3"/></>,
    sparkles: <><path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-5.14-1.32a.5.5 0 0 1 0-.97L8.5 10.44A2 2 0 0 0 9.94 9L11.26 3.86a.5.5 0 0 1 .97 0L13.56 9A2 2 0 0 0 15 10.44l5.14 1.32a.5.5 0 0 1 0 .97L15 14.06a2 2 0 0 0-1.44 1.44l-1.32 5.14a.5.5 0 0 1-.97 0z"/><path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
};

/* ---------- Product icon tile (official SVG, or yellow tile + black glyph fallback) ---------- */
const OFFICIAL = new Set(['acquire','hire','create','curate','connect','intelligence','assist','support','cloud']);
const ProdIcon = ({ name, size = 48 }) => {
  if (OFFICIAL.has(name)) {
    return <img src={`pricing/product-icons/${name}.svg`} alt="" width={size} height={size} style={{ display: 'block', flexShrink: 0 }}/>;
  }
  return (
    <div style={{ width: size, height: size, borderRadius: Math.round(size * 0.1), background: 'var(--es-yellow-500)', color: 'var(--es-ink-1000)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon name={name} size={Math.round(size * 0.52)} stroke={2}/>
    </div>
  );
};
const HEADER_ICON = { websites: 'create', hosting: 'cloud', hiring: 'hire', content: 'curate', ai: 'sparkles', bundles: 'grid', experts: 'users', support: 'support' };

/* Tab/category icon — always yellow tile + black Lucide glyph (never the white-paneled product SVG) */
const TabIcon = ({ name, size = 48 }) => (
  <div style={{ width: size, height: size, borderRadius: Math.round(size * 0.24), background: 'var(--es-yellow-500)', color: 'var(--es-ink-1000)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <Icon name={name} size={Math.round(size * 0.56)} stroke={2}/>
  </div>
);

/* ---------- Pills ---------- */
const Badge = ({ children, soon }) => (
  <span style={{ background: soon ? 'var(--es-warm-100)' : 'var(--es-yellow-500)', color: soon ? 'var(--es-warm-700)' : 'var(--es-ink-1000)', border: soon ? '1px solid var(--es-border)' : 'none', fontSize: 11, fontWeight: 700, letterSpacing: '.03em', textTransform: 'uppercase', padding: '5px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>{children}</span>
);
const Tag = ({ children }) => (
  <span style={{ background: 'var(--es-warm-100)', color: 'var(--es-warm-700)', border: '1px solid var(--es-border)', fontSize: 11.5, fontWeight: 600, padding: '4px 9px', borderRadius: 999, whiteSpace: 'nowrap' }}>{children}</span>
);

/* ---------- Lead-in card ---------- */
const LeadCard = ({ card, onGoto }) => {
  if (card.wide) return <WideLeadCard card={card} onGoto={onGoto}/>;
  return (
  <div className="lead-card" style={{
    position: 'relative', display: 'flex', flexDirection: 'column',
    background: '#fff', border: '1px solid var(--es-border)', borderRadius: 'var(--es-radius-lg)',
    padding: '26px 26px 24px', transition: 'border-color 160ms var(--es-ease-out), box-shadow 160ms',
  }}>
    {/* header: icon + badge */}
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 18 }}>
      <ProdIcon name={card.icon} size={48}/>
      {card.badge && <Badge soon={card.soon}>{card.badge}</Badge>}
    </div>

    <div style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-.015em', color: 'var(--es-fg-1)' }}>{card.name}</div>

    {(card.pills || card.founding) && (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
        {(card.pills || []).map(p => <Tag key={p}>{p}</Tag>)}
        {card.founding && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'var(--es-warm-50)', color: 'var(--es-warm-700)', border: '1px solid var(--es-border-strong)', fontSize: 11.5, fontWeight: 600, padding: '4px 9px', borderRadius: 999, whiteSpace: 'nowrap' }}><EsStar size={10} fill="#B89D1F"/>Founding rates</span>}
      </div>
    )}

    <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--es-fg-2)', margin: '16px 0 0' }}>{card.blurb}</p>

    <div style={{ marginTop: 'auto', paddingTop: 22 }}>
      <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--es-fg-1)', marginBottom: 16 }}>{card.anchor}</div>
      <button
        className={card.primary ? 'btn btn-primary' : 'btn btn-ghost'}
        disabled={card.soon}
        onClick={() => card.goto && onGoto && onGoto(card.goto)}
        style={{ borderRadius: 999, whiteSpace: 'nowrap' }}>
        {card.cta}{(card.goto || card.seePlans) ? ' →' : ''}
      </button>
      {card.fine && (
        <p style={{ fontSize: 12, lineHeight: 1.45, color: 'var(--es-fg-3)', margin: '14px 0 0', display: 'flex', gap: 7 }}>
          <span style={{ flexShrink: 0, marginTop: 1 }}><EsStar size={10} fill="#B89D1F"/></span>
          <span>{card.fine}</span>
        </p>
      )}
    </div>
  </div>
  );
};

/* ---------- Wide featured card (content left, product image right) ---------- */
const WideLeadCard = ({ card, onGoto }) => (
  <div className="lead-card wide" style={{
    position: 'relative', display: 'flex', flexDirection: 'row', overflow: 'hidden',
    background: '#fff', border: '1px solid var(--es-border)', borderRadius: 'var(--es-radius-lg)',
    transition: 'border-color 160ms var(--es-ease-out), box-shadow 160ms',
  }}>
    {/* left column */}
    <div className="wide-left" style={{ flex: '1 1 46%', minWidth: 0, display: 'flex', flexDirection: 'column', padding: '28px 30px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
        <ProdIcon name={card.icon} size={52}/>
        {card.badge && <Badge soon={card.soon}>{card.badge}</Badge>}
      </div>
      <div style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-.02em', color: 'var(--es-fg-1)' }}>{card.name}</div>
      {(card.pills || card.founding) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
          {(card.pills || []).map(p => <Tag key={p}>{p}</Tag>)}
          {card.founding && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'var(--es-warm-50)', color: 'var(--es-warm-700)', border: '1px solid var(--es-border-strong)', fontSize: 11.5, fontWeight: 600, padding: '4px 9px', borderRadius: 999, whiteSpace: 'nowrap' }}><EsStar size={10} fill="#B89D1F"/>Founding rates</span>}
        </div>
      )}
      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--es-fg-2)', margin: '14px 0 0', maxWidth: 420 }}>{card.blurb}</p>
      <div style={{ marginTop: 'auto', paddingTop: 22 }}>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--es-fg-1)', marginBottom: 14 }}>{card.anchor}</div>
        <button
          className={card.primary ? 'btn btn-primary' : 'btn btn-ghost'}
          disabled={card.soon}
          onClick={() => card.goto && onGoto && onGoto(card.goto)}
          style={{ borderRadius: 999, whiteSpace: 'nowrap' }}>
          {card.cta}{(card.goto || card.seePlans) ? ' →' : ''}
        </button>
      </div>
    </div>

    {/* right column — product preview image */}
    <div className="wide-right" style={{
      flex: '1 1 54%', minWidth: 0, background: card.imageBg || 'var(--es-warm-100)',
      backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'left center',
    }} role="img" aria-label={`${card.name} preview`}/>
  </div>
);

/* ---------- Left rail (Alpaca style) ---------- */
const Rail = ({ active, setActive }) => (
  <aside className="rail">
    <div className="rail-inner">
      <div className="es-eyebrow" style={{ marginBottom: 12, paddingLeft: 12 }}>Browse by need</div>
      <nav className="rail-nav">
        {P.CATEGORIES.map(c => (
          <button key={c.id} onClick={() => setActive(c.id)} className={'rail-item' + (active === c.id ? ' on' : '')}>
            <span className="rail-label">{c.label}</span>
            <span className="rail-chev"><Icon name="arrow" size={15} stroke={2}/></span>
          </button>
        ))}
      </nav>
      <div className="rail-help">
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--es-fg-1)' }}>Not sure where to start?</div>
        <p style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--es-fg-2)', margin: '6px 0 12px' }}>Tell us about your team and we’ll map the right plan.</p>
        <button className="btn btn-secondary btn-sm" style={{ width: '100%', borderRadius: 999 }}>Talk to us</button>
      </div>
    </div>
  </aside>
);

/* ---------- Nav + Footer ---------- */
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
            <a key={it.label} href="#" style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 13px', borderRadius: 10, fontSize: 15, fontWeight: 600, color: it.label === 'Pricing' ? 'var(--es-fg-1)' : 'var(--es-fg-2)', background: it.label === 'Pricing' ? 'var(--es-warm-100)' : 'transparent', whiteSpace: 'nowrap' }}>{it.label}{it.chev && <Chevron/>}</a>
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

const Footer = () => {
  const cols = [
    { h: 'Products', items: ['Create', 'Hosting', 'Hire', 'Acquire', 'Curate'] },
    { h: 'Solutions', items: ['Small Business', 'Enterprise', 'Agencies', 'Staffing'] },
    { h: 'Resources', items: ['Become a Colleague', 'Migration guide', 'Blog', 'Events'] },
    { h: 'Company', items: ['About Esteemed', 'Newsroom', 'Careers', 'Contact'] },
  ];
  return (
    <footer style={{ background: 'var(--es-ink-900)', color: '#fff', padding: '64px 0 28px', marginTop: 72 }}>
      <div className="container">
        <div className="foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 40, marginBottom: 48 }}>
          <div>
            <img src="pricing/assets/esteemed-lockup-white.svg" alt="esteemed" style={{ height: 24 }}/>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', margin: '16px 0 0', maxWidth: 280 }}>The AI + Human platform for work.</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', margin: '8px 0 0' }}>Innovation for the modern workplace.</p>
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
  const [active, setActive] = useState('websites');
  const cat = P.CATEGORIES.find(c => c.id === active);
  const data = P.CATALOG[active];
  const goto = (id) => { setActive(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const n = data.cards.length;

  return (
    <div data-screen-label="Esteemed Pricing">
      <Nav/>

      {/* Hero */}
      <header style={{ background: 'var(--es-warm-50)' }}>
        <div className="container" style={{ padding: '52px 32px 26px' }}>
          <div className="es-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><EsStar size={12} fill="#B89D1F"/>Plans &amp; pricing</div>
          <h1 style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.6vw,56px)', letterSpacing: '-.03em', lineHeight: 1.03, margin: '14px 0 0', maxWidth: 800, textWrap: 'balance' }}>
            Pick what you need. Pay for nothing you don’t.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--es-fg-2)', margin: '16px 0 0', maxWidth: 600 }}>
            Transparent, published pricing across the platform. Annual plans include two months free.
          </p>
        </div>
      </header>

      {/* Independence strip */}
      <div style={{ background: 'var(--es-ink-900)', color: '#fff' }}>
        <div className="container" style={{ padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <EsStar size={15} fill="#FEE546"/>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,.85)' }}>
            <strong style={{ color: '#fff' }}>Every offering is a separate purchase — none requires another.</strong>&nbsp;
            Host without migrating. Hire without the website. Take only what you need.
          </p>
        </div>
      </div>

      {/* Two-pane */}
      <main style={{ background: 'var(--es-warm-50)' }}>
        <div className="container pane" style={{ display: 'flex', gap: 44, alignItems: 'flex-start', padding: '36px 32px 24px' }}>
          <Rail active={active} setActive={setActive}/>
          <section key={active} style={{ flex: 1, minWidth: 0 }}>
            {/* category header */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', maxWidth: 760, marginBottom: 30 }}>
              <TabIcon name={cat.icon} size={52}/>
              <div>
                <h2 style={{ fontFamily: 'var(--es-font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-.025em', lineHeight: 1.05, margin: 0 }}>{cat.label}</h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.5, color: 'var(--es-fg-2)', margin: '8px 0 0' }}>{cat.sub}</p>
              </div>
            </div>

            {/* lead-in card grid */}
            <div className="cardgrid2">
              {data.cards.map(c => <LeadCard key={c.name} card={c} onGoto={goto}/>)}
            </div>

            {data.note && (
              <div style={{ marginTop: 20, display: 'flex', gap: 9, alignItems: 'flex-start', maxWidth: 880 }}>
                <span style={{ flexShrink: 0, marginTop: 1 }}><EsStar size={12} fill="#B89D1F"/></span>
                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--es-fg-3)', margin: 0 }}>{data.note}</p>
              </div>
            )}

            {/* Showing X of Y */}
            <div style={{ marginTop: 28, paddingTop: 18, borderTop: '1px solid var(--es-border)', fontSize: 13, color: 'var(--es-fg-3)' }}>
              Showing <strong style={{ color: 'var(--es-fg-2)' }}>{n}</strong> of <strong style={{ color: 'var(--es-fg-2)' }}>{n}</strong> {cat.label.toLowerCase()} {n === 1 ? 'option' : 'options'}
            </div>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

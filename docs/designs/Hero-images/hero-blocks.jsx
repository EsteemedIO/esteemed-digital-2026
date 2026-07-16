/* Esteemed — Hero blocks (GoDaddy-style, light grey bg).
   Real photography throughout. Esteemed Create logo always uses a WHITE star. */

const INK = '#16281E';
const INK_SOFT = 'rgba(22,40,30,0.66)';

/* Pexels imagery */
const IMG = {
  hero:  'https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=1200',
  p1:    'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400',
  p2:    'https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=400',
  p3:    'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=400',
  phone: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600',
};

const WhiteStar = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 268 268"><path d="M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z" fill="#FFFFFF"/></svg>
);

/* Esteemed Create glass app-icon (white star) */
function CreateGlassIcon({ size = 104 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.26,
      background: 'linear-gradient(155deg, #8FD0FF 0%, #5AA9F0 45%, #3E86D8 100%)',
      boxShadow: '0 30px 50px -18px rgba(40,86,160,0.55), inset 0 2px 6px rgba(255,255,255,0.6), inset 0 -8px 16px rgba(30,70,140,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, rgba(255,255,255,0.5), transparent 45%)' }} />
      <div style={{ filter: 'drop-shadow(0 2px 3px rgba(30,70,140,0.4))' }}><WhiteStar size={size * 0.5} /></div>
    </div>
  );
}

/* Small Esteemed Create wordmark — white star on yellow tile */
function CreateLogo({ scale = 1 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * scale }}>
      <div style={{ width: 26 * scale, height: 26 * scale, borderRadius: 8 * scale, background: '#FEE546', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <WhiteStar size={15 * scale} />
      </div>
      <span style={{ fontSize: 13 * scale, fontWeight: 700, color: INK, letterSpacing: -0.3 }}>Esteemed Create</span>
    </div>
  );
}

/* Floating editing toolbar */
function EditToolbar({ style = {} }) {
  const cell = { display: 'flex', alignItems: 'center', justifyContent: 'center', height: 46, background: '#FFFFFF' };
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', borderRadius: 14, overflow: 'hidden', boxShadow: '0 22px 44px -16px rgba(22,40,30,0.32), 0 0 0 1px rgba(22,40,30,0.05)', fontFamily: 'ui-sans-serif, system-ui, sans-serif', ...style }}>
      <div style={{ ...cell, width: 52, borderRight: '1px solid rgba(22,40,30,0.07)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2M15 10V8M12.5 6h5M4 20l9-9M13.5 7.5l3 3"/><path d="M6 14l-2 2 2 2 2-2z"/></svg>
      </div>
      <div style={{ ...cell, width: 52, borderRight: '1px solid rgba(22,40,30,0.07)' }}>
        <div style={{ width: 22, height: 22, borderRadius: 22, background: 'conic-gradient(#F87171,#FBBF24,#34D399,#60A5FA,#A78BFA,#F87171)' }} />
      </div>
      <div style={{ ...cell, gap: 8, padding: '0 16px' }}>
        <span style={{ width: 22, height: 22, borderRadius: 5, border: '1.5px solid '+INK, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: INK }}>A</span>
        <span style={{ fontSize: 15, fontWeight: 600, color: INK }}>Change Font</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </div>
  );
}

/* Browser chrome wrapper */
function Browser({ url = 'freshandco.com', children, style = {} }) {
  return (
    <div style={{ background: '#FFFFFF', borderRadius: 14, overflow: 'hidden', boxShadow: '0 50px 90px -34px rgba(22,40,30,0.42), 0 16px 30px -14px rgba(22,40,30,0.22)', border: '1px solid rgba(22,40,30,0.06)', display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{ height: 36, padding: '0 14px', borderBottom: '1px solid rgba(22,40,30,0.05)', display: 'flex', alignItems: 'center', gap: 8, background: '#FAFAF8', flexShrink: 0 }}>
        <span style={{ width: 10, height: 10, borderRadius: 10, background: '#FF6058' }} />
        <span style={{ width: 10, height: 10, borderRadius: 10, background: '#FFBE2E' }} />
        <span style={{ width: 10, height: 10, borderRadius: 10, background: '#28C842' }} />
        <div style={{ marginLeft: 16, flex: 1, maxWidth: 280, height: 18, borderRadius: 5, background: 'rgba(22,40,30,0.05)', display: 'flex', alignItems: 'center', padding: '0 12px', fontFamily: 'ui-monospace, monospace', fontSize: 10, color: 'rgba(22,40,30,0.5)' }}>{url}</div>
      </div>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

/* Graphic Fresh&Co storefront (illustrated, matches v2 mock language) */
function FreshSiteMock() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <div style={{ padding: '14px 22px', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(22,40,30,0.07)', fontFamily: 'Georgia, "Times New Roman", serif' }}>
        <div style={{ display: 'flex', gap: 16, fontSize: 12, color: INK_SOFT, flex: 1 }}><span>Home</span><span>Shop</span><span>About</span></div>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 1.5, color: INK }}>FRESH&amp;CO</div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 12, color: INK_SOFT, flex: 1, justifyContent: 'flex-end' }}>
          <span>🔍</span>
          <div style={{ width: 22, height: 17, border: '1.4px solid '+INK, borderRadius: 2, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -4, left: 5, width: 10, height: 6, border: '1.4px solid '+INK, borderBottom: 'none', borderRadius: '4px 4px 0 0' }} />
          </div>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1.4, background: '#E4F0E4' }} />
          <div style={{ flex: 1, background: '#2F7D57' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2, padding: '22px 32px 4px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 18 }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 26, fontWeight: 700, lineHeight: 1.0, color: INK, letterSpacing: -0.6, flex: 1 }}>
            Pressed today,<br/>poured tomorrow.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 7, paddingTop: 4 }}>
            <div style={{ fontSize: 11, color: INK_SOFT, lineHeight: 1.4, maxWidth: 180, textAlign: 'right' }}>Cold-pressed plant juices delivered each week.</div>
            <div style={{ padding: '7px 16px', borderRadius: 20, background: INK, color: '#FFFFFF', fontSize: 11, fontWeight: 600 }}>Shop now</div>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 22, gap: 9 }}>
          <div style={{ width: 48, height: 74, background: '#3E9A6B', borderRadius: 3, position: 'relative', boxShadow: 'inset -8px 0 0 rgba(0,0,0,0.08)' }}>
            <div style={{ position: 'absolute', left: '50%', top: -52, transform: 'translateX(-50%)', width: 21, height: 64, background: 'linear-gradient(180deg, #3E9A6B, #1F5A42)', borderRadius: '5px 5px 8px 8px' }}>
              <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 8, height: 6, background: INK, borderRadius: 2 }} />
              <div style={{ position: 'absolute', top: 18, left: 2, right: 2, height: 22, background: '#FFFFFF', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 7, color: INK, fontWeight: 700 }}>F&amp;C</div>
              </div>
            </div>
          </div>
          <div style={{ width: 34, height: 28, position: 'relative', alignSelf: 'flex-end', marginBottom: 6 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, #A5D66A 0%, #7CBF4A 62%, #DCEDE0 68%, #3E9A6B 78%)', borderRadius: '50% 50% 4px 4px / 100% 100% 4px 4px', transform: 'rotate(-12deg)' }} />
          </div>
          <div style={{ width: 40, height: 52, background: '#E4F0E4', borderRadius: 3, position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: -36, transform: 'translateX(-50%)', width: 23, height: 40, background: 'linear-gradient(180deg, rgba(94,167,126,0.25), #5FA77E 30%, #2F6B4F)', borderRadius: '3px 3px 9px 9px', border: '1px solid rgba(22,40,30,0.1)' }}>
              <div style={{ position: 'absolute', top: -2, left: 0, right: 0, height: 4, background: '#7CBF4A', borderRadius: '50%' }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '10px 22px', borderTop: '1px solid rgba(22,40,30,0.07)', display: 'flex', alignItems: 'center', gap: 10, height: 54, background: '#FFFFFF' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 11, color: INK, flexShrink: 0 }}>Featured</div>
        {['#EFF6E8', '#DCEDE0', '#E4F0E4'].map((c,i) => (
          <div key={i} style={{ width: 34, height: 36, borderRadius: 5, background: c, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: '50%', top: 5, transform: 'translateX(-50%)', width: 9, height: 26, background: ['#3E9A6B','#7CBF4A','#1F5A42'][i], borderRadius: 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Graphic phone storefront (illustrated) */
function PhoneStoreMock() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#EEF6EE' }}>
      <div style={{ padding: '18px 12px 10px', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 12, height: 9, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}><span style={{ height: 1.4, background: INK }}/><span style={{ height: 1.4, background: INK }}/><span style={{ height: 1.4, background: INK }}/></div>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: 11, fontWeight: 700, letterSpacing: 1, color: INK }}>FRESH&amp;CO</div>
        <div style={{ width: 11, height: 10, border: '1.2px solid '+INK, borderRadius: 2 }} />
      </div>
      <div style={{ margin: '4px 12px 0', height: 120, background: '#E4F0E4', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 30, height: 92, background: 'linear-gradient(180deg,#3E9A6B,#1F5A42)', borderRadius: '6px 6px 9px 9px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 11, height: 8, background: INK, borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 30, left: 3, right: 3, height: 34, background: '#FFF', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia,serif', fontSize: 8, fontWeight: 700, color: INK }}>F&amp;C</div>
        </div>
      </div>
      <div style={{ padding: '10px 12px 0' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 12, fontWeight: 700, color: INK }}>Daily Greens</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: INK }}>$9</span>
          <span style={{ fontSize: 9, color: 'rgba(22,40,30,0.4)', textDecoration: 'line-through' }}>$12</span>
          <span style={{ fontSize: 7.5, fontWeight: 700, color: '#FFF', background: '#2F7D57', padding: '2px 5px', borderRadius: 3 }}>SALE</span>
        </div>
        <div style={{ display: 'flex', gap: 5, marginTop: 10 }}>
          {['12oz','16oz','20oz'].map((s,i)=>(<div key={s} style={{ flex:1, textAlign:'center', fontSize: 7.5, fontWeight: 600, padding: '5px 0', borderRadius: 5, border: '1px solid '+(i===1?INK:'rgba(22,40,30,0.15)'), color: i===1?'#FFF':'rgba(22,40,30,0.6)', background: i===1?INK:'#FFF' }}>{s}</div>))}
        </div>
        <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
          <div style={{ flex: 1, textAlign: 'center', fontSize: 8.5, fontWeight: 700, letterSpacing: 0.6, color: '#FFF', background: INK, borderRadius: 6, padding: '8px 0' }}>ADD TO CART</div>
          <div style={{ width: 40, textAlign: 'center', fontSize: 9, fontWeight: 700, color: INK, border: '1px solid rgba(22,40,30,0.2)', borderRadius: 6, padding: '8px 0' }}>Pay</div>
        </div>
      </div>
    </div>
  );
}

const RatingStars = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div style={{ display: 'flex', gap: 2 }}>{[0,1,2,3,4].map(i => (<svg key={i} width="15" height="15" viewBox="0 0 12 12" fill="#2F7D57"><path d="M6 1l1.55 3.14L11 4.65l-2.5 2.44.59 3.45L6 8.91l-3.09 1.63.59-3.45L1 4.65l3.45-.51L6 1z"/></svg>))}</div>
    <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(22,40,30,0.7)' }}>{text}</span>
  </div>
);

/* ── Hero A — copy left · builder right ── */
function HeroBlock({
  title = 'Launch your site in an afternoon, not a quarter',
  sub = 'Describe it in a sentence and our AI drafts a real, brand-ready site — copy, layout and photography included. Refine anything by chatting.',
  cta = 'Start for free',
  note = 'No credit card required',
  rating = 'Rated 4.8 / 5 by 2,400+ businesses',
}) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EFEFEC', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', alignItems: 'center', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <div style={{ padding: '0 0 0 64px' }}>
        <CreateLogo scale={1.05} />
        <h1 style={{ fontSize: 52, fontWeight: 800, letterSpacing: -1.6, lineHeight: 1.03, color: INK, margin: '26px 0 0', maxWidth: 520 }}>{title}</h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: INK_SOFT, margin: '20px 0 0', maxWidth: 440 }}>{sub}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 30 }}>
          <button style={{ border: 'none', cursor: 'pointer', background: INK, color: '#FFFFFF', padding: '15px 30px', borderRadius: 30, fontSize: 15, fontWeight: 700, fontFamily: 'inherit' }}>{cta}</button>
          <span style={{ fontSize: 13, color: 'rgba(22,40,30,0.55)' }}>{note}</span>
        </div>
        <div style={{ marginTop: 34 }}><RatingStars text={rating} /></div>
      </div>
      <div style={{ position: 'relative', height: '100%' }}>
        <Browser url="freshandco.com" style={{ position: 'absolute', left: 48, top: '50%', transform: 'translateY(-50%)', width: 660, height: '78%' }}>
          <FreshSiteMock />
        </Browser>
        <EditToolbar style={{ position: 'absolute', left: 30, top: '12%', zIndex: 4 }} />
        <div style={{ position: 'absolute', left: -14, bottom: '15%', zIndex: 5 }}><CreateGlassIcon size={104} /></div>
      </div>
    </div>
  );
}

/* ── Hero B — mock left · copy right ── */
function HeroBlockB({
  eyebrow = 'Online Store Builder',
  title = 'Open your store in minutes — and turn your idea into income',
  bullets = ['Get online and grow in minutes.', 'Sell anywhere, online and in-person.', 'Get paid quickly and securely.'],
  cta = 'Start for free',
  cta2 = 'Hire an expert',
  rating = '4.7 out of 5 · 12,400+ reviews',
}) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FFFFFF', display: 'grid', gridTemplateColumns: '1.12fr 0.88fr', alignItems: 'center', gap: 40, fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', overflow: 'hidden', position: 'relative', padding: '0 56px' }}>
      {/* left panel */}
      <div style={{ position: 'relative', height: '80%', background: '#EFEFEC', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Browser url="freshandco.com" style={{ width: '74%', height: '80%' }}><FreshSiteMock /></Browser>
        {/* phone */}
        <div style={{ position: 'absolute', right: 26, bottom: 24, width: 150, height: 300, background: '#FFFFFF', borderRadius: 22, padding: 5, boxShadow: '0 34px 60px -20px rgba(22,40,30,0.4), 0 0 0 1px rgba(22,40,30,0.06)' }}>
          <div style={{ height: '100%', borderRadius: 18, overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 5, transform: 'translateX(-50%)', width: 34, height: 5, borderRadius: 5, background: INK, zIndex: 2 }} />
            <PhoneStoreMock />
          </div>
        </div>
        {/* Sales card */}
        <div style={{ position: 'absolute', left: 12, top: 26, width: 138, background: '#FFFFFF', borderRadius: 12, padding: '12px 14px', boxShadow: '0 20px 40px -14px rgba(22,40,30,0.3), 0 0 0 1px rgba(22,40,30,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: INK }}>Sales</span>
            <span style={{ fontSize: 8, color: 'rgba(22,40,30,0.45)' }}>Last 7 Days</span>
          </div>
          {[['$17,548','Total Sales'],['546','Items Sold'],['429','Customers']].map((r,i)=>(
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 0', borderTop: i? '1px solid rgba(22,40,30,0.06)':'none' }}>
              <span style={{ color: '#2F7D57', fontSize: 11 }}>↑</span>
              <div><div style={{ fontSize: 12, fontWeight: 800, color: INK, letterSpacing: -0.3 }}>{r[0]}</div><div style={{ fontSize: 7.5, color: 'rgba(22,40,30,0.5)' }}>{r[1]}</div></div>
            </div>
          ))}
        </div>
        {/* New Order notification */}
        <div style={{ position: 'absolute', right: -6, top: '36%', background: '#FFFFFF', borderRadius: 10, padding: '9px 12px', boxShadow: '0 18px 36px -12px rgba(22,40,30,0.32), 0 0 0 1px rgba(22,40,30,0.05)', display: 'flex', alignItems: 'center', gap: 9 }}>
          <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#4285F4" d="M45 24c0-1.6-.14-3.13-.4-4.6H24v9.3h11.8c-.5 2.75-2 5.08-4.3 6.64v5.5h6.95C42.5 37.1 45 31 45 24z"/><path fill="#34A853" d="M24 46c5.8 0 10.7-1.92 14.25-5.2l-6.95-5.4c-1.93 1.3-4.4 2.05-7.3 2.05-5.6 0-10.35-3.78-12.05-8.87H4.8v5.57C8.35 41.1 15.6 46 24 46z"/><path fill="#FBBC05" d="M11.95 28.6c-.43-1.3-.68-2.68-.68-4.1s.25-2.8.68-4.1v-5.57H4.8A22 22 0 0 0 2.5 24.5c0 3.55.85 6.9 2.3 9.87l7.15-5.77z"/><path fill="#EA4335" d="M24 11.5c3.15 0 5.98 1.08 8.2 3.2l6.15-6.15C34.7 5.05 29.8 3 24 3 15.6 3 8.35 7.9 4.8 15.13l7.15 5.57C13.65 15.28 18.4 11.5 24 11.5z"/></svg>
          <div><div style={{ fontSize: 9, fontWeight: 700, color: INK }}>New Order <span style={{ color: 'rgba(22,40,30,0.4)', fontWeight: 500 }}>#156841</span></div><div style={{ fontSize: 11, fontWeight: 800, color: '#2F7D57', letterSpacing: -0.3 }}>$34.80</div></div>
        </div>
      </div>
      {/* right copy */}
      <div>
        <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>{eyebrow}</div>
        <h1 style={{ fontSize: 46, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.05, color: INK, margin: '18px 0 0', maxWidth: 480 }}>{title}</h1>
        <div style={{ margin: '26px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {bullets.map((b,i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {i===0 && <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>}
                {i===1 && <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></>}
                {i===2 && <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>}
              </svg>
              <span style={{ fontSize: 16, color: 'rgba(22,40,30,0.78)', textDecoration: 'underline', textDecorationColor: 'rgba(22,40,30,0.2)', textUnderlineOffset: 3 }}>{b}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
          <button style={{ border: 'none', cursor: 'pointer', background: INK, color: '#FFFFFF', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, fontFamily: 'inherit' }}>{cta}</button>
          <button style={{ cursor: 'pointer', background: '#FFFFFF', color: INK, padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, fontFamily: 'inherit', border: '1.5px solid rgba(22,40,30,0.25)' }}>{cta2}</button>
        </div>
        <div style={{ marginTop: 22 }}><RatingStars text={rating} /></div>
      </div>
    </div>
  );
}

window.HeroBlock = HeroBlock;
window.HeroBlockB = HeroBlockB;
window.CreateGlassIcon = CreateGlassIcon;
window.CreateLogo = CreateLogo;
window.EditToolbar = EditToolbar;

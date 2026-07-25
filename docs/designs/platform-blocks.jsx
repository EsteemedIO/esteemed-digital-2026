/* Esteemed — Platform Hero Image Blocks (1160×620)
   WordPress, Drupal, Next.js, VPS hosting hero compositions. */

const INK = '#16281E';

/* Pexels imagery for each platform */
const IMAGES = {
  wp:     'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
  drupal: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200',
  next:   'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  vps:    'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

/* Stat card */
function StatCard({ label, value, style = {} }) {
  return (
    <div style={{ background: '#FFFFFF', borderRadius: 14, padding: '16px 20px', boxShadow: '0 20px 40px -14px rgba(22,40,30,0.3), 0 0 0 1px rgba(22,40,30,0.05)', minWidth: 140, ...style }}>
      <div style={{ fontSize: 11, color: 'rgba(22,40,30,0.5)', fontWeight: 600, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: INK, letterSpacing: -0.5 }}>{value}</div>
    </div>
  );
}

/* Browser chrome wrapper */
function Browser({ url, children, style = {} }) {
  return (
    <div style={{ background: '#FFFFFF', borderRadius: 14, overflow: 'hidden', boxShadow: '0 50px 90px -34px rgba(22,40,30,0.42), 0 16px 30px -14px rgba(22,40,30,0.22)', border: '1px solid rgba(22,40,30,0.06)', display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{ height: 32, padding: '0 12px', borderBottom: '1px solid rgba(22,40,30,0.05)', display: 'flex', alignItems: 'center', gap: 6, background: '#FAFAF8', flexShrink: 0 }}>
        <span style={{ width: 8, height: 8, borderRadius: 8, background: '#FF6058' }} />
        <span style={{ width: 8, height: 8, borderRadius: 8, background: '#FFBE2E' }} />
        <span style={{ width: 8, height: 8, borderRadius: 8, background: '#28C842' }} />
        <div style={{ marginLeft: 12, flex: 1, maxWidth: 240, height: 16, borderRadius: 4, background: 'rgba(22,40,30,0.05)', display: 'flex', alignItems: 'center', padding: '0 10px', fontFamily: 'ui-monospace, monospace', fontSize: 9, color: 'rgba(22,40,30,0.5)' }}>{url}</div>
      </div>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

/* ─── WordPress Block ─── */
function WordPressBlock() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E0E9F2', display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'ui-sans-serif, system-ui, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={IMAGES.wp} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #E0E9F2)' }} />
        <StatCard label="Uptime" value="99.99%" style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 2 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px 0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#464342', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#FFF' }}>W</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: INK }}>WordPress Hosting</span>
        </div>
        <Browser url="yourbusiness.com" style={{ width: '100%', height: 320 }}>
          <div style={{ padding: 24, background: '#FFF' }}>
            <div style={{ height: 12, width: '60%', background: '#E0E9F2', borderRadius: 6, marginBottom: 14 }} />
            <div style={{ height: 8, width: '90%', background: '#F0F0EE', borderRadius: 4, marginBottom: 8 }} />
            <div style={{ height: 8, width: '75%', background: '#F0F0EE', borderRadius: 4, marginBottom: 20 }} />
            <div style={{ height: 100, background: '#E0E9F2', borderRadius: 10, marginBottom: 14 }} />
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ flex: 1, height: 60, background: '#F0F0EE', borderRadius: 8 }} />
              <div style={{ flex: 1, height: 60, background: '#F0F0EE', borderRadius: 8 }} />
              <div style={{ flex: 1, height: 60, background: '#F0F0EE', borderRadius: 8 }} />
            </div>
          </div>
        </Browser>
      </div>
    </div>
  );
}

/* ─── Drupal Block ─── */
function DrupalBlock() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E0E9F2', display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'ui-sans-serif, system-ui, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={IMAGES.drupal} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #E0E9F2)' }} />
        <StatCard label="Sites Managed" value="Multi-site" style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 2 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px 0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#0678BE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: '#FFF' }}>D</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: INK }}>Drupal Hosting</span>
        </div>
        <Browser url="enterprise.yourorg.com" style={{ width: '100%', height: 320 }}>
          <div style={{ padding: 24, background: '#FFF' }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
              <div style={{ width: '30%', height: '100%' }}>
                <div style={{ height: 10, width: '80%', background: '#0678BE', borderRadius: 5, marginBottom: 10 }} />
                {[1,2,3,4,5].map(i => (<div key={i} style={{ height: 7, width: `${60+i*5}%`, background: '#F0F0EE', borderRadius: 3, marginBottom: 6 }} />))}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: 120, background: '#E0E9F2', borderRadius: 10, marginBottom: 14 }} />
                <div style={{ height: 8, width: '90%', background: '#F0F0EE', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 8, width: '70%', background: '#F0F0EE', borderRadius: 4 }} />
              </div>
            </div>
          </div>
        </Browser>
      </div>
    </div>
  );
}

/* ─── Next.js Block ─── */
function NextBlock() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#111', display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'ui-sans-serif, system-ui, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={IMAGES.next} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, #111)' }} />
        <StatCard label="Deploy Time" value="< 30s" style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 2 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px 0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 18, fontWeight: 900, color: '#000', fontFamily: 'ui-monospace, monospace' }}>N</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#FFF' }}>Next.js Hosting</span>
        </div>
        <div style={{ background: '#1a1a1a', borderRadius: 14, padding: 24, border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, lineHeight: 2, color: '#888' }}>
            <span style={{ color: '#569CD6' }}>$</span> <span style={{ color: '#CCC' }}>git push origin main</span><br/>
            <span style={{ color: '#6A9955' }}>✓ Build completed in 12s</span><br/>
            <span style={{ color: '#6A9955' }}>✓ Deployed to esteemed.cloud</span><br/>
            <span style={{ color: '#DCDCAA' }}>→ https://app.esteemed.cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── VPS Block ─── */
function VpsBlock() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1A1A1A', display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'ui-sans-serif, system-ui, sans-serif', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={IMAGES.vps} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, #1A1A1A)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px 0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#FFF' }}>Virtual Private Servers</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { label: 'vCPUs', value: 'Up to 8' },
            { label: 'RAM', value: 'Up to 16 GB' },
            { label: 'Storage', value: 'NVMe SSD' },
            { label: 'Root Access', value: 'Full SSH' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '16px 18px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#FFF', letterSpacing: -0.3 }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.WordPressBlock = WordPressBlock;
window.DrupalBlock = DrupalBlock;
window.NextBlock = NextBlock;
window.VpsBlock = VpsBlock;

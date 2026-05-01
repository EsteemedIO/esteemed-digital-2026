/* Esteemed Builder Visuals — V2: hi-fi, photoreal feeling
   Pastel palette: paler tints inspired by Alpaca + GoDaddy aesthetic */

/* ── Pastel palette (paler than v1) ── */
const P = {
  butter: '#FFF4B8',     // pale yellow
  butterDeep: '#FEE89B',
  mint:   '#DCEDE0',     // pale green
  mintDeep:'#B8DCC2',
  sky:    '#E0E9F2',     // pale blue
  skyDeep:'#C4D6E8',
  blush:  '#F8DAD0',     // pale pink/peach
  blushDeep:'#F0BCA8',
  lilac:  '#E4DBF0',     // pale purple
  lilacDeep:'#CDBEE0',
  cream:  '#F8F3E8',     // off-white warm
  paper:  '#FAFAF6',
  ink:    '#1A1A1A',
  inkSoft:'#3A3A3A',
  line:   'rgba(26,26,26,0.08)',
};

/* ── Shared chrome ── */

const PhotoBrowser = ({ children, dark = false, url = 'studio.com', toolbar = null, style = {} }) => (
  <div style={{
    width: '100%', height: '100%',
    background: dark ? '#1A1A1A' : '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    boxShadow: '0 40px 80px -30px rgba(26,26,26,0.35), 0 12px 24px -12px rgba(26,26,26,0.18)',
    display: 'flex', flexDirection: 'column',
    border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(26,26,26,0.06)',
    ...style,
  }}>
    <div style={{
      height: 32, padding: '0 12px',
      borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(26,26,26,0.05)',
      display: 'flex', alignItems: 'center', gap: 8,
      background: dark ? '#0F0F0F' : '#FAFAF8',
      flexShrink: 0,
    }}>
      <span style={{ width: 9, height: 9, borderRadius: 9, background: '#FF6058' }} />
      <span style={{ width: 9, height: 9, borderRadius: 9, background: '#FFBE2E' }} />
      <span style={{ width: 9, height: 9, borderRadius: 9, background: '#28C842' }} />
      {toolbar || (
        <div style={{
          marginLeft: 14, flex: 1, height: 16, borderRadius: 4,
          background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(26,26,26,0.04)',
          display: 'flex', alignItems: 'center', padding: '0 10px',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 9, color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(26,26,26,0.5)',
        }}>{url}</div>
      )}
    </div>
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>{children}</div>
  </div>
);

/* ───────────────────────────────────────────────
   V2-1 — BUILD (Butter): Prompt → realistic juice brand site
   ─────────────────────────────────────────────── */

function PromptToSiteV2() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: P.butter,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* soft blob */}
      <div style={{
        position: 'absolute', left: '-10%', bottom: '-20%',
        width: '60%', height: '60%',
        background: 'radial-gradient(closest-side, #FFE89B, transparent)',
        filter: 'blur(20px)',
      }} />

      {/* Prompt card — back */}
      <div style={{
        position: 'absolute', left: 24, top: 30,
        width: 240,
        background: '#FFFFFF',
        borderRadius: 16,
        padding: 14,
        boxShadow: '0 24px 50px -20px rgba(26,26,26,0.25)',
        zIndex: 1,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 7,
            background: '#FEE546', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#FFFFFF', fontSize: 14, fontWeight: 700,
          }}>★</div>
          <span style={{ fontSize: 11, fontWeight: 700, color: P.ink, letterSpacing: -0.2 }}>esteemed</span>
          <span style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(26,26,26,0.4)', fontWeight: 500 }}>just now</span>
        </div>
        <div style={{ fontSize: 12, lineHeight: 1.5, color: P.ink, letterSpacing: -0.1 }}>
          A juice subscription site —
          <span style={{ background: 'rgba(254,229,70,0.5)', padding: '1px 3px', borderRadius: 3 }}>peach &amp; coral palette</span>,
          serif logo, hero with product photography, monthly plan checkout.
          <span className="caretA" style={{ display: 'inline-block', width: 1.5, height: 11, background: P.ink, marginLeft: 1, verticalAlign: -1 }} />
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{
            padding: '4px 8px', borderRadius: 12, background: 'rgba(26,26,26,0.05)',
            fontSize: 8.5, fontWeight: 600, color: 'rgba(26,26,26,0.6)',
          }}>+ Inspiration</div>
          <div style={{
            padding: '4px 8px', borderRadius: 12, background: 'rgba(26,26,26,0.05)',
            fontSize: 8.5, fontWeight: 600, color: 'rgba(26,26,26,0.6)',
          }}>+ Logo</div>
          <div style={{ flex: 1 }} />
          <div style={{
            padding: '5px 11px', borderRadius: 12, background: P.ink, color: '#FFFFFF',
            fontSize: 9.5, fontWeight: 600,
          }}>Generate</div>
        </div>
      </div>

      {/* curved connector */}
      <svg style={{ position: 'absolute', left: 240, top: 110, width: 80, height: 100, zIndex: 2 }} viewBox="0 0 80 100">
        <path d="M 4 4 Q 60 4 60 50 Q 60 96 76 96" stroke="rgba(26,26,26,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <circle cx="76" cy="96" r="3.5" fill={P.ink} />
      </svg>
      <div style={{ position: 'absolute', left: 60, top: 12, fontSize: 16, color: P.ink, opacity: 0.5 }}>✦</div>

      {/* Realistic juice brand site preview */}
      <div style={{
        position: 'absolute', right: 22, bottom: 22, width: '64%', height: '78%',
        zIndex: 3,
      }}>
        <PhotoBrowser url="freshjuice.co">
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* nav */}
            <div style={{
              padding: '10px 16px', display: 'flex', alignItems: 'center',
              borderBottom: '1px solid rgba(26,26,26,0.06)',
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}>
              <div style={{ display: 'flex', gap: 12, fontSize: 9, color: 'rgba(26,26,26,0.7)' }}>
                <span>Home</span><span>Shop</span><span>About</span>
              </div>
              <div style={{ flex: 1, textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: 1, color: P.ink, fontFamily: 'Georgia, serif' }}>FRESH&amp;CO</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 9, color: 'rgba(26,26,26,0.7)' }}>
                <span>🔍</span>
                <div style={{ width: 18, height: 14, border: '1.2px solid '+P.ink, borderRadius: 2, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -3, left: 4, width: 8, height: 5, border: '1.2px solid '+P.ink, borderBottom: 'none', borderRadius: '4px 4px 0 0' }} />
                </div>
              </div>
            </div>

            {/* Hero — peach background, big serif headline flowing across top, product still-life below */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              {/* background split: peach top, coral bottom */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1.4, background: P.blush }} />
                <div style={{ flex: 1, background: '#E8624D' }} />
              </div>

              {/* headline flowing across top */}
              <div style={{
                position: 'relative', zIndex: 2,
                padding: '22px 28px 6px',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16,
              }}>
                <div style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 24, fontWeight: 700, lineHeight: 1.0,
                  color: P.ink, letterSpacing: -0.7, flex: 1,
                }}>
                  Nourish the mind,<br/>body &amp; soul.
                </div>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, paddingTop: 6,
                }}>
                  <div style={{ fontSize: 9, color: 'rgba(26,26,26,0.7)', lineHeight: 1.45, maxWidth: 150, textAlign: 'right' }}>
                    Cold-pressed plant juices delivered to your door each week.
                  </div>
                  <div style={{
                    padding: '6px 14px', borderRadius: 16,
                    background: P.ink, color: '#FFFFFF',
                    fontSize: 9, fontWeight: 600,
                  }}>Shop now</div>
                </div>
              </div>

              {/* still-life — centered below */}
              <div style={{
                position: 'relative', zIndex: 2,
                flex: 1,
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                paddingBottom: 18, gap: 6,
              }}>
                {/* pedestal back */}
                <div style={{
                  width: 38, height: 60, background: P.blushDeep,
                  borderRadius: 2, position: 'relative',
                  boxShadow: 'inset -6px 0 0 rgba(26,26,26,0.06)',
                }}>
                  {/* bottle on pedestal */}
                  <div style={{
                    position: 'absolute', left: '50%', top: -42, transform: 'translateX(-50%)',
                    width: 16, height: 50,
                    background: 'linear-gradient(180deg, #E8624D 0%, #C44A38 100%)',
                    borderRadius: '4px 4px 6px 6px',
                  }}>
                    <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 6, height: 5, background: P.ink, borderRadius: 2 }} />
                    <div style={{ position: 'absolute', top: 14, left: 1, right: 1, height: 18, background: '#FFFFFF', borderRadius: 1, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontFamily: 'Georgia, serif', fontSize: 5, color: P.ink, fontWeight: 700 }}>F&amp;C</div>
                    </div>
                  </div>
                </div>
                {/* watermelon slice */}
                <div style={{
                  width: 28, height: 22, position: 'relative', alignSelf: 'flex-end',
                  marginBottom: 4,
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse at center top, #FF6B5B 0%, #FF6B5B 65%, #DCEDE0 70%, #15A99A 78%)',
                    borderRadius: '50% 50% 4px 4px / 100% 100% 4px 4px',
                    transform: 'rotate(-12deg)',
                  }} />
                </div>
                {/* pedestal front */}
                <div style={{
                  width: 32, height: 42, background: P.blush,
                  borderRadius: 2, position: 'relative',
                }}>
                  {/* glass on pedestal */}
                  <div style={{
                    position: 'absolute', left: '50%', top: -28, transform: 'translateX(-50%)',
                    width: 18, height: 30,
                    background: 'linear-gradient(180deg, rgba(255,107,91,0.2) 0%, #FF6B5B 30%, #C44A38 100%)',
                    borderRadius: '3px 3px 8px 8px',
                    border: '1px solid rgba(26,26,26,0.08)',
                  }}>
                    <div style={{ position: 'absolute', top: -2, left: 0, right: 0, height: 3, background: '#FF8B7B', borderRadius: '50%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* "Featured Products" strip */}
            <div style={{
              padding: '8px 16px', borderTop: '1px solid rgba(26,26,26,0.06)',
              display: 'flex', alignItems: 'center', gap: 8, height: 50, background: '#FFFFFF',
            }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 9, color: P.ink, marginRight: 4 }}>Featured</div>
              {[P.cream, P.mint, P.butter].map((c,i) => (
                <div key={i} style={{ width: 30, height: 32, borderRadius: 4, background: c, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: '50%', top: 4, transform: 'translateX(-50%)', width: 8, height: 22, background: ['#E8624D','#5FA77E','#E8B57A'][i], borderRadius: 1 }} />
                </div>
              ))}
            </div>
          </div>
        </PhotoBrowser>
      </div>

      <style>{`
        @keyframes blinkA { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        .caretA { animation: blinkA 1s steps(1) infinite; }
      `}</style>
    </div>
  );
}

/* ───────────────────────────────────────────────
   V2-2 — CUSTOMIZE (Sky/Mint): Drag-drop with realistic furniture site
   ─────────────────────────────────────────────── */

function DragAndDropV2() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: P.sky,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* component palette */}
      <div style={{
        position: 'absolute', left: 18, top: 22, bottom: 22, width: 88,
        background: '#FFFFFF', borderRadius: 12,
        boxShadow: '0 18px 36px -16px rgba(26,26,26,0.18)',
        padding: 10, display: 'flex', flexDirection: 'column', gap: 7,
      }}>
        <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(26,26,26,0.5)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>Sections</div>
        {[
          { label: 'Hero', preview: <div style={{ height: 18, background: P.mint, borderRadius: 2, padding: 2 }}><div style={{ width: '70%', height: 2, background: 'rgba(26,26,26,0.4)', marginBottom: 1.5, borderRadius: 1 }} /><div style={{ width: '50%', height: 2, background: 'rgba(26,26,26,0.3)', borderRadius: 1 }} /></div> },
          { label: 'Gallery', preview: <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1.5, height: 18 }}>{[P.cream,P.blush,P.lilac].map((c,i)=><div key={i} style={{ background: c, borderRadius: 1.5 }} />)}</div> },
          { label: 'Story', preview: <div style={{ display: 'flex', gap: 2, height: 18 }}><div style={{ width: 18, background: P.cream, borderRadius: 2 }} /><div style={{ flex: 1, padding: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}><div style={{ height: 2, background: 'rgba(26,26,26,0.3)' }} /><div style={{ height: 2, background: 'rgba(26,26,26,0.2)' }} /><div style={{ height: 2, background: 'rgba(26,26,26,0.2)', width: '60%' }} /></div></div> },
          { label: 'Pricing', preview: <div style={{ display: 'flex', gap: 1.5, height: 18 }}>{[0,1,2].map(i=><div key={i} style={{ flex: 1, background: i===1?P.ink:'rgba(26,26,26,0.1)', borderRadius: 1.5 }} />)}</div> },
        ].map((b,i) => (
          <div key={i} style={{
            border: '1px solid rgba(26,26,26,0.08)', borderRadius: 7,
            padding: 6, background: P.paper,
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
            {b.preview}
            <div style={{ fontSize: 8, color: 'rgba(26,26,26,0.65)', fontWeight: 600 }}>{b.label}</div>
          </div>
        ))}
      </div>

      {/* canvas */}
      <div style={{
        position: 'absolute', left: 122, right: 22, top: 22, bottom: 22,
        zIndex: 1,
      }}>
        <PhotoBrowser url="northbloom.studio">
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
            {/* site header */}
            <div style={{
              padding: '8px 14px', display: 'flex', alignItems: 'center',
              borderBottom: '1px solid rgba(26,26,26,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 18, height: 18, border: '1.5px solid '+P.ink, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: 7, fontWeight: 800, color: P.ink, lineHeight: 1, letterSpacing: -0.3 }}>NB</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: P.ink, letterSpacing: 0.5, fontFamily: 'Georgia, serif' }}>Northbloom</span>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, fontSize: 8, color: 'rgba(26,26,26,0.6)' }}>
                <span>Shop</span><span>Story</span><span>Contact</span>
              </div>
            </div>

            {/* hero — green sofa */}
            <div style={{
              flex: 1, background: P.mint,
              padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              {/* hardwood floor strip */}
              <div style={{
                position: 'absolute', left: 0, right: 0, bottom: 0, height: '32%',
                background: 'linear-gradient(180deg, #D6BFA0 0%, #B89773 100%)',
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(26,26,26,0.04) 0 1px, transparent 1px 24px)',
              }} />
              {/* sofa */}
              <div style={{
                position: 'relative', width: '76%', height: 70,
              }}>
                {/* back cushion */}
                <div style={{
                  position: 'absolute', left: '4%', right: '4%', top: 0, height: 36,
                  background: 'linear-gradient(180deg, #1F5A52 0%, #15403A 100%)',
                  borderRadius: '14px 14px 6px 6px',
                  boxShadow: 'inset 0 -3px 4px rgba(0,0,0,0.2)',
                }}>
                  {/* tufts */}
                  <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translateX(-50%)', width: 1, height: '50%', background: 'rgba(0,0,0,0.3)' }} />
                </div>
                {/* seat cushions */}
                <div style={{
                  position: 'absolute', left: 0, right: 0, top: 26, height: 24,
                  display: 'flex', gap: 1, padding: '0 2%',
                }}>
                  {[0,1].map(i=>(
                    <div key={i} style={{
                      flex: 1,
                      background: 'linear-gradient(180deg, #2A6B62 0%, #1A4D45 100%)',
                      borderRadius: '6px 6px 4px 4px',
                      boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.06)',
                    }} />
                  ))}
                </div>
                {/* legs */}
                <div style={{ position: 'absolute', left: '6%', bottom: 0, width: 4, height: 14, background: '#8B6536', transform: 'skew(0deg, 8deg)' }} />
                <div style={{ position: 'absolute', right: '6%', bottom: 0, width: 4, height: 14, background: '#8B6536', transform: 'skew(0deg, -8deg)' }} />
                {/* shadow */}
                <div style={{ position: 'absolute', left: '4%', right: '4%', bottom: -3, height: 4, background: 'radial-gradient(ellipse, rgba(0,0,0,0.2), transparent)' }} />
              </div>
            </div>

            {/* drop zone — being dragged into */}
            <div style={{
              padding: 10, position: 'relative',
              background: '#FFFFFF',
            }}>
              <div style={{
                height: 38,
                border: '1.5px dashed #5B7CC9',
                borderRadius: 8,
                background: 'rgba(91,124,201,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, color: '#3F5BA8', fontWeight: 700, letterSpacing: 0.5,
              }}>DROP TO ADD SECTION</div>
            </div>

            {/* CTA */}
            <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(26,26,26,0.05)', textAlign: 'center', background: '#FFFFFF' }}>
              <div style={{
                display: 'inline-block', padding: '6px 14px',
                background: '#1F5A52', color: '#FFFFFF',
                borderRadius: 4, fontSize: 9, fontWeight: 600,
              }}>View Gallery</div>
            </div>
          </div>
        </PhotoBrowser>
      </div>

      {/* phantom block — being dragged */}
      <div className="dragV2" style={{
        position: 'absolute', left: '32%', top: '52%',
        width: 130, padding: 9,
        background: '#FFFFFF', borderRadius: 8,
        boxShadow: '0 18px 32px -10px rgba(26,26,26,0.4), 0 0 0 1.5px #5B7CC9',
        transform: 'rotate(-3deg)',
        zIndex: 5,
      }}>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 22, height: 22, background: P.cream, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 12, height: 8, background: '#1F5A52', borderRadius: '50% 50% 30% 30%' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2.5, justifyContent: 'center' }}>
            <div style={{ height: 2.5, width: '85%', background: 'rgba(26,26,26,0.55)', borderRadius: 1.5 }} />
            <div style={{ height: 2.5, width: '60%', background: 'rgba(26,26,26,0.3)', borderRadius: 1.5 }} />
          </div>
        </div>
        <div style={{ marginTop: 5, fontSize: 7, color: '#3F5BA8', fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase' }}>Story · being placed</div>
      </div>

      {/* cursor */}
      <svg className="cursorV2" style={{
        position: 'absolute', left: '46%', top: '60%',
        width: 18, height: 22, zIndex: 6,
        filter: 'drop-shadow(0 3px 5px rgba(0,0,0,0.3))',
      }} viewBox="0 0 18 22">
        <path d="M2 2 L2 17 L6.5 13.5 L9.5 21 L11.5 20 L8.5 12.5 L15 12.5 Z" fill={P.ink} stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>

      <style>{`
        @keyframes driftV2 {
          0% { transform: translate(0,0) rotate(-3deg); }
          50% { transform: translate(-7px, -4px) rotate(-4.5deg); }
          100% { transform: translate(0,0) rotate(-3deg); }
        }
        .dragV2 { animation: driftV2 2.6s ease-in-out infinite; }
        @keyframes nudgeV2 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-4px, -2px); }
        }
        .cursorV2 { animation: nudgeV2 2.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

/* ───────────────────────────────────────────────
   V2-3 — AUTOMATE (Lilac): Cascading agent w/ realistic candle-brand site
   ─────────────────────────────────────────────── */

function CascadingAgentV2() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: P.lilac,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: '-15%', top: '-20%',
        width: '70%', height: '70%',
        background: 'radial-gradient(closest-side, #CDBEE0, transparent)',
        filter: 'blur(20px)',
      }} />

      {/* Agent task card — back */}
      <div style={{
        position: 'absolute', left: 22, top: 22,
        width: '46%', height: '64%',
        background: '#FFFFFF', borderRadius: 14,
        padding: 14,
        boxShadow: '0 24px 50px -20px rgba(26,26,26,0.25)',
        zIndex: 1,
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 20, height: 20, borderRadius: 6,
            background: '#7C5BC9', color: '#FFFFFF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 700,
          }}>✦</div>
          <span style={{ fontSize: 10, fontWeight: 700, color: P.ink }}>Agent</span>
          <span style={{ fontSize: 8.5, color: 'rgba(26,26,26,0.5)', fontWeight: 500 }}>· building your store</span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: 6, background: '#3CC97A', boxShadow: '0 0 6px #3CC97A' }} />
            <span style={{ fontSize: 8, color: 'rgba(26,26,26,0.6)', fontWeight: 600 }}>LIVE</span>
          </div>
        </div>

        {[
          { ic: '✓', t: 'Designed brand identity', sub: '"Lumen & Co." · serif + dark', done: true },
          { ic: '✓', t: 'Wrote 4 pages of copy', sub: 'Home · Shop · About · Contact', done: true },
          { ic: '◐', t: 'Generating product photos', sub: '8 of 12 candles complete', active: true },
          { ic: '○', t: 'Wiring Stripe checkout', sub: 'Pending', dim: true },
          { ic: '○', t: 'Publishing to nighttravelers.com', sub: 'Pending', dim: true },
        ].map((row,i) => (
          <div key={i} style={{
            display: 'flex', gap: 9, alignItems: 'center',
            padding: '5px 0',
            opacity: row.dim ? 0.5 : 1,
          }}>
            <div className={row.active ? 'spinV2' : ''} style={{
              width: 18, height: 18, borderRadius: 18,
              background: row.done ? '#E8F5ED' : row.active ? '#EFE6FA' : 'rgba(26,26,26,0.05)',
              color: row.done ? '#2D8E5A' : row.active ? '#7C5BC9' : 'rgba(26,26,26,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700, flexShrink: 0,
            }}>{row.ic}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: P.ink, letterSpacing: -0.1 }}>{row.t}</div>
              <div style={{ fontSize: 8.5, color: 'rgba(26,26,26,0.5)', marginTop: 1 }}>{row.sub}</div>
            </div>
            {row.active && (
              <div style={{ display: 'flex', gap: 2 }}>
                <span className="dotV2" style={{ width: 3.5, height: 3.5, borderRadius: 4, background: '#7C5BC9' }} />
                <span className="dotV2" style={{ width: 3.5, height: 3.5, borderRadius: 4, background: '#7C5BC9', animationDelay: '.2s' }} />
                <span className="dotV2" style={{ width: 3.5, height: 3.5, borderRadius: 4, background: '#7C5BC9', animationDelay: '.4s' }} />
              </div>
            )}
          </div>
        ))}

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8.5 }}>
            <span style={{ color: 'rgba(26,26,26,0.5)', fontWeight: 600 }}>2 min remaining</span>
            <span style={{ color: P.ink, fontWeight: 700 }}>72%</span>
          </div>
          <div style={{ height: 4, background: 'rgba(26,26,26,0.06)', borderRadius: 4, overflow: 'hidden' }}>
            <div className="progressV2" style={{ height: '100%', background: '#7C5BC9', borderRadius: 4 }} />
          </div>
        </div>
      </div>

      {/* Realistic candle brand site preview — front */}
      <div style={{
        position: 'absolute', right: 20, bottom: 20,
        width: '64%', height: '76%',
        zIndex: 3,
      }}>
        <PhotoBrowser url="nighttravelers.com">
          <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* warm sandy background */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, #E8D2B4 0%, #D9B88C 100%)',
            }} />
            {/* nav */}
            <div style={{
              position: 'relative', zIndex: 2,
              padding: '10px 16px', display: 'flex', alignItems: 'center',
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: P.ink,
            }}>
              <div style={{ display: 'flex', gap: 12, fontSize: 9 }}>
                <span style={{ borderBottom: '1px solid '+P.ink, paddingBottom: 1 }}>SHOP</span>
                <span>JOURNAL</span>
                <span>ABOUT</span>
              </div>
              <div style={{ flex: 1, textAlign: 'center', fontSize: 9, fontWeight: 700, letterSpacing: 1.8, fontFamily: 'Georgia, serif' }}>LUMEN &amp; CO.</div>
              <div style={{ display: 'flex', gap: 10, fontSize: 9 }}>
                <span>SEARCH</span>
                <span>CART (1)</span>
              </div>
            </div>

            {/* hero */}
            <div style={{
              position: 'relative', zIndex: 2,
              padding: '10px 18px', display: 'flex', height: 'calc(100% - 32px)',
            }}>
              {/* left — copy */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 14 }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 2, color: 'rgba(26,26,26,0.6)' }}>WINTER 2026</div>
                <div style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 28, fontWeight: 700, color: P.ink,
                  letterSpacing: -0.5, lineHeight: 1, marginTop: 4,
                }}>NOCTURNAL<br/>ANIMAL<br/>CANDLES</div>
                <div style={{ marginTop: 8, fontSize: 9, color: 'rgba(26,26,26,0.7)', maxWidth: 180, lineHeight: 1.4 }}>
                  Hand-poured soy in stoneware vessels. Burns 60+ hours.
                </div>
                <div style={{
                  marginTop: 10, alignSelf: 'flex-start',
                  padding: '6px 14px', background: P.ink, color: '#F0E2D0',
                  borderRadius: 2, fontSize: 8.5, fontWeight: 700, letterSpacing: 1.5,
                  fontFamily: 'Georgia, serif',
                }}>SHOP NOW</div>
              </div>
              {/* right — owl candle still life */}
              <div style={{ flex: 1.1, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 6 }}>
                {/* owl candle */}
                <div style={{
                  position: 'relative',
                  width: 92, height: 130,
                }}>
                  {/* body */}
                  <div style={{
                    position: 'absolute', left: 8, top: 22, right: 8, bottom: 0,
                    background: 'linear-gradient(180deg, #E8932A 0%, #C97516 100%)',
                    borderRadius: '36% 36% 18% 18% / 50% 50% 12% 12%',
                    boxShadow: 'inset -10px -8px 16px rgba(0,0,0,0.18), inset 8px 6px 14px rgba(255,255,255,0.18)',
                  }} />
                  {/* head tufts */}
                  <div style={{ position: 'absolute', left: 18, top: 10, width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderBottom: '14px solid #C97516', transform: 'rotate(-12deg)' }} />
                  <div style={{ position: 'absolute', right: 18, top: 10, width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderBottom: '14px solid #C97516', transform: 'rotate(12deg)' }} />
                  {/* eyes */}
                  <div style={{ position: 'absolute', left: 22, top: 38, width: 16, height: 16, borderRadius: 16, background: '#FAFAF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 7, height: 7, borderRadius: 7, background: P.ink }} />
                  </div>
                  <div style={{ position: 'absolute', right: 22, top: 38, width: 16, height: 16, borderRadius: 16, background: '#FAFAF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 7, height: 7, borderRadius: 7, background: P.ink }} />
                  </div>
                  {/* beak */}
                  <div style={{ position: 'absolute', left: '50%', top: 56, transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '6px solid #8B5A18' }} />
                  {/* wick */}
                  <div style={{ position: 'absolute', left: '50%', top: -2, transform: 'translateX(-50%)', width: 1, height: 8, background: P.ink }} />
                  {/* flame */}
                  <div className="flame" style={{
                    position: 'absolute', left: '50%', top: -10, transform: 'translateX(-50%)',
                    width: 6, height: 10,
                    background: 'radial-gradient(ellipse at 50% 60%, #FFF2A0 0%, #FFB840 50%, #E8623A 100%)',
                    borderRadius: '50% 50% 40% 40% / 80% 80% 50% 50%',
                  }} />
                  {/* shadow */}
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: -6, height: 6, background: 'radial-gradient(ellipse, rgba(0,0,0,0.25), transparent 70%)' }} />
                </div>

                {/* edit chip — "Generate logo" */}
                <div className="chipFloatA" style={{
                  position: 'absolute', left: 4, top: 12,
                  display: 'flex', alignItems: 'center', gap: 5,
                  background: '#FFFFFF', padding: '5px 9px',
                  borderRadius: 14, boxShadow: '0 8px 16px -6px rgba(26,26,26,0.25)',
                  fontSize: 8.5, fontWeight: 600, color: P.ink,
                }}>
                  <span style={{ width: 12, height: 12, borderRadius: 3, background: '#7C5BC9', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7 }}>✦</span>
                  Generate logo
                </div>

                {/* edit chip — "Create social media" */}
                <div className="chipFloatB" style={{
                  position: 'absolute', right: 8, bottom: 18,
                  display: 'flex', alignItems: 'center', gap: 5,
                  background: '#FFFFFF', padding: '5px 9px',
                  borderRadius: 14, boxShadow: '0 8px 16px -6px rgba(26,26,26,0.25)',
                  fontSize: 8.5, fontWeight: 600, color: P.ink,
                }}>
                  <span style={{ width: 12, height: 12, borderRadius: 3, background: '#7C5BC9', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7 }}>✦</span>
                  Create social
                </div>
              </div>
            </div>
          </div>
        </PhotoBrowser>
      </div>

      <style>{`
        @keyframes spinV2 { to { transform: rotate(360deg); } }
        .spinV2 { animation: spinV2 1.6s linear infinite; }
        @keyframes pulseV2 { 0%, 100% { opacity: 0.3 } 50% { opacity: 1 } }
        .dotV2 { animation: pulseV2 1.2s ease-in-out infinite; }
        @keyframes growV2 { from { width: 68% } to { width: 76% } }
        .progressV2 { animation: growV2 2.4s ease-in-out infinite alternate; width: 72%; }
        @keyframes flicker { 0%, 100% { transform: translateX(-50%) scaleY(1); opacity: 1 } 50% { transform: translateX(-50%) scaleY(1.1); opacity: 0.92 } }
        .flame { animation: flicker 0.6s ease-in-out infinite; transform-origin: bottom center; }
        @keyframes floatA { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
        .chipFloatA { animation: floatA 3s ease-in-out infinite; }
        .chipFloatB { animation: floatA 3.4s ease-in-out infinite reverse; }
      `}</style>
    </div>
  );
}

/* ───────────────────────────────────────────────
   V2-4 — RESPONSIVE (Mint): Multi-device fashion brand
   ─────────────────────────────────────────────── */

function MultiDeviceV2() {
  // Shared site content
  const SiteHero = ({ size = 'lg' }) => {
    const isPhone = size === 'sm';
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
        {/* nav */}
        <div style={{
          padding: isPhone ? '6px 8px' : '10px 14px',
          display: 'flex', alignItems: 'center',
          borderBottom: '1px solid rgba(26,26,26,0.05)',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}>
          {isPhone ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <div style={{ width: 8, height: 1, background: '#2F4A38' }} />
                <div style={{ width: 8, height: 1, background: '#2F4A38' }} />
                <div style={{ width: 8, height: 1, background: '#2F4A38' }} />
              </div>
              <div style={{ flex: 1, textAlign: 'center', fontSize: 7, fontWeight: 800, letterSpacing: 1.2, color: '#2F4A38', fontFamily: 'system-ui, -apple-system, sans-serif' }}>FIELDNOTES</div>
              <div style={{ width: 10, height: 9, border: '1px solid #2F4A38', borderRadius: 1 }} />
            </>
          ) : (
            <>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, color: '#2F4A38', fontFamily: 'system-ui, -apple-system, sans-serif' }}>FIELDNOTES</div>
              <div style={{ marginLeft: 24, display: 'flex', gap: 14, fontSize: 8.5, color: 'rgba(47,74,56,0.75)' }}>
                <span>Shop</span><span>Journal</span><span>Studio</span>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center', fontSize: 8.5, color: 'rgba(47,74,56,0.75)' }}>
                <span>Contact</span>
                <span>🔍</span>
                <div style={{ width: 14, height: 11, border: '1px solid #2F4A38', borderRadius: 1, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -2, left: 3, width: 6, height: 4, border: '1px solid #2F4A38', borderBottom: 'none', borderRadius: '4px 4px 0 0' }} />
                </div>
              </div>
            </>
          )}
        </div>
        {/* hero */}
        {isPhone ? (
          <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', background: '#F4F0E6' }}>
            {/* product image — notebook stack */}
            <div style={{
              flex: 1, background: '#E8E0CC', borderRadius: 4,
              position: 'relative', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 100,
            }}>
              {/* notebook */}
              <div style={{ position: 'relative', width: 46, height: 60, transform: 'rotate(-4deg)' }}>
                <div style={{ position: 'absolute', inset: 0, background: '#2F4A38', borderRadius: 2, boxShadow: '0 4px 10px rgba(0,0,0,0.12)' }}>
                  <div style={{ position: 'absolute', left: 6, right: 6, top: 16, height: 1, background: 'rgba(244,240,230,0.6)' }} />
                  <div style={{ position: 'absolute', left: 6, right: 6, top: 22, height: 1, background: 'rgba(244,240,230,0.4)' }} />
                  <div style={{ position: 'absolute', left: 6, right: 12, top: 32, height: 4, background: '#C9A961', borderRadius: 1 }} />
                </div>
                <div style={{ position: 'absolute', left: -3, top: 0, bottom: 0, width: 3, background: '#1F3328', borderRadius: '2px 0 0 2px' }} />
              </div>
            </div>
            <div style={{ marginTop: 8, fontSize: 8, fontWeight: 700, letterSpacing: 0.5, color: '#2F4A38', fontFamily: 'system-ui, -apple-system, sans-serif', textTransform: 'uppercase' }}>The Daily Journal</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#2F4A38', marginTop: 2 }}>$32</div>
            <div style={{ fontSize: 6.5, color: 'rgba(47,74,56,0.55)', marginTop: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>Cover</div>
            <div style={{ display: 'flex', gap: 4, marginTop: 3 }}>
              <div style={{ width: 10, height: 10, borderRadius: 10, background: '#2F4A38', boxShadow: '0 0 0 1.5px #FFFFFF, 0 0 0 2.5px #2F4A38' }} />
              <div style={{ width: 10, height: 10, borderRadius: 10, background: '#C9A961' }} />
              <div style={{ width: 10, height: 10, borderRadius: 10, background: '#8B6F47' }} />
            </div>
            <div style={{
              marginTop: 8, padding: '6px 0',
              background: '#2F4A38', color: '#F4F0E6',
              borderRadius: 2, fontSize: 8, fontWeight: 700, textAlign: 'center', letterSpacing: 1.5, textTransform: 'uppercase',
            }}>Add to Cart</div>
          </div>
        ) : (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* hero — sage block + cream */}
            <div style={{
              flex: 1.4, position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              background: '#F4F0E6',
            }}>
              {/* big sage rectangle on right */}
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '52%', background: '#2F4A38' }} />

              {/* headline flowing across top */}
              <div style={{ position: 'relative', zIndex: 2, padding: '20px 22px 6px' }}>
                <div style={{ fontSize: 7.5, fontWeight: 800, letterSpacing: 2.5, color: 'rgba(47,74,56,0.65)', textTransform: 'uppercase' }}>Spring Edition · 2026</div>
                <div style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 26, fontWeight: 800, lineHeight: 0.98,
                  color: '#2F4A38', letterSpacing: -0.8,
                  marginTop: 4,
                }}>
                  Notes from<br/>the field.
                </div>
              </div>

              {/* notebook stack — centered, slightly toward right over sage */}
              <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 36, paddingBottom: 14 }}>
                <div style={{ position: 'relative', width: 90, height: 110 }}>
                  {/* back notebook (cream) */}
                  <div style={{ position: 'absolute', left: 0, top: 14, width: 64, height: 88, background: '#E8E0CC', borderRadius: 2, transform: 'rotate(-6deg)', boxShadow: '0 6px 14px rgba(0,0,0,0.18)' }}>
                    <div style={{ position: 'absolute', left: 6, right: 6, top: 14, height: 1, background: 'rgba(47,74,56,0.25)' }} />
                    <div style={{ position: 'absolute', left: 6, right: 6, top: 20, height: 1, background: 'rgba(47,74,56,0.18)' }} />
                  </div>
                  {/* front notebook (gold) */}
                  <div style={{ position: 'absolute', left: 22, top: 4, width: 60, height: 92, background: '#C9A961', borderRadius: 2, transform: 'rotate(4deg)', boxShadow: '0 8px 18px rgba(0,0,0,0.22)' }}>
                    <div style={{ position: 'absolute', left: 8, top: 14, width: 24, height: 2, background: '#2F4A38', borderRadius: 1 }} />
                    <div style={{ position: 'absolute', left: 8, top: 20, width: 18, height: 2, background: '#2F4A38', borderRadius: 1, opacity: 0.7 }} />
                  </div>
                  {/* pen */}
                  <div style={{ position: 'absolute', left: 4, bottom: -2, width: 48, height: 4, background: '#1F3328', borderRadius: 2, transform: 'rotate(-12deg)', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                    <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 6, background: '#C9A961', borderRadius: '0 2px 2px 0' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* featured row */}
            <div style={{ flex: 1, padding: '10px 14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 7 }}>
              <div style={{ fontSize: 7.5, fontWeight: 800, color: '#2F4A38', textAlign: 'center', letterSpacing: 1.8, textTransform: 'uppercase', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Shop the Collection</div>
              <div style={{ display: 'flex', gap: 6, flex: 1 }}>
                {[
                  { bg: '#E8E0CC', fg: '#2F4A38' },
                  { bg: '#D9E2D0', fg: '#2F4A38' },
                  { bg: '#F4F0E6', fg: '#C9A961' },
                ].map((c,i) => (
                  <div key={i} style={{ flex: 1, background: c.bg, borderRadius: 3, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 14, height: 18, background: c.fg, borderRadius: 1 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      width: '100%', height: '100%',
      background: P.mint,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* halo */}
      <div style={{
        position: 'absolute', right: '-20%', top: '-20%',
        width: '70%', height: '70%',
        background: 'radial-gradient(closest-side, #FFF4B8 30%, transparent 70%)',
        filter: 'blur(20px)',
      }} />

      {/* Phone — left, vertical */}
      <div style={{
        position: 'absolute',
        left: 24, top: '50%', transform: 'translateY(-50%) rotate(-2deg)',
        width: 130, height: 250,
        background: '#FFFFFF',
        borderRadius: 18,
        boxShadow: '0 30px 50px -16px rgba(26,26,26,0.3), 0 0 0 1px rgba(26,26,26,0.08)',
        padding: 4,
        zIndex: 3,
        overflow: 'hidden',
      }}>
        <div style={{ height: '100%', borderRadius: 14, overflow: 'hidden', position: 'relative' }}>
          {/* notch */}
          <div style={{ position: 'absolute', left: '50%', top: 4, transform: 'translateX(-50%)', width: 30, height: 5, borderRadius: 5, background: P.ink, zIndex: 2 }} />
          <SiteHero size="sm" />
        </div>
      </div>

      {/* Tablet/desktop browser — right, larger */}
      <div style={{
        position: 'absolute',
        right: 24, top: 28, bottom: 28, width: '60%',
        zIndex: 2,
      }}>
        <PhotoBrowser url="fieldnotes.studio" toolbar={
          <>
            <div style={{ marginLeft: 12, display: 'flex', gap: 4 }}>
              <div style={{ padding: '3px 8px', borderRadius: 4, background: 'rgba(26,26,26,0.04)', fontSize: 8, fontWeight: 600, color: 'rgba(26,26,26,0.7)' }}>Website Builder ▾</div>
              <div style={{ padding: '3px 8px', borderRadius: 4, background: '#FFFFFF', border: '1px solid rgba(26,26,26,0.1)', fontSize: 8, fontWeight: 600, color: P.ink }}>Preview</div>
              <div style={{ padding: '3px 10px', borderRadius: 4, background: '#2F4A38', color: '#FFFFFF', fontSize: 8, fontWeight: 700 }}>Publish</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: 'rgba(26,26,26,0.04)' }} />
              <div style={{ width: 14, height: 14, borderRadius: 4, background: '#2F4A38' }} />
              <div style={{ width: 14, height: 14, borderRadius: 4, background: 'rgba(26,26,26,0.04)' }} />
            </div>
          </>
        }>
          <div style={{ height: '100%', display: 'flex' }}>
            {/* Site canvas */}
            <div style={{ flex: 1, position: 'relative' }}>
              {/* Selection chip on headline */}
              <div style={{
                position: 'absolute', top: '34%', left: '6%',
                width: 4, height: 4, borderRadius: 4, background: '#C9A961',
                boxShadow: '0 0 0 1.5px #FFFFFF',
                zIndex: 5,
              }} />
              <SiteHero size="lg" />
            </div>
            {/* Right rail — color picker */}
            <div style={{
              width: 110, borderLeft: '1px solid rgba(26,26,26,0.06)',
              background: '#1A1A1A', color: '#FFFFFF',
              padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6, marginBottom: 2 }}>
                <span style={{ fontSize: 9 }}>▦</span>
                <span style={{ fontSize: 9, color: '#FFB94B' }}>◉</span>
                <span style={{ fontSize: 9 }}>⚙</span>
              </div>
              <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: 0.3 }}>Color</div>
              <div style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.5, textTransform: 'uppercase' }}>Matching color</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
                {['#F4F0E6', '#E8E0CC', '#C9A961', '#D9E2D0', '#2F4A38', '#FFFFFF'].map((c,i)=>(
                  <div key={i} style={{ aspectRatio: '1', borderRadius: 4, background: c, border: c==='#FFFFFF' ? '1px solid rgba(255,255,255,0.2)' : 'none' }} />
                ))}
              </div>
              <div style={{
                height: 32,
                background: 'linear-gradient(135deg, #F4F0E6 0%, #2F4A38 100%)',
                borderRadius: 4, position: 'relative',
              }}>
                <div style={{ position: 'absolute', right: 6, top: 4, width: 5, height: 5, borderRadius: 5, background: '#FFFFFF', boxShadow: '0 0 0 1.5px '+P.ink }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 2 }}>
                {['#1F3328','#2F4A38','#4A6B52','#7A9A82','#A8C4AE','#D9E2D0'].map((c,i)=>(
                  <div key={i} style={{ aspectRatio: '1', borderRadius: 8, background: c }} />
                ))}
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, fontWeight: 600 }}>
                  <span style={{ width: 11, height: 11, borderRadius: 2, background: 'rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 7 }}>A</span>
                  Font
                  <span style={{ marginLeft: 'auto', fontSize: 7 }}>▾</span>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8.5, fontWeight: 600 }}>
                  <span style={{ width: 11, height: 11, borderRadius: 2, background: 'rgba(255,255,255,0.1)' }} />
                  Buttons
                  <span style={{ marginLeft: 'auto', fontSize: 7 }}>▾</span>
                </div>
              </div>
            </div>
          </div>
        </PhotoBrowser>
      </div>

      {/* Circular human avatar overlaid on top of the work — far right */}
      <div style={{
        position: 'absolute',
        right: 24, bottom: 38,
        zIndex: 4,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{
          width: 110, height: 110, borderRadius: '50%',
          backgroundImage: 'url("assets/grow-human.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '5px solid #FFFFFF',
          boxShadow: '0 18px 40px -10px rgba(26,26,26,0.45), 0 0 0 1px rgba(26,26,26,0.06)',
          position: 'relative',
        }}>
          {/* online status dot */}
          <div style={{
            position: 'absolute', right: 4, bottom: 4,
            width: 18, height: 18, borderRadius: 18,
            background: '#3CC97A',
            border: '3px solid #FFFFFF',
          }} />
        </div>
        {/* name pill — pastel blue, overlaps bottom of circle */}
        <div style={{
          marginTop: -16,
          background: '#E0E9F2',
          borderRadius: 20,
          padding: '8px 18px',
          boxShadow: '0 12px 26px -8px rgba(26,26,26,0.28), 0 0 0 1px rgba(26,26,26,0.05)',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          textAlign: 'center',
          minWidth: 168,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: P.ink, letterSpacing: -0.2, lineHeight: 1 }}>Maya Chen</div>
            <div style={{ display: 'flex', gap: 1 }}>
              {[0,1,2,3].map((i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#FFD43B" stroke="#E8B83A" strokeWidth="0.5">
                  <path d="M6 1l1.55 3.14L11 4.65l-2.5 2.44.59 3.45L6 8.91l-3.09 1.63.59-3.45L1 4.65l3.45-.51L6 1z"/>
                </svg>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 10, color: 'rgba(26,26,26,0.65)', marginTop: 3, letterSpacing: 0.2 }}>Support Specialist</div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   V2-4b — GROW (Mint): Photo of human + floating expert badges
   ─────────────────────────────────────────────── */
function HumanSupportV2(props) {
  const {
    name = 'Maya Chen',
    title = 'Brand designer · Brooklyn',
    showOnline = true,
    showJames = true,
    showAida = true,
    showCounter = true,
    showAvatars = true,
  } = props || {};
  return (
    <div style={{
      width: '100%', height: '100%',
      background: P.mint,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* soft halo */}
      <div style={{
        position: 'absolute', right: '-15%', top: '-15%',
        width: '60%', height: '60%',
        background: 'radial-gradient(closest-side, #FFF4B8 30%, transparent 70%)',
        filter: 'blur(20px)',
      }} />

      {/* Photo card — centered, slightly tilted. The name/title chip is overlaid on TOP of the photo. */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%) rotate(-2deg)',
        width: 320, height: 360,
        borderRadius: 14,
        overflow: 'visible',
        boxShadow: '0 30px 60px -20px rgba(26,26,26,0.35), 0 0 0 1px rgba(26,26,26,0.06)',
        background: '#FFFFFF',
        padding: 10,
        zIndex: 2,
      }}>
        <div style={{
          width: '100%', height: '100%',
          backgroundImage: 'url("assets/grow-human.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 6,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle bottom gradient so chip reads cleanly on busy photos */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: '45%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
          }} />

          {/* Name + title chip — OVERLAID on the photo, bottom-left */}
          <div style={{
            position: 'absolute',
            left: 14, bottom: 14, right: 14,
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8,
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: 12,
              padding: '8px 12px',
              boxShadow: '0 10px 24px -8px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.5)',
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              maxWidth: '80%',
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: P.ink, letterSpacing: -0.2, lineHeight: 1.1 }}>{name}</div>
              <div style={{ fontSize: 9, color: 'rgba(26,26,26,0.62)', letterSpacing: 0.2, marginTop: 2, lineHeight: 1.2 }}>{title}</div>
            </div>
            {showOnline && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '5px 9px',
                background: '#3CC97A', color: '#FFFFFF',
                borderRadius: 12,
                fontSize: 9, fontWeight: 700, letterSpacing: 0.3,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                boxShadow: '0 8px 18px -6px rgba(60,201,122,0.55)',
                whiteSpace: 'nowrap',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: 5, background: '#FFFFFF' }} />
                Online
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating expert chip — top left */}
      {showJames && (
      <div style={{
        position: 'absolute',
        left: 28, top: 38,
        background: '#FFFFFF',
        borderRadius: 12,
        padding: '10px 14px 10px 10px',
        boxShadow: '0 14px 30px -10px rgba(26,26,26,0.2), 0 0 0 1px rgba(26,26,26,0.05)',
        display: 'flex', alignItems: 'center', gap: 10,
        transform: 'rotate(-3deg)',
        zIndex: 3,
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 30,
          background: 'linear-gradient(135deg, #F8DAD0, #E8624D)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFFFFF', fontSize: 12, fontWeight: 700,
          fontFamily: 'Georgia, serif',
        }}>JR</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: P.ink, letterSpacing: -0.1 }}>James Reyes</div>
          <div style={{ fontSize: 8.5, color: 'rgba(26,26,26,0.6)' }}>SEO strategist</div>
        </div>
      </div>
      )}

      {/* Floating expert chip — bottom right */}
      {showAida && (
      <div style={{
        position: 'absolute',
        right: 24, bottom: 60,
        background: '#FFFFFF',
        borderRadius: 12,
        padding: '10px 14px 10px 10px',
        boxShadow: '0 14px 30px -10px rgba(26,26,26,0.2), 0 0 0 1px rgba(26,26,26,0.05)',
        display: 'flex', alignItems: 'center', gap: 10,
        transform: 'rotate(2.5deg)',
        zIndex: 3,
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 30,
          background: 'linear-gradient(135deg, #DCEDE0, #2F4A38)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFFFFF', fontSize: 12, fontWeight: 700,
          fontFamily: 'Georgia, serif',
        }}>AT</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: P.ink, letterSpacing: -0.1 }}>Aida Tovar</div>
          <div style={{ fontSize: 8.5, color: 'rgba(26,26,26,0.6)' }}>Copywriter</div>
        </div>
      </div>
      )}

      {/* Network counter — top right */}
      {showCounter && (
      <div style={{
        position: 'absolute',
        right: 24, top: 28,
        background: P.ink,
        color: '#FFFFFF',
        borderRadius: 10,
        padding: '10px 14px',
        boxShadow: '0 14px 30px -10px rgba(26,26,26,0.4)',
        zIndex: 3,
        textAlign: 'right',
      }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.6, lineHeight: 1, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>35,000+</div>
        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.65)', letterSpacing: 1.2, textTransform: 'uppercase', marginTop: 3 }}>Vetted experts</div>
      </div>
      )}

      {/* Avatar cluster — bottom left */}
      {showAvatars && (
      <div style={{
        position: 'absolute',
        left: 28, bottom: 28,
        display: 'flex', alignItems: 'center', gap: 10,
        zIndex: 3,
      }}>
        <div style={{ display: 'flex' }}>
          {[
            'linear-gradient(135deg, #FFF4B8, #C9A961)',
            'linear-gradient(135deg, #E0E9F2, #6B8FB5)',
            'linear-gradient(135deg, #E4DBF0, #8B6FAB)',
            'linear-gradient(135deg, #F8DAD0, #E8624D)',
          ].map((g, i) => (
            <div key={i} style={{
              width: 26, height: 26, borderRadius: 26,
              background: g,
              border: '2px solid #DCEDE0',
              marginLeft: i === 0 ? 0 : -8,
            }} />
          ))}
          <div style={{
            width: 26, height: 26, borderRadius: 26,
            background: P.ink, color: '#FFFFFF',
            border: '2px solid #DCEDE0',
            marginLeft: -8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 8.5, fontWeight: 700,
          }}>+12</div>
        </div>
        <div style={{ fontSize: 9.5, color: 'rgba(26,26,26,0.7)', maxWidth: 110, lineHeight: 1.3 }}>
          available now
        </div>
      </div>
      )}
    </div>
  );
}

Object.assign(window, {
  PromptToSiteV2,
  DragAndDropV2,
  CascadingAgentV2,
  MultiDeviceV2,
  HumanSupportV2,
});
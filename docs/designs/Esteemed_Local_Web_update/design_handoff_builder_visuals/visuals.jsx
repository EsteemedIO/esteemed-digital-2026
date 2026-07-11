/* Esteemed Builder Visuals — right-side illustrations for cascading cards */

const INDIGO = '#6366F1';
const INDIGO_DEEP = '#4F46E5';
const YELLOW = '#FFE15A';
const INK = '#0F1115';
const PAPER = '#F4F4F2';
const LINE = 'rgba(15,17,21,0.08)';

/* ---------- Shared primitives ---------- */

const Browser = ({ children, dark = false, style = {}, accent = INDIGO }) => (
  <div style={{
    width: '100%', height: '100%',
    background: dark ? '#15171C' : '#FFFFFF',
    border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(15,17,21,0.08)',
    borderRadius: 14,
    overflow: 'hidden',
    boxShadow: dark
      ? '0 30px 60px -20px rgba(0,0,0,0.6), 0 8px 20px -10px rgba(0,0,0,0.5)'
      : '0 30px 60px -20px rgba(15,17,21,0.25), 0 8px 20px -10px rgba(15,17,21,0.15)',
    display: 'flex', flexDirection: 'column',
    ...style,
  }}>
    <div style={{
      height: 28, padding: '0 10px',
      borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(15,17,21,0.06)',
      display: 'flex', alignItems: 'center', gap: 6,
      background: dark ? '#0F1115' : '#FAFAF8',
      flexShrink: 0,
    }}>
      <span style={{ width: 8, height: 8, borderRadius: 8, background: dark ? '#2A2D34' : '#E5E5E0' }} />
      <span style={{ width: 8, height: 8, borderRadius: 8, background: dark ? '#2A2D34' : '#E5E5E0' }} />
      <span style={{ width: 8, height: 8, borderRadius: 8, background: dark ? '#2A2D34' : '#E5E5E0' }} />
      <div style={{
        marginLeft: 10, flex: 1, height: 14, borderRadius: 4,
        background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(15,17,21,0.04)',
        display: 'flex', alignItems: 'center', padding: '0 8px',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 9, color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(15,17,21,0.45)',
        letterSpacing: 0.2,
      }}>yourbusiness.com</div>
    </div>
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>{children}</div>
  </div>
);

const Pill = ({ w = 60, h = 8, c = 'rgba(15,17,21,0.10)', r = 4 }) => (
  <div style={{ width: w, height: h, background: c, borderRadius: r }} />
);

const Block = ({ w = '100%', h = 40, c = 'rgba(15,17,21,0.05)', r = 8, children, style = {} }) => (
  <div style={{ width: w, height: h, background: c, borderRadius: r, ...style }}>{children}</div>
);

/* ---------- VARIATION 1 — Match/Indigo: AI prompt → live preview ---------- */

function PromptToSite() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: INDIGO,
      position: 'relative',
      overflow: 'hidden',
      padding: 36,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }} />

      {/* Prompt card — back layer */}
      <div style={{
        position: 'absolute',
        left: 28, top: 36,
        width: '52%', minHeight: 140,
        background: '#FFFFFF',
        borderRadius: 14,
        boxShadow: '0 24px 50px -20px rgba(0,0,0,0.4)',
        padding: 16,
        display: 'flex', flexDirection: 'column', gap: 10,
        zIndex: 1,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 6,
            background: INK, color: YELLOW,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12,
          }}>★</div>
          <span style={{
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
            fontSize: 11, fontWeight: 600, color: INK, letterSpacing: -0.2,
          }}>Describe your site</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
            <span style={{ width: 5, height: 5, borderRadius: 5, background: '#22C55E' }} />
            <Pill w={28} h={5} c="rgba(15,17,21,0.10)" />
          </div>
        </div>

        <div style={{
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          fontSize: 12, lineHeight: 1.5, color: INK,
          letterSpacing: -0.1,
        }}>
          A clean site for my dental practice in Austin —
          <span style={{ background: 'rgba(255,225,90,0.55)', padding: '0 2px', borderRadius: 2 }}> warm tones</span>,
          booking widget, and a team page.
          <span className="caret" style={{
            display: 'inline-block', width: 1.5, height: 12,
            background: INK, marginLeft: 2, verticalAlign: -2,
          }} />
        </div>

        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          <Pill w={56} h={18} c="rgba(15,17,21,0.06)" r={6} />
          <Pill w={44} h={18} c="rgba(15,17,21,0.06)" r={6} />
          <div style={{ flex: 1 }} />
          <div style={{
            height: 18, padding: '0 10px',
            background: INK, color: YELLOW, borderRadius: 6,
            display: 'flex', alignItems: 'center',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontSize: 9, fontWeight: 600, letterSpacing: 0.2,
          }}>Generate</div>
        </div>
      </div>

      {/* connector */}
      <svg style={{ position: 'absolute', left: '48%', top: '38%', width: 60, height: 60, zIndex: 2 }} viewBox="0 0 60 60">
        <path d="M 4 4 Q 30 4 30 30 Q 30 56 56 56" stroke="rgba(15,17,21,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        <circle cx="56" cy="56" r="3" fill={INK} />
      </svg>

      {/* Site preview card — front layer */}
      <div style={{
        position: 'absolute',
        right: 28, bottom: 28,
        width: '58%', height: '62%',
        zIndex: 3,
      }}>
        <Browser>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* nav */}
            <div style={{
              padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid rgba(15,17,21,0.06)',
            }}>
              <div style={{
                width: 14, height: 14, borderRadius: 4,
                background: '#E8B57A',
              }} />
              <Pill w={36} h={6} c="rgba(15,17,21,0.55)" />
              <div style={{ flex: 1 }} />
              <Pill w={20} h={5} />
              <Pill w={20} h={5} />
              <Pill w={20} h={5} />
              <div style={{
                height: 14, padding: '0 8px', borderRadius: 7,
                background: '#E8B57A',
                display: 'flex', alignItems: 'center',
              }}>
                <Pill w={20} h={4} c="#FFFFFF" />
              </div>
            </div>
            {/* hero */}
            <div style={{ padding: 12, display: 'flex', gap: 10, flex: 1 }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
                <Pill w={'85%'} h={9} c="#1F1B16" r={3} />
                <Pill w={'70%'} h={9} c="#1F1B16" r={3} />
                <div style={{ height: 6 }} />
                <Pill w={'92%'} h={4} c="rgba(31,27,22,0.4)" r={2} />
                <Pill w={'78%'} h={4} c="rgba(31,27,22,0.4)" r={2} />
                <div style={{ height: 4 }} />
                <div style={{
                  width: 60, height: 16, borderRadius: 8,
                  background: '#E8B57A',
                }} />
              </div>
              <div style={{
                width: 70, borderRadius: 8,
                background: 'linear-gradient(135deg, #F1DCC0, #E8B57A)',
              }} />
            </div>
          </div>
        </Browser>
      </div>

      {/* sparkles */}
      <div style={{ position: 'absolute', right: '52%', top: 24, color: INK, fontSize: 14 }}>✦</div>
      <div style={{ position: 'absolute', left: '40%', bottom: '38%', color: 'rgba(15,17,21,0.4)', fontSize: 10 }}>✦</div>

      <style>{`
        @keyframes blink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        .caret { animation: blink 1s steps(1) infinite; }
      `}</style>
    </div>
  );
}

/* ---------- VARIATION 2 — Work/Gray: drag-and-drop blocks ---------- */

function DragAndDrop() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#EDEDEA',
      position: 'relative',
      overflow: 'hidden',
      padding: 28,
    }}>
      {/* component palette — left rail */}
      <div style={{
        position: 'absolute', left: 22, top: 22, bottom: 22, width: 96,
        background: '#FFFFFF', borderRadius: 12,
        boxShadow: '0 12px 30px -16px rgba(15,17,21,0.18)',
        padding: 10,
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <Pill w={48} h={5} c="rgba(15,17,21,0.5)" />
        {[
          { label: 'Hero', body: <div style={{ height: 10, background: 'rgba(99,102,241,0.18)', borderRadius: 2 }} /> },
          { label: 'Pricing', body: (
            <div style={{ display: 'flex', gap: 2 }}>
              {[0,1,2].map(i => <div key={i} style={{ flex: 1, height: 12, background: 'rgba(15,17,21,0.08)', borderRadius: 2 }} />)}
            </div>
          )},
          { label: 'Gallery', body: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[0,1,2,3].map(i => <div key={i} style={{ height: 5, background: 'rgba(15,17,21,0.10)', borderRadius: 1 }} />)}
            </div>
          )},
          { label: 'Form', body: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ height: 4, background: 'rgba(15,17,21,0.08)', borderRadius: 1 }} />
              <div style={{ height: 4, background: 'rgba(15,17,21,0.08)', borderRadius: 1 }} />
              <div style={{ height: 4, width: '40%', background: INK, borderRadius: 1 }} />
            </div>
          )},
        ].map((b, i) => (
          <div key={i} style={{
            border: '1px solid rgba(15,17,21,0.10)', borderRadius: 6,
            padding: 6, display: 'flex', flexDirection: 'column', gap: 4,
            background: '#FAFAF8',
          }}>
            {b.body}
            <div style={{
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 8, color: 'rgba(15,17,21,0.55)', fontWeight: 500,
            }}>{b.label}</div>
          </div>
        ))}
      </div>

      {/* canvas — site under construction */}
      <div style={{
        position: 'absolute', left: 130, right: 22, top: 22, bottom: 22,
        background: '#FFFFFF', borderRadius: 12,
        boxShadow: '0 18px 40px -18px rgba(15,17,21,0.22)',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* tiny browser bar */}
        <div style={{
          height: 22, padding: '0 8px',
          borderBottom: '1px solid rgba(15,17,21,0.06)',
          display: 'flex', alignItems: 'center', gap: 4, background: '#FAFAF8',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 6, background: '#E5E5E0' }} />
          <span style={{ width: 6, height: 6, borderRadius: 6, background: '#E5E5E0' }} />
          <span style={{ width: 6, height: 6, borderRadius: 6, background: '#E5E5E0' }} />
          <div style={{ flex: 1 }} />
          <Pill w={20} h={5} c="rgba(15,17,21,0.12)" />
          <Pill w={10} h={5} c="rgba(15,17,21,0.12)" />
        </div>

        {/* page */}
        <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 8, position: 'relative' }}>
          {/* hero block — placed */}
          <div style={{
            background: INK, borderRadius: 8, padding: 10,
            display: 'flex', flexDirection: 'column', gap: 4,
            position: 'relative',
          }}>
            <Pill w={'60%'} h={6} c="#FFFFFF" />
            <Pill w={'40%'} h={3} c="rgba(255,255,255,0.5)" />
            <div style={{ marginTop: 4, width: 36, height: 10, background: YELLOW, borderRadius: 4 }} />
          </div>

          {/* second block — placed */}
          <div style={{ display: 'flex', gap: 6 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                flex: 1, height: 36, borderRadius: 6,
                background: 'rgba(15,17,21,0.04)',
                border: '1px solid rgba(15,17,21,0.08)',
                padding: 6, display: 'flex', flexDirection: 'column', gap: 3,
              }}>
                <Pill w={'70%'} h={3} c="rgba(15,17,21,0.45)" />
                <Pill w={'40%'} h={5} c={INK} />
                <div style={{ flex: 1 }} />
                <Pill w={'90%'} h={2} c="rgba(15,17,21,0.20)" />
              </div>
            ))}
          </div>

          {/* dropzone — being dragged into */}
          <div style={{
            position: 'relative',
            height: 50,
            border: `1.5px dashed ${INDIGO}`,
            borderRadius: 8,
            background: 'rgba(99,102,241,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontSize: 9, color: INDIGO_DEEP, fontWeight: 600, letterSpacing: 0.3,
          }}>
            DROP HERE
          </div>

          {/* phantom block being dragged */}
          <div className="dragging" style={{
            position: 'absolute',
            left: '38%', top: '50%',
            width: 110, padding: 8,
            background: '#FFFFFF',
            borderRadius: 6,
            boxShadow: '0 16px 30px -12px rgba(15,17,21,0.35), 0 0 0 1.5px ' + INDIGO,
            display: 'flex', flexDirection: 'column', gap: 4,
            transform: 'rotate(-3deg)',
            zIndex: 5,
          }}>
            <div style={{ display: 'flex', gap: 3 }}>
              <div style={{ width: 16, height: 16, background: 'rgba(99,102,241,0.18)', borderRadius: 2 }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
                <Pill w={'80%'} h={2} c="rgba(15,17,21,0.5)" />
                <Pill w={'50%'} h={2} c="rgba(15,17,21,0.25)" />
              </div>
            </div>
            <Pill w={'100%'} h={2} c="rgba(15,17,21,0.10)" />
            <Pill w={'70%'} h={2} c="rgba(15,17,21,0.10)" />
          </div>

          {/* cursor */}
          <svg className="cursor" style={{
            position: 'absolute', left: '52%', top: '60%',
            width: 16, height: 18, zIndex: 6,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
          }} viewBox="0 0 16 18">
            <path d="M1 1 L1 14 L5 11 L8 17 L10 16 L7 10 L13 10 Z" fill={INK} stroke="#FFFFFF" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0) rotate(-3deg); }
          50% { transform: translate(-6px, -3px) rotate(-4deg); }
          100% { transform: translate(0, 0) rotate(-3deg); }
        }
        .dragging { animation: drift 2.4s ease-in-out infinite; }
        @keyframes nudge {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-3px, -2px); }
        }
        .cursor { animation: nudge 2.4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

/* ---------- VARIATION 3 — Grow/Black: cascading panels (agent at work) ---------- */

function CascadingAgent() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#15171C',
      position: 'relative',
      overflow: 'hidden',
      padding: 28,
    }}>
      {/* glow */}
      <div style={{
        position: 'absolute', left: '20%', top: '-20%',
        width: '70%', height: '70%',
        background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />

      {/* agent log card — back */}
      <div style={{
        position: 'absolute', left: 22, top: 28,
        width: '46%', height: '60%',
        background: '#1B1E25',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)',
        padding: 12, display: 'flex', flexDirection: 'column', gap: 8,
        zIndex: 1,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 6, background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
          <span style={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 9, color: 'rgba(255,255,255,0.7)', letterSpacing: 0.5, fontWeight: 600,
          }}>AGENT · BUILDING</span>
          <div style={{ flex: 1 }} />
          <Pill w={20} h={4} c="rgba(255,255,255,0.15)" />
        </div>

        {[
          { ic: '✓', t: 'Analyzed 6 competitor sites', dim: false },
          { ic: '✓', t: 'Generated brand palette', dim: false },
          { ic: '✓', t: 'Wrote 4 page sections', dim: false },
          { ic: '◐', t: 'Optimizing images…', dim: false, active: true },
          { ic: '○', t: 'Wiring contact form', dim: true },
          { ic: '○', t: 'Publishing to domain', dim: true },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            opacity: row.dim ? 0.4 : 1,
          }}>
            <span style={{
              width: 14, height: 14, borderRadius: 14,
              background: row.active ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 8, color: row.active ? INDIGO : 'rgba(255,255,255,0.6)',
              fontFamily: 'ui-monospace, monospace',
            }} className={row.active ? 'spin' : ''}>{row.ic}</span>
            <span style={{
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 10, color: 'rgba(255,255,255,0.85)',
              letterSpacing: -0.1,
            }}>{row.t}</span>
            {row.active && (
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                <span className="dot" style={{ width: 3, height: 3, borderRadius: 3, background: INDIGO }} />
                <span className="dot" style={{ width: 3, height: 3, borderRadius: 3, background: INDIGO, animationDelay: '0.2s' }} />
                <span className="dot" style={{ width: 3, height: 3, borderRadius: 3, background: INDIGO, animationDelay: '0.4s' }} />
              </div>
            )}
          </div>
        ))}

        {/* progress */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: 8, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.3,
            }}>ETA 2 min</span>
            <span style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: 8, color: 'rgba(255,255,255,0.5)',
            }}>62%</span>
          </div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
            <div className="progress" style={{ height: '100%', width: '62%', background: INDIGO }} />
          </div>
        </div>
      </div>

      {/* code panel — middle */}
      <div style={{
        position: 'absolute', left: '28%', top: '22%',
        width: '50%', height: '54%',
        background: '#0F1115',
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7)',
        padding: 12,
        display: 'flex', flexDirection: 'column', gap: 5,
        zIndex: 2, overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: 8, color: 'rgba(255,255,255,0.4)',
          }}>index.html</span>
        </div>
        {[
          { i: 1, parts: [['<', 'rgba(255,255,255,0.4)'], ['section ', '#F472B6'], ['class', '#A78BFA'], ['=', 'rgba(255,255,255,0.4)'], ['"hero"', '#FBBF24'], ['>', 'rgba(255,255,255,0.4)']] },
          { i: 2, parts: [['  <', 'rgba(255,255,255,0.4)'], ['h1', '#F472B6'], ['>', 'rgba(255,255,255,0.4)'], ['Welcome.', '#E5E7EB']] },
          { i: 3, parts: [['  <', 'rgba(255,255,255,0.4)'], ['p', '#F472B6'], ['>', 'rgba(255,255,255,0.4)'], ['Book a visit', '#E5E7EB']] },
          { i: 4, parts: [['  <', 'rgba(255,255,255,0.4)'], ['button', '#F472B6'], ['>', 'rgba(255,255,255,0.4)'], ['Schedule', '#E5E7EB']] },
          { i: 5, parts: [['</', 'rgba(255,255,255,0.4)'], ['section', '#F472B6'], ['>', 'rgba(255,255,255,0.4)']] },
          { i: 6, parts: [['', '']] },
          { i: 7, parts: [['<', 'rgba(255,255,255,0.4)'], ['section ', '#F472B6'], ['class', '#A78BFA'], ['=', 'rgba(255,255,255,0.4)'], ['"team"', '#FBBF24'], ['>', 'rgba(255,255,255,0.4)']] },
        ].map((row) => (
          <div key={row.i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'ui-monospace, monospace', fontSize: 8,
              color: 'rgba(255,255,255,0.25)', width: 10, textAlign: 'right',
            }}>{row.i}</span>
            <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9 }}>
              {row.parts.map(([t, c], i) => <span key={i} style={{ color: c }}>{t}</span>)}
            </span>
          </div>
        ))}
        {/* writing line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 8,
            color: 'rgba(255,255,255,0.25)', width: 10, textAlign: 'right',
          }}>8</span>
          <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 9, color: '#E5E7EB' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'  <'}</span>
            <span style={{ color: '#F472B6' }}>h2</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'>'}</span>
            <span>Meet&nbsp;</span>
            <span className="caret2" style={{
              display: 'inline-block', width: 1, height: 9,
              background: YELLOW, verticalAlign: -1,
            }} />
          </span>
        </div>
      </div>

      {/* preview card — front */}
      <div style={{
        position: 'absolute', right: 22, bottom: 24,
        width: '42%', height: '54%',
        zIndex: 3,
      }}>
        <Browser dark>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 6,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: YELLOW }} />
              <Pill w={32} h={5} c="rgba(255,255,255,0.6)" />
              <div style={{ flex: 1 }} />
              <Pill w={14} h={4} c="rgba(255,255,255,0.2)" />
              <Pill w={14} h={4} c="rgba(255,255,255,0.2)" />
            </div>
            <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
              <Pill w={'70%'} h={8} c="#FFFFFF" />
              <Pill w={'50%'} h={8} c="#FFFFFF" />
              <div style={{ height: 4 }} />
              <Pill w={'90%'} h={3} c="rgba(255,255,255,0.4)" />
              <Pill w={'80%'} h={3} c="rgba(255,255,255,0.4)" />
              <div style={{
                marginTop: 6, width: 50, height: 14, borderRadius: 7,
                background: YELLOW,
              }} />
              <div style={{
                marginTop: 'auto',
                height: 28, borderRadius: 5,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(99,102,241,0.15))',
              }} />
            </div>
          </div>
        </Browser>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1.4s linear infinite; }
        @keyframes blink2 { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        .caret2 { animation: blink2 0.8s steps(1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.3 } 50% { opacity: 1 } }
        .dot { animation: pulse 1.2s ease-in-out infinite; }
        @keyframes grow { from { width: 58% } to { width: 66% } }
        .progress { animation: grow 2.4s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
}

/* ---------- VARIATION 4 — Multi-device preview (yellow accent) ---------- */

function MultiDevice() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: PAPER,
      position: 'relative',
      overflow: 'hidden',
      padding: 32,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* yellow halo */}
      <div style={{
        position: 'absolute', right: '-15%', bottom: '-25%',
        width: '70%', height: '70%',
        background: 'radial-gradient(closest-side, rgba(255,225,90,0.55), transparent)',
        filter: 'blur(10px)',
      }} />

      {/* desktop browser back */}
      <div style={{
        position: 'absolute',
        left: 28, top: 28,
        width: '72%', height: '72%',
        zIndex: 1,
      }}>
        <Browser>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid rgba(15,17,21,0.06)',
            }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: INK, color: YELLOW, fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>★</div>
              <Pill w={30} h={6} c={INK} />
              <div style={{ flex: 1 }} />
              <Pill w={20} h={5} />
              <Pill w={20} h={5} />
              <Pill w={20} h={5} />
              <div style={{ height: 14, padding: '0 8px', borderRadius: 7, background: YELLOW, display: 'flex', alignItems: 'center' }}>
                <Pill w={20} h={4} c={INK} />
              </div>
            </div>
            {/* hero with image grid */}
            <div style={{ padding: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
                <Pill w={'90%'} h={11} c={INK} r={3} />
                <Pill w={'70%'} h={11} c={INK} r={3} />
                <div style={{ height: 4 }} />
                <Pill w={'95%'} h={3} c="rgba(15,17,21,0.4)" r={2} />
                <Pill w={'85%'} h={3} c="rgba(15,17,21,0.4)" r={2} />
                <Pill w={'70%'} h={3} c="rgba(15,17,21,0.4)" r={2} />
                <div style={{ height: 4 }} />
                <div style={{ display: 'flex', gap: 4 }}>
                  <div style={{ width: 50, height: 14, borderRadius: 7, background: INK }} />
                  <div style={{ width: 40, height: 14, borderRadius: 7, border: '1px solid rgba(15,17,21,0.2)' }} />
                </div>
              </div>
              <div style={{
                borderRadius: 8,
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 6px, rgba(255,255,255,0.08) 6px 7px)',
                }} />
                <div style={{
                  position: 'absolute', right: 8, bottom: 8,
                  width: 22, height: 22, borderRadius: 22, background: YELLOW,
                }} />
              </div>
            </div>
          </div>
        </Browser>
      </div>

      {/* tablet — middle */}
      <div style={{
        position: 'absolute',
        right: '14%', bottom: '14%',
        width: '34%', height: '52%',
        background: '#FFFFFF',
        borderRadius: 14,
        border: '1px solid rgba(15,17,21,0.10)',
        boxShadow: '0 30px 50px -20px rgba(15,17,21,0.3)',
        padding: 8,
        zIndex: 2,
        transform: 'rotate(-2deg)',
      }}>
        <div style={{
          height: '100%', borderRadius: 8,
          background: '#FAFAF8',
          border: '1px solid rgba(15,17,21,0.06)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          <div style={{
            padding: '6px 8px', display: 'flex', alignItems: 'center', gap: 4,
            borderBottom: '1px solid rgba(15,17,21,0.06)',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: INK, color: YELLOW, fontSize: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>★</div>
            <Pill w={20} h={4} c={INK} />
            <div style={{ flex: 1 }} />
            <Pill w={10} h={3} />
            <Pill w={10} h={3} />
          </div>
          <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
            <Pill w={'80%'} h={7} c={INK} />
            <Pill w={'60%'} h={7} c={INK} />
            <div style={{ height: 2 }} />
            <Pill w={'90%'} h={2.5} c="rgba(15,17,21,0.4)" />
            <Pill w={'75%'} h={2.5} c="rgba(15,17,21,0.4)" />
            <div style={{ height: 2 }} />
            <div style={{ width: 36, height: 10, borderRadius: 5, background: YELLOW }} />
            <div style={{ flex: 1 }} />
            <div style={{
              height: 30, borderRadius: 5,
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            }} />
          </div>
        </div>
      </div>

      {/* phone — front, smallest */}
      <div style={{
        position: 'absolute',
        right: 36, top: '38%',
        width: 90, height: 168,
        background: INK,
        borderRadius: 14,
        boxShadow: '0 30px 50px -16px rgba(15,17,21,0.4)',
        padding: 4,
        zIndex: 3,
        transform: 'rotate(4deg)',
      }}>
        <div style={{
          width: '100%', height: '100%',
          background: '#FFFFFF',
          borderRadius: 11,
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          position: 'relative',
        }}>
          {/* notch */}
          <div style={{
            position: 'absolute', left: '50%', top: 4,
            transform: 'translateX(-50%)',
            width: 24, height: 4, borderRadius: 4, background: INK, zIndex: 2,
          }} />
          <div style={{
            padding: '12px 8px 6px', display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: INK, color: YELLOW, fontSize: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>★</div>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Pill w={9} h={1.2} />
              <Pill w={9} h={1.2} />
              <Pill w={9} h={1.2} />
            </div>
          </div>
          <div style={{ padding: '4px 8px', display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
            <Pill w={'85%'} h={6} c={INK} />
            <Pill w={'65%'} h={6} c={INK} />
            <div style={{ height: 2 }} />
            <Pill w={'95%'} h={2} c="rgba(15,17,21,0.4)" />
            <Pill w={'80%'} h={2} c="rgba(15,17,21,0.4)" />
            <Pill w={'60%'} h={2} c="rgba(15,17,21,0.4)" />
            <div style={{ height: 2 }} />
            <div style={{ width: 38, height: 10, borderRadius: 5, background: YELLOW }} />
            <div style={{ flex: 1 }} />
            <div style={{
              height: 40, borderRadius: 5,
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', right: 4, bottom: 4,
                width: 8, height: 8, borderRadius: 8, background: YELLOW,
              }} />
            </div>
            <div style={{ height: 8 }} />
          </div>
        </div>
      </div>

      {/* responsive label badge */}
      <div style={{
        position: 'absolute', left: 36, bottom: 24,
        background: INK, color: '#FFFFFF',
        padding: '5px 9px', borderRadius: 6,
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        fontSize: 9, fontWeight: 600, letterSpacing: 0.5,
        display: 'flex', alignItems: 'center', gap: 6,
        zIndex: 4,
        boxShadow: '0 8px 20px -8px rgba(15,17,21,0.4)',
      }}>
        <span style={{ width: 5, height: 5, borderRadius: 5, background: '#22C55E' }} />
        ONE SITE · ANY SCREEN
      </div>
    </div>
  );
}

Object.assign(window, { PromptToSite, DragAndDrop, CascadingAgent, MultiDevice });

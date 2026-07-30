/* @ds-bundle: {"format":3,"namespace":"EsteemedDesignSystem_da20ab","components":[{"name":"Avatar","sourcePath":"components/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge.jsx"},{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/Eyebrow.jsx"}],"sourceHashes":{"components/Avatar.jsx":"1fc2bbca1ebf","components/Badge.jsx":"9433fcea54cf","components/Button.jsx":"692d6678fc59","components/Eyebrow.jsx":"c1c61c3f679b","ui_kits/colleagues-app/FeedView.jsx":"3961208f7e77","ui_kits/colleagues-app/JobsView.jsx":"c638f5c83ddc","ui_kits/colleagues-app/MessagesView.jsx":"5c9984544cdc","ui_kits/colleagues-app/ProfileView.jsx":"2ef508a08d71","ui_kits/colleagues-app/Sidebar.jsx":"7736a574e908","ui_kits/colleagues-app/TopBar.jsx":"364a6d5c0567","ui_kits/marketing-site/CtaFooter.jsx":"384e97fd5e12","ui_kits/marketing-site/FeatureStack.jsx":"1a069e63d6e8","ui_kits/marketing-site/Hero.jsx":"dcd4042b1124","ui_kits/marketing-site/Nav.jsx":"6aef5aee44f4","ui_kits/marketing-site/ProductsGrid.jsx":"bb069aed534e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EsteemedDesignSystem_da20ab = window.EsteemedDesignSystem_da20ab || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Avatar.jsx
try { (() => {
const STAR = "M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z";

/** Colleague avatar with optional gold-star verification badge. */
function Avatar({
  initials,
  color,
  verified = false,
  size = 40
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: color || 'var(--es-yellow-500, #FEE546)',
      color: color ? '#fff' : 'var(--es-ink-1000, #0A0A0A)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontFamily: 'var(--es-font-sans, sans-serif)',
      fontSize: Math.round(size * 0.36),
      position: 'relative',
      flexShrink: 0
    }
  }, initials, verified && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -2,
      right: -2,
      width: size * 0.42,
      height: size * 0.42,
      background: 'var(--es-yellow-500, #FEE546)',
      borderRadius: '50%',
      border: '2px solid #fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.22,
    height: size * 0.22,
    viewBox: "0 0 268 268",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR,
    fill: "#fff"
  }))));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/Badge.jsx
try { (() => {
const STAR = "M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z";

/** Esteemed status badge / pill. */
function Badge({
  tone = 'default',
  star = false,
  dot = false,
  children,
  style
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '5px 12px',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'var(--es-font-sans, sans-serif)',
    border: '1px solid transparent'
  };
  const tones = {
    default: {
      background: '#fff',
      borderColor: 'var(--es-border, #E9E7DF)',
      color: 'var(--es-fg-1, #111)'
    },
    yellow: {
      background: 'var(--es-yellow-500, #FEE546)',
      color: 'var(--es-ink-1000, #0A0A0A)'
    },
    ink: {
      background: 'var(--es-ink-900, #111)',
      color: '#fff'
    },
    sky: {
      background: 'var(--es-sky-300, #BFDBFE)',
      color: 'var(--es-ink-1000, #0A0A0A)'
    },
    success: {
      background: 'var(--es-success-bg, #E4F4EC)',
      color: 'var(--es-success, #1F8A5B)'
    },
    warning: {
      background: 'var(--es-warning-bg, #FBF1DD)',
      color: '#946312'
    },
    danger: {
      background: 'var(--es-danger-bg, #FBE5E1)',
      color: '#9A2715'
    },
    info: {
      background: 'var(--es-info-bg, #E2ECFA)',
      color: 'var(--es-info, #2A6FDB)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...tones[tone],
      ...style
    }
  }, star && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 268 268",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR,
    fill: "currentColor"
  })), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Esteemed primary action button. Pill-shaped; yellow / ink / ghost / link variants.
 */
function Button({
  variant = 'primary',
  size = 'md',
  leading,
  trailing,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 999,
    fontWeight: 700,
    fontFamily: 'var(--es-font-sans, sans-serif)',
    letterSpacing: '-.005em',
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'transform 120ms cubic-bezier(0.22,1,0.36,1), background 120ms'
  };
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 13
    },
    md: {
      padding: '12px 22px',
      fontSize: 15
    },
    lg: {
      padding: '16px 28px',
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: 'var(--es-yellow-500, #FEE546)',
      color: 'var(--es-ink-1000, #0A0A0A)'
    },
    secondary: {
      background: 'var(--es-ink-900, #111)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      borderColor: 'var(--es-border-strong, #D7D4C8)',
      color: 'var(--es-ink-900, #111)'
    },
    link: {
      background: 'transparent',
      color: 'var(--es-ink-900, #111)',
      textDecoration: 'underline',
      textDecorationColor: 'var(--es-yellow-500, #FEE546)',
      textDecorationThickness: 2,
      textUnderlineOffset: 4,
      padding: '6px 4px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), leading, children, trailing);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Eyebrow.jsx
try { (() => {
const STAR = "M133.5 38L164.228 100.683L233 111.008L183.25 159.68L194.956 229L133.5 196.552L72.0441 229L83.75 159.68L34 111.008L102.772 100.683L133.5 38Z";

/** Eyebrow / kicker label — uppercase, tracked, with optional gold star. */
function Eyebrow({
  star = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--es-font-sans, sans-serif)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--es-warm-600, #65615A)',
      ...style
    }
  }, star && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 268 268",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR,
    fill: "var(--es-yellow-700, #B89D1F)"
  })), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/colleagues-app/FeedView.jsx
try { (() => {
// Colleagues app — Feed view (composer + cards)

const Composer = () => {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 14,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AR",
    verified: true,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Share an opportunity, ask Colleagues for advice\u2026",
    onFocus: () => setOpen(true),
    style: {
      width: '100%',
      border: '1px solid var(--es-border)',
      borderRadius: 12,
      padding: '10px 14px',
      fontFamily: 'inherit',
      fontSize: 14,
      resize: 'none',
      minHeight: open ? 80 : 38,
      outline: 'none',
      background: 'var(--es-warm-50)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "default"
  }, "\uD83C\uDFF7\uFE0F Topic"), /*#__PURE__*/React.createElement(Pill, {
    tone: "default"
  }, "\uD83D\uDCCD Location"), /*#__PURE__*/React.createElement(Pill, {
    tone: "default"
  }, "\uD83D\uDCBC Job"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    style: {
      marginLeft: 'auto'
    }
  }, "Post")))));
};
const FilterBar = () => {
  const [active, setActive] = React.useState('All');
  const filters = ['All', 'Jobs', 'Gigs', 'People', 'Events', 'Career advice'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setActive(f),
    style: {
      padding: '8px 16px',
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: 13,
      background: active === f ? 'var(--es-ink-900)' : '#fff',
      color: active === f ? '#fff' : 'var(--es-fg-1)',
      borderTop: '1px solid var(--es-border)',
      borderBottom: '1px solid var(--es-border)',
      borderLeft: '1px solid var(--es-border)',
      borderRight: '1px solid var(--es-border)',
      borderColor: active === f ? 'transparent' : 'var(--es-border)',
      whiteSpace: 'nowrap'
    }
  }, f)));
};
const JobPostCard = ({
  post
}) => /*#__PURE__*/React.createElement("div", {
  className: "card card-hover",
  style: {
    marginBottom: 12,
    padding: 18
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: post.initials,
  color: post.color,
  size: 42
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    fontWeight: 700
  }
}, post.poster), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--es-warm-600)'
  }
}, post.role, " \xB7 ", post.time)), /*#__PURE__*/React.createElement(Pill, {
  tone: "yellow"
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 10,
  fill: "currentColor"
}), "Hiring")), /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: '0 0 6px',
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: '-.01em'
  }
}, post.title), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: '0 0 14px',
    fontSize: 14,
    lineHeight: 1.5,
    color: 'var(--es-fg-2)'
  }
}, post.body), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 6,
    marginBottom: 14,
    flexWrap: 'wrap'
  }
}, post.tags.map(t => /*#__PURE__*/React.createElement(Pill, {
  key: t
}, t))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    paddingTop: 12,
    borderTop: '1px solid var(--es-divider)'
  }
}, /*#__PURE__*/React.createElement("button", {
  style: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 10px',
    borderRadius: 8,
    color: 'var(--es-fg-2)',
    fontSize: 13,
    fontWeight: 600
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 16
}), " Apply"), /*#__PURE__*/React.createElement("button", {
  style: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 10px',
    borderRadius: 8,
    color: 'var(--es-fg-2)',
    fontSize: 13,
    fontWeight: 600
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "bookmark",
  size: 16
}), " Save"), /*#__PURE__*/React.createElement("button", {
  style: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 10px',
    borderRadius: 8,
    color: 'var(--es-fg-2)',
    fontSize: 13,
    fontWeight: 600
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "message",
  size: 16
}), " Refer"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginLeft: 'auto',
    fontSize: 12,
    color: 'var(--es-warm-600)'
  }
}, post.applicants, " applied \xB7 ", post.referrals, " referrals")));
const SocialPostCard = ({
  post
}) => /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    marginBottom: 12,
    padding: 18
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: post.initials,
  color: post.color,
  size: 42
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    fontWeight: 700
  }
}, post.poster), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--es-warm-600)'
  }
}, post.role, " \xB7 ", post.time)), /*#__PURE__*/React.createElement(Pill, {
  tone: "info"
}, post.tag)), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: '0 0 12px',
    fontSize: 14,
    lineHeight: 1.55,
    color: 'var(--es-fg-1)'
  }
}, post.body), post.stat && /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--es-yellow-500)',
    borderRadius: 14,
    padding: '16px 20px',
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 28
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: '-.02em'
  }
}, post.stat.v), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    fontWeight: 600
  }
}, post.stat.l))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 14,
    fontSize: 12,
    color: 'var(--es-warm-600)'
  }
}, /*#__PURE__*/React.createElement("span", null, post.likes, " \u2605"), /*#__PURE__*/React.createElement("span", null, post.replies, " replies")));
const RightRail = () => /*#__PURE__*/React.createElement("aside", {
  style: {
    width: 300,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 18
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "\u2605 Trending"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: 'none',
    padding: 0,
    margin: '12px 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, [{
  t: 'Drupal 11 migrations',
  n: '128 posts'
}, {
  t: 'AI-driven RPO',
  n: '94 posts'
}, {
  t: 'Working from Lisbon',
  n: '52 posts'
}, {
  t: 'Headless CMS gigs',
  n: '37 posts'
}].map(x => /*#__PURE__*/React.createElement("li", {
  key: x.t,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 12,
  fill: "#B89D1F"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    fontSize: 13,
    fontWeight: 600
  }
}, x.t), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--es-warm-600)'
  }
}, x.n))))), /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 18,
    background: 'var(--es-ink-900)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -30,
    bottom: -30,
    opacity: .14
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 140,
  fill: "#FEE546"
})), /*#__PURE__*/React.createElement(Eyebrow, {
  star: false
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--es-yellow-500)'
  }
}, "\u2605 Esteemed AI")), /*#__PURE__*/React.createElement("h4", {
  style: {
    margin: '8px 0 6px',
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: '-.01em'
  }
}, "Match me to a gig"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: '0 0 14px',
    fontSize: 13,
    color: 'rgba(255,255,255,.7)',
    lineHeight: 1.5,
    position: 'relative',
    zIndex: 2
  }
}, "The coherence engine reads your profile and surfaces 5 best-fit roles this week."), /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "sm",
  trailing: /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 12
  })
}, "Run match")), /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 18
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "\u2605 Suggested Colleagues"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 12
  }
}, [{
  i: 'MO',
  n: 'Maya Obi',
  m: 'Talent Specialist · Lagos',
  c: '#0E5A3A'
}, {
  i: 'JK',
  n: 'Jamal Khan',
  m: 'React / Headless · Toronto',
  c: '#2A6FDB'
}, {
  i: 'TS',
  n: 'Tara Sing',
  m: 'PM · Mumbai',
  c: '#C8341F'
}].map(p => /*#__PURE__*/React.createElement("div", {
  key: p.n,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  initials: p.i,
  color: p.c,
  size: 36
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 700
  }
}, p.n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--es-warm-600)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}, p.m)), /*#__PURE__*/React.createElement("button", {
  style: {
    padding: '4px 10px',
    borderRadius: 999,
    border: '1px solid var(--es-border-strong)',
    background: '#fff',
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer'
  }
}, "Follow"))))));
const FeedView = () => {
  const posts = [{
    kind: 'job',
    poster: 'Acme Foundation',
    initials: 'AF',
    color: '#1F8A5B',
    role: 'Acme · via Esteemed Hire',
    time: '2h',
    title: 'Senior Drupal Developer — Remote (EU)',
    body: 'Leading the modernization of our Drupal 10 stack to a headless React frontend. 5+ years Drupal, strong PHP and JS. €120–160k.',
    tags: ['Drupal 10', 'React', 'Headless', 'Remote — EU'],
    applicants: 47,
    referrals: 12
  }, {
    kind: 'social',
    poster: 'Maya Obi',
    initials: 'MO',
    color: '#0E5A3A',
    role: 'Talent Specialist · Esteemed',
    time: '5h',
    tag: 'Career advice',
    body: 'A quick reminder that referrals through Colleagues skip the cold-pipeline review entirely — they land directly with the hiring team. If you know someone great, send them my way before the slot closes Friday.',
    likes: 84,
    replies: 21
  }, {
    kind: 'job',
    poster: 'Northwind Health',
    initials: 'NH',
    color: '#2A6FDB',
    role: 'via Esteemed Talent · Sourced by Aura',
    time: 'Yesterday',
    title: 'Lead Product Designer — Hybrid (NYC)',
    body: 'Patient-facing product for a 1,200-clinic network. Looking for a senior IC who can both ship and mentor a team of 4.',
    tags: ['Product Design', 'Figma', 'Healthcare', 'Hybrid — NYC'],
    applicants: 92,
    referrals: 6
  }, {
    kind: 'social',
    poster: 'Esteemed',
    initials: 'ES',
    color: '#0A0A0A',
    role: 'Official',
    time: 'Yesterday',
    tag: 'Announcement',
    body: 'Customers running Esteemed Hire alongside the Colleagues network reported a 4× lift in qualified candidates this quarter.',
    stat: {
      v: '80%',
      l: 'Median time-to-hire reduction (Q1)'
    },
    likes: 312,
    replies: 48
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 24,
      padding: '24px 28px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Composer, null), /*#__PURE__*/React.createElement(FilterBar, null), posts.map((p, i) => p.kind === 'job' ? /*#__PURE__*/React.createElement(JobPostCard, {
    key: i,
    post: p
  }) : /*#__PURE__*/React.createElement(SocialPostCard, {
    key: i,
    post: p
  }))), /*#__PURE__*/React.createElement(RightRail, null));
};
window.FeedView = FeedView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/colleagues-app/FeedView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/colleagues-app/JobsView.jsx
try { (() => {
// Colleagues app — Jobs board view

const JobsView = () => {
  const jobs = [{
    co: 'Acme Foundation',
    logo: 'AF',
    logoColor: '#1F8A5B',
    title: 'Senior Drupal Developer',
    loc: 'Remote — EU',
    pay: '€120–160k',
    type: 'Contract',
    star: true,
    skills: ['Drupal 10', 'PHP', 'Headless'],
    match: 96,
    time: '2h'
  }, {
    co: 'Northwind Health',
    logo: 'NH',
    logoColor: '#2A6FDB',
    title: 'Lead Product Designer',
    loc: 'New York · Hybrid',
    pay: '$170–210k',
    type: 'Full-time',
    skills: ['Figma', 'Healthcare', 'Design Systems'],
    match: 88,
    time: '1d'
  }, {
    co: 'Vega Robotics',
    logo: 'VR',
    logoColor: '#C8341F',
    title: 'Front-end Engineer — React',
    loc: 'Remote — Global',
    pay: '$95–135k',
    type: 'Contract',
    skills: ['React', 'TypeScript', 'Headless'],
    match: 82,
    time: '1d'
  }, {
    co: 'Bluepeak Capital',
    logo: 'BP',
    logoColor: '#0A0A0A',
    title: 'HR Tech Program Manager',
    loc: 'Chicago',
    pay: '$140–170k',
    type: 'Full-time',
    skills: ['HR Tech', 'Workday', 'Stakeholder mgmt'],
    match: 74,
    time: '2d'
  }, {
    co: 'Olympia Studios',
    logo: 'OS',
    logoColor: '#B89D1F',
    title: 'Senior Content Strategist',
    loc: 'Remote — Americas',
    pay: '$110–140k',
    type: 'Contract',
    star: true,
    skills: ['Content Strategy', 'B2B'],
    match: 71,
    time: '3d'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 24,
      padding: '24px 28px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    className: "card",
    style: {
      padding: 18,
      position: 'sticky',
      top: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Filter"), [{
    h: 'Type',
    opts: ['Full-time', 'Contract', 'Gig', 'Contract-to-hire']
  }, {
    h: 'Location',
    opts: ['Remote', 'Hybrid', 'On-site']
  }, {
    h: 'Pay (USD)',
    opts: ['$50–100k', '$100–150k', '$150–200k', '$200k+']
  }].map(g => /*#__PURE__*/React.createElement("div", {
    key: g.h,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--es-warm-600)',
      marginBottom: 8
    }
  }, g.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, g.opts.map(o => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      accentColor: 'var(--es-yellow-600)'
    }
  }), o)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 14,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--es-fg-2)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--es-ink-900)'
    }
  }, "1,240"), " open roles \xB7 sorted by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--es-ink-900)'
    }
  }, "AI match")), /*#__PURE__*/React.createElement(Pill, {
    tone: "yellow"
  }, /*#__PURE__*/React.createElement(EsStar, {
    size: 10
  }), "Sourced from Aura"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    style: {
      marginLeft: 'auto'
    },
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 12
    })
  }, "AI Match")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, jobs.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card card-hover",
    style: {
      padding: 18,
      display: 'grid',
      gridTemplateColumns: '48px 1fr auto',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: j.logoColor,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 14
    }
  }, j.logo), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, j.title), j.star && /*#__PURE__*/React.createElement(EsStar, {
    size: 14,
    fill: "#B89D1F"
  }), /*#__PURE__*/React.createElement(Pill, {
    tone: "default"
  }, j.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--es-fg-2)',
      marginBottom: 6
    }
  }, j.co, " \xB7 ", j.loc, " \xB7 ", j.pay, " \xB7 ", j.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, j.skills.map(s => /*#__PURE__*/React.createElement(Pill, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: j.match >= 90 ? 'var(--es-yellow-500)' : 'var(--es-warm-100)',
      color: j.match >= 90 ? 'var(--es-ink-1000)' : 'var(--es-fg-1)',
      padding: '4px 10px',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 700
    }
  }, j.match, "% match"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Apply")))))));
};
window.JobsView = JobsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/colleagues-app/JobsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/colleagues-app/MessagesView.jsx
try { (() => {
// Colleagues app — Messages (incl. an Esteemed AI agent conversation)

const MessagesView = () => {
  const threads = [{
    i: 'MO',
    n: 'Maya Obi',
    m: 'Sent you a referral for Acme',
    c: '#0E5A3A',
    t: '2m',
    unread: true,
    active: false
  }, {
    i: 'ES',
    n: 'Esteemed AI',
    m: '5 new matches this week',
    c: '#0A0A0A',
    t: '1h',
    unread: true,
    active: true,
    ai: true
  }, {
    i: 'AF',
    n: 'Acme Foundation',
    m: 'Phone screen scheduled for Th…',
    c: '#1F8A5B',
    t: '3h',
    unread: false,
    active: false
  }, {
    i: 'JK',
    n: 'Jamal Khan',
    m: 'Ha, yeah Drupalcon was wild',
    c: '#2A6FDB',
    t: '1d',
    unread: false,
    active: false
  }, {
    i: 'NH',
    n: 'Northwind Health',
    m: 'We loved your portfolio!',
    c: '#2A6FDB',
    t: '2d',
    unread: false,
    active: false
  }];
  const messages = [{
    from: 'ai',
    t: 'Morning, Alex. I scanned 312 new postings on Aura overnight and matched 5 to your profile. Want a summary?'
  }, {
    from: 'me',
    t: 'Yes please — and only EU remote.'
  }, {
    from: 'ai',
    t: 'Filtering. Three high-confidence fits:',
    card: {
      kind: 'matches',
      items: [{
        co: 'Acme Foundation',
        role: 'Senior Drupal Dev',
        match: 96,
        pay: '€140k'
      }, {
        co: 'Vega Robotics',
        role: 'FE Engineer — React',
        match: 88,
        pay: '€110k'
      }, {
        co: 'Olympia Studios',
        role: 'Senior Content Strategist',
        match: 81,
        pay: '€95k'
      }]
    }
  }, {
    from: 'me',
    t: 'Submit me to Acme. Pull last week\'s outreach email as a template.'
  }, {
    from: 'ai',
    t: 'Drafted. Submission ready for your approval — Maya Obi is the in-network Talent Specialist for this role.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      height: 'calc(100vh - 72px)',
      borderTop: '1px solid var(--es-border)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: '1px solid var(--es-border)',
      background: '#fff',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderBottom: '1px solid var(--es-divider)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Search messages...",
    style: {
      background: 'var(--es-warm-100)',
      borderColor: 'transparent',
      borderRadius: 999
    }
  })), threads.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.i,
    style: {
      width: '100%',
      padding: '14px 16px',
      border: 'none',
      borderBottom: '1px solid var(--es-divider)',
      background: t.active ? 'var(--es-warm-100)' : '#fff',
      display: 'flex',
      gap: 12,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: t.i,
    color: t.c,
    size: 42
  }), t.ai && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -2,
      right: -2,
      width: 16,
      height: 16,
      background: 'var(--es-yellow-500)',
      borderRadius: '50%',
      border: '2px solid #fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(EsStar, {
    size: 8,
    fill: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--es-warm-600)'
    }
  }, t.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: t.unread ? 'var(--es-fg-1)' : 'var(--es-fg-2)',
      fontWeight: t.unread ? 600 : 400,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, t.m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--es-warm-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      background: '#fff',
      borderBottom: '1px solid var(--es-divider)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "ES",
    color: "#0A0A0A",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Esteemed AI ", /*#__PURE__*/React.createElement(Pill, {
    tone: "yellow"
  }, /*#__PURE__*/React.createElement(EsStar, {
    size: 10
  }), "Agent")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--es-warm-600)'
    }
  }, "Coherence engine \xB7 responds within seconds"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderRadius: 18,
      background: m.from === 'me' ? 'var(--es-yellow-500)' : '#fff',
      color: m.from === 'me' ? 'var(--es-ink-1000)' : 'var(--es-fg-1)',
      border: m.from === 'me' ? 'none' : '1px solid var(--es-border)',
      fontSize: 14,
      lineHeight: 1.5,
      borderBottomRightRadius: m.from === 'me' ? 6 : 18,
      borderBottomLeftRadius: m.from !== 'me' ? 6 : 18
    }
  }, m.t), m.card && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      background: '#fff',
      borderRadius: 14,
      border: '1px solid var(--es-border)',
      overflow: 'hidden'
    }
  }, m.card.items.map((c, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderTop: j ? '1px solid var(--es-divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(EsStar, {
    size: 14,
    fill: "#B89D1F"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, c.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--es-warm-600)'
    }
  }, c.co, " \xB7 ", c.pay)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      background: c.match >= 90 ? 'var(--es-yellow-500)' : 'var(--es-warm-100)',
      color: 'var(--es-ink-1000)',
      padding: '3px 8px',
      borderRadius: 999
    }
  }, c.match, "%")))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      background: '#fff',
      borderTop: '1px solid var(--es-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--es-warm-100)',
      borderRadius: 999,
      padding: '4px 4px 4px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Ask Esteemed AI\u2026",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: 14,
      fontFamily: 'inherit',
      padding: '8px 0'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    trailing: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 12,
      stroke: 2.5
    })
  }, "Send")))));
};
window.MessagesView = MessagesView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/colleagues-app/MessagesView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/colleagues-app/ProfileView.jsx
try { (() => {
// Colleagues app — Profile view (career map + skills)

const ProfileView = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '24px 28px',
    maxWidth: 1080,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 160,
    borderRadius: 24,
    background: 'var(--es-ink-900)',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -40,
    top: -40,
    opacity: .14
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 260,
  fill: "#FEE546"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: 28,
    bottom: -40,
    display: 'flex',
    alignItems: 'flex-end',
    gap: 18
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 96,
    height: 96,
    borderRadius: '50%',
    background: 'var(--es-yellow-500)',
    border: '4px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: 800,
    color: 'var(--es-ink-1000)'
  }
}, "AR"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 30,
    height: 30,
    background: 'var(--es-yellow-500)',
    borderRadius: '50%',
    border: '3px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 14,
  fill: "#fff"
}))))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gap: 24,
    alignItems: 'flex-start'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 24,
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 6
  }
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: 0,
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: '-.02em'
  }
}, "Alex Rivera"), /*#__PURE__*/React.createElement(Pill, {
  tone: "yellow"
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 10
}), "Verified Pro")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 15,
    color: 'var(--es-fg-2)',
    marginBottom: 12
  }
}, "Senior Drupal Developer \xB7 Headless / React \xB7 Lisbon, Portugal"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement(Pill, {
  tone: "success",
  dot: true
}, "Open to roles"), /*#__PURE__*/React.createElement(Pill, null, /*#__PURE__*/React.createElement(Icon, {
  name: "pin",
  size: 11
}), "Remote \u2014 EU"), /*#__PURE__*/React.createElement(Pill, null, "Available in 2 weeks"), /*#__PURE__*/React.createElement(Pill, null, "\u20AC95/hr")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 10
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary"
}, "Connect"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  leading: /*#__PURE__*/React.createElement(Icon, {
    name: "message",
    size: 14
  })
}, "Message"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  leading: /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 14
  })
}, "Save"))), /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 24,
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'var(--es-warm-600)',
    marginBottom: 12
  }
}, "About"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    color: 'var(--es-fg-1)'
  }
}, "Eight years building Drupal-powered platforms for media and education. Lately, leading headless migrations and helping teams ship faster with React + decoupled CMS. Open to fractional CTO and senior IC work.")), /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 24,
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'var(--es-warm-600)',
    marginBottom: 14
  }
}, "Experience"), [{
  co: 'Olympia Studios',
  role: 'Lead Drupal Engineer',
  period: '2023 — present',
  body: 'Headless Drupal 10 platform for 14 publications. React + Next.js frontend.'
}, {
  co: 'Esteemed Talent',
  role: 'Senior Drupal Dev (contract)',
  period: '2021 — 2023',
  body: 'Multiple engagements across enterprise and government clients.'
}, {
  co: 'Pivotpoint',
  role: 'Drupal Developer',
  period: '2017 — 2021',
  body: 'Built and maintained donor portals for 22 non-profits.'
}].map(e => /*#__PURE__*/React.createElement("div", {
  key: e.co,
  style: {
    display: 'grid',
    gridTemplateColumns: '44px 1fr auto',
    gap: 14,
    padding: '14px 0',
    borderTop: '1px solid var(--es-divider)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: 'var(--es-warm-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 800,
    color: 'var(--es-warm-700)'
  }
}, e.co.split(' ').map(w => w[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    fontWeight: 700
  }
}, e.role), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--es-fg-2)'
  }
}, e.co), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--es-fg-2)',
    marginTop: 4,
    lineHeight: 1.45
  }
}, e.body)), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: 'var(--es-warm-600)',
    whiteSpace: 'nowrap'
  }
}, e.period))))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 20
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "\u2605 Skills \xB7 matrix"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 14
  }
}, [{
  s: 'Drupal 10',
  l: 95
}, {
  s: 'PHP',
  l: 88
}, {
  s: 'React',
  l: 78
}, {
  s: 'TypeScript',
  l: 70
}, {
  s: 'Headless CMS',
  l: 90
}].map(k => /*#__PURE__*/React.createElement("div", {
  key: k.s
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 12,
    marginBottom: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 600
  }
}, k.s), /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--es-warm-600)',
    fontFamily: 'var(--es-font-mono)'
  }
}, k.l)), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 6,
    background: 'var(--es-warm-100)',
    borderRadius: 999,
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: `${k.l}%`,
    height: '100%',
    background: 'var(--es-yellow-500)'
  }
})))))), /*#__PURE__*/React.createElement("div", {
  className: "card",
  style: {
    padding: 20,
    background: 'var(--es-ink-900)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -40,
    bottom: -40,
    opacity: .14
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 160,
  fill: "#FEE546"
})), /*#__PURE__*/React.createElement(Eyebrow, {
  star: false
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--es-yellow-500)'
  }
}, "\u2605 Career Journey")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 18,
    fontWeight: 700,
    margin: '10px 0 4px',
    letterSpacing: '-.01em'
  }
}, "Next: Fractional CTO"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'rgba(255,255,255,.7)',
    marginBottom: 14
  }
}, "3 skill gaps \xB7 5 suggested gigs"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    position: 'relative',
    zIndex: 2
  }
}, ['Engineering management', 'Cloud architecture', 'Pricing & SOWs'].map(g => /*#__PURE__*/React.createElement("div", {
  key: g,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    background: 'rgba(255,255,255,.08)',
    borderRadius: 10
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 14,
  stroke: 2.5
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13
  }
}, g)))), /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "sm",
  style: {
    marginTop: 14,
    width: '100%'
  }
}, "Open Career Map")))));
window.ProfileView = ProfileView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/colleagues-app/ProfileView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/colleagues-app/Sidebar.jsx
try { (() => {
// Colleagues app — left sidebar nav

const Sidebar = ({
  active,
  onNav
}) => {
  const items = [{
    id: 'feed',
    label: 'Feed',
    icon: 'home'
  }, {
    id: 'jobs',
    label: 'Jobs & Gigs',
    icon: 'briefcase'
  }, {
    id: 'people',
    label: 'Colleagues',
    icon: 'user'
  }, {
    id: 'messages',
    label: 'Messages',
    icon: 'message',
    badge: 3
  }, {
    id: 'events',
    label: 'Events',
    icon: 'calendar'
  }, {
    id: 'career',
    label: 'Career Map',
    icon: 'chart'
  }, {
    id: 'agent',
    label: 'Esteemed AI',
    icon: 'sparkle',
    pro: true
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      background: '#fff',
      borderRight: '1px solid var(--es-border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px',
      gap: 4,
      position: 'sticky',
      top: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/colleagues-logo.png",
    alt: "Colleagues",
    style: {
      height: 22,
      display: 'block'
    }
  })), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onNav(it.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      border: 'none',
      background: active === it.id ? 'var(--es-ink-900)' : 'transparent',
      color: active === it.id ? '#fff' : 'var(--es-fg-1)',
      borderRadius: 10,
      fontWeight: 600,
      fontSize: 14,
      textAlign: 'left',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--es-yellow-500)',
      color: 'var(--es-ink-1000)',
      fontSize: 11,
      fontWeight: 700,
      padding: '1px 7px',
      borderRadius: 999
    }
  }, it.badge), it.pro && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--es-yellow-500)',
      color: 'var(--es-ink-1000)',
      fontSize: 10,
      fontWeight: 700,
      padding: '1px 6px',
      borderRadius: 999,
      letterSpacing: '.04em'
    }
  }, "NEW"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 14,
      background: 'var(--es-warm-100)',
      borderRadius: 14,
      border: '1px solid var(--es-border)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Upgrade"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      margin: '6px 0 2px',
      letterSpacing: '-.005em'
    }
  }, "Go Pro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--es-fg-2)',
      marginBottom: 10,
      lineHeight: 1.4
    }
  }, "Priority access, AI matching, premium benefits."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    style: {
      width: '100%'
    }
  }, "Upgrade")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 8px 0'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AR",
    verified: true,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "Alex Rivera"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--es-warm-600)'
    }
  }, "Pro \xB7 Lisbon"))));
};
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/colleagues-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/colleagues-app/TopBar.jsx
try { (() => {
// Colleagues app — top app bar (search + actions)

const TopBar = ({
  title
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    background: '#fff',
    borderBottom: '1px solid var(--es-border)',
    padding: '16px 28px',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    position: 'sticky',
    top: 0,
    zIndex: 20
  }
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: '-.015em'
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    maxWidth: 480,
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "search",
  size: 16,
  stroke: 2
}), /*#__PURE__*/React.createElement("input", {
  className: "input",
  placeholder: "Search jobs, Colleagues, gigs...",
  style: {
    paddingLeft: 38,
    background: 'var(--es-warm-100)',
    borderColor: 'transparent',
    borderRadius: 999
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: 'absolute',
    left: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--es-warm-600)',
    pointerEvents: 'none'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "search",
  size: 16,
  stroke: 2
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginLeft: 'auto',
    display: 'flex',
    gap: 10,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("button", {
  style: {
    width: 38,
    height: 38,
    borderRadius: 10,
    border: '1px solid var(--es-border)',
    background: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "bell",
  size: 18
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: 'absolute',
    top: 6,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: 'var(--es-danger)'
  }
})), /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "sm",
  leading: /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    stroke: 2.5
  })
}, "Post")));
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/colleagues-app/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/CtaFooter.jsx
try { (() => {
// Esteemed.io — Final CTA + Footer

const Cta = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '64px 0'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--es-ink-900)',
    borderRadius: 32,
    padding: '72px 56px',
    position: 'relative',
    overflow: 'hidden',
    color: '#fff'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -80,
    top: -80,
    opacity: .12
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 360,
  fill: "#FEE546"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 720
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--es-yellow-500)'
  }
}, "\u2605 Get Started")), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 'clamp(36px, 5vw, 60px)',
    fontWeight: 800,
    letterSpacing: '-.025em',
    lineHeight: 1.05,
    margin: '14px 0 16px'
  }
}, "Find your work family."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 18,
    lineHeight: 1.5,
    color: 'rgba(255,255,255,.7)',
    margin: '0 0 28px',
    maxWidth: 580
  }
}, "Register for Colleagues today and chart your career with Esteemed. Free to join, with 20,000+ peers ready to collaborate."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "lg"
}, "Join Esteemed"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "lg",
  style: {
    borderColor: 'rgba(255,255,255,.2)',
    color: '#fff'
  }
}, "Contact Sales"))))));
const Footer = () => {
  const cols = [{
    h: 'Products',
    items: ['For Hiring', 'For Recruitment', 'For Employee Experience', 'For Career Management', 'For Talent Management']
  }, {
    h: 'Solutions',
    items: ['Small Business', 'Enterprise', 'Agencies', 'Industries']
  }, {
    h: 'Resources',
    items: ['Become a Partner', 'Business Resource Center', 'Career Catalyst Blog', 'Events']
  }, {
    h: 'Company',
    items: ['About Esteemed', 'Newsroom', 'Careers', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#fff',
      borderTop: '1px solid var(--es-border)',
      padding: '64px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 40,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EsWordmark, {
    height: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--es-fg-2)',
      margin: '14px 0 0',
      maxWidth: 280
    }
  }, "Work Smarter. Achieve More."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--es-fg-3)',
      margin: '8px 0 0'
    }
  }, "Innovation for the Modern Workplace.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--es-warm-600)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--es-fg-1)'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 24,
      borderTop: '1px solid var(--es-border)',
      fontSize: 13,
      color: 'var(--es-fg-3)',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2025 Esteemed Inc."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Code of Conduct")))));
};
window.Cta = Cta;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/FeatureStack.jsx
try { (() => {
// Esteemed.io — Feature stack (alternating left/right blocks)

const FeatureStack = () => {
  const features = [{
    eye: 'For Enterprise',
    title: 'Cut time-to-hire by 80%, with humans in the loop.',
    body: 'Esteemed Talent is powered by Colleagues — a curated network of 35,000+ vetted professionals. Pair the network with our Aura ATS/CRM and Esteemed Agents to source, screen, and present only the most qualified candidates.',
    cta: 'See enterprise solutions',
    stat: {
      v: '35K+',
      l: 'Vetted Colleagues'
    },
    stat2: {
      v: '130',
      l: 'Countries served'
    }
  }, {
    eye: 'For Small Business',
    title: 'Big-company perks. Freelancer freedom.',
    body: 'Premium health & voluntary benefits, legal protection, business formation, and a virtual office across 4,000+ workspaces — at member pricing. Built for the modern professional managing a full-time role and a side hustle.',
    cta: 'Join Colleagues — free',
    stat: {
      v: '20K+',
      l: 'Active members'
    },
    stat2: {
      v: '4,000',
      l: 'Workspaces worldwide'
    }
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--es-warm-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      direction: i % 2 ? 'rtl' : 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, f.eye), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px, 3.2vw, 42px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1.1,
      margin: '12px 0 18px',
      maxWidth: 480,
      textWrap: 'balance'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--es-fg-2)',
      margin: '0 0 24px',
      maxWidth: 500
    }
  }, f.body), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, f.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr',
      position: 'relative',
      height: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, var(--es-warm-100), var(--es-warm-200))',
      borderRadius: 28,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 12,
      color: 'var(--es-warm-600)'
    }
  }, /*#__PURE__*/React.createElement(EsStar, {
    size: 48,
    fill: "#D7D4C8"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 700
    }
  }, "Image placeholder \xB7 professionals at work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 24,
      left: 24,
      background: 'var(--es-yellow-500)',
      padding: '14px 18px',
      borderRadius: 16,
      boxShadow: 'var(--es-shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em'
    }
  }, f.stat.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600
    }
  }, f.stat.l)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      background: '#fff',
      padding: '14px 18px',
      borderRadius: 16,
      boxShadow: 'var(--es-shadow-md)',
      border: '1px solid var(--es-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em'
    }
  }, f.stat2.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--es-fg-2)'
    }
  }, f.stat2.l)))))));
};
window.FeatureStack = FeatureStack;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/FeatureStack.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
// Esteemed.io — Hero block. Large lockup with star motif bleed.

const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--es-warm-50)'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container",
  style: {
    padding: '88px 32px 72px',
    position: 'relative',
    zIndex: 2
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1.05fr 1fr',
    gap: 64,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The AI + Human Platform for Work"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontSize: 'clamp(48px, 6vw, 80px)',
    fontWeight: 800,
    letterSpacing: '-.03em',
    lineHeight: 1.02,
    margin: '16px 0 24px',
    textWrap: 'balance'
  }
}, "Chart your", /*#__PURE__*/React.createElement("br", null), "career journey."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 19,
    lineHeight: 1.5,
    color: 'var(--es-fg-2)',
    maxWidth: 520,
    margin: '0 0 32px'
  }
}, "Powered by ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: 'var(--es-ink-900)'
  }
}, "35,000+ vetted Colleagues"), ", our institutional and enterprise customers cut time-to-hire by ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: 'var(--es-ink-900)'
  }
}, "80%"), " \u2014 paired with AI-driven Hire, Create, and Acquire."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  size: "lg"
}, "Get Started"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "lg"
}, "Talk to Sales")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    display: 'flex',
    gap: 28,
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex'
  }
}, ['AR', 'MO', 'JK', 'TS', '+'].map((init, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: '2px solid var(--es-warm-50)',
    marginLeft: i ? -10 : 0,
    background: ['#FEE546', '#0E5A3A', '#2A6FDB', '#C8341F', 'var(--es-ink-900)'][i],
    color: i === 0 ? 'var(--es-ink-1000)' : '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 700
  }
}, init))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--es-fg-2)'
  }
}, /*#__PURE__*/React.createElement("strong", {
  style: {
    color: 'var(--es-ink-900)'
  }
}, "35,000+ Colleagues"), /*#__PURE__*/React.createElement("br", null), "across IT, digital, engineering, healthcare & ops"))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: 'var(--es-ink-900)',
    borderRadius: 32,
    padding: 24,
    color: '#fff',
    boxShadow: 'var(--es-shadow-lg)',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: -50,
    top: -50,
    opacity: .15
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 220,
  fill: "#FEE546"
})), /*#__PURE__*/React.createElement(Eyebrow, {
  star: false
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--es-yellow-500)'
  }
}, "\u2605 Esteemed Intelligence")), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontSize: 22,
    fontWeight: 700,
    margin: '12px 0 8px',
    letterSpacing: '-.01em'
  }
}, "The coherence engine."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    color: 'rgba(255,255,255,.7)',
    margin: '0 0 18px',
    lineHeight: 1.5
  }
}, "Your company brain \u2014 connected, indexed, agentic."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, [{
  l: 'Reviewed 312 candidates',
  m: 'auto-shortlisted 8'
}, {
  l: 'Drafted 14 outreach emails',
  m: 'sent for approval'
}, {
  l: 'Updated Greenhouse + Slack',
  m: 'live'
}].map((row, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 14px',
    background: 'rgba(255,255,255,.07)',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,.08)'
  }
}, /*#__PURE__*/React.createElement(EsStar, {
  size: 14,
  fill: "#FEE546"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    fontSize: 13
  }
}, row.l), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'rgba(255,255,255,.5)'
  }
}, row.m))))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    bottom: -28,
    left: -28,
    background: 'var(--es-yellow-500)',
    borderRadius: 20,
    padding: '18px 22px',
    boxShadow: 'var(--es-shadow-md)',
    maxWidth: 230
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 36,
    fontWeight: 800,
    letterSpacing: '-.02em',
    color: 'var(--es-ink-1000)'
  }
}, "80%"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--es-ink-1000)',
    marginTop: 2
  }
}, "reduction in time-to-hire for enterprise customers"))))));
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Nav.jsx
try { (() => {
// Esteemed.io marketing site — top nav

const Nav = () => {
  const [active, setActive] = React.useState(null);
  const items = ['Personal', 'Small Business', 'Enterprise', 'Help'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--es-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 72,
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(EsWordmark, {
    height: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 16
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onMouseEnter: () => setActive(it),
    onMouseLeave: () => setActive(null),
    style: {
      background: active === it ? 'var(--es-warm-100)' : 'transparent',
      border: 'none',
      padding: '8px 14px',
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--es-fg-1)',
      cursor: 'pointer'
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--es-fg-1)'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Get Started"))));
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductsGrid.jsx
try { (() => {
// Esteemed.io — Products grid (Hire / Create / Acquire / Intelligence / Cloud / Colleagues)

const ProductsGrid = () => {
  const products = [{
    name: 'Hire',
    tag: 'Talent acquisition',
    blurb: 'AI-powered ATS + CRM with the Colleagues network as your sourcing layer.',
    icon: 'briefcase',
    ink: false
  }, {
    name: 'Create',
    tag: 'App + site builder',
    blurb: 'Prompt-driven, agentic web development on a headless DrupalX foundation.',
    icon: 'sparkle',
    ink: false
  }, {
    name: 'Acquire',
    tag: 'System of record',
    blurb: 'Onboarding, payroll, and contractor ops across 130 countries.',
    icon: 'layers',
    ink: false
  }, {
    name: 'Intelligence',
    tag: 'Coherence engine',
    blurb: 'Your company brain. Memory, retrieval, and agents that act on your behalf.',
    icon: 'cpu',
    ink: true
  }, {
    name: 'Cloud',
    tag: 'Integrated hosting',
    blurb: 'Run Esteemed apps and Drupal stacks on infrastructure tuned to the platform.',
    icon: 'cloud',
    ink: false
  }, {
    name: 'Colleagues',
    tag: 'Talent community',
    blurb: '35,000+ vetted professionals. Jobs, gigs, peer support, career mapping.',
    icon: 'user',
    ink: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40,
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Our Products"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px, 4vw, 48px)',
      fontWeight: 800,
      letterSpacing: '-.02em',
      margin: '12px 0 0',
      lineHeight: 1.05,
      maxWidth: 720
    }
  }, "One platform. Human talent and AI agents, working in the loop.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "See all products \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, products.map(p => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: p.name,
    className: "card card-hover",
    style: {
      background: p.ink ? 'var(--es-ink-900)' : '#fff',
      color: p.ink ? '#fff' : 'var(--es-fg-1)',
      border: p.ink ? '1px solid var(--es-ink-700)' : '1px solid var(--es-border)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 220,
      position: 'relative',
      overflow: 'hidden'
    }
  }, p.ink && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -40,
      bottom: -40,
      opacity: .12
    }
  }, /*#__PURE__*/React.createElement(EsStar, {
    size: 160,
    fill: "#FEE546"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: p.ink ? 'var(--es-yellow-500)' : 'var(--es-warm-100)',
      color: p.ink ? 'var(--es-ink-1000)' : 'var(--es-ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: p.ink ? 'var(--es-yellow-500)' : 'var(--es-warm-600)'
    }
  }, "Esteemed ", p.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.015em',
      marginTop: 4
    }
  }, p.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: p.ink ? 'rgba(255,255,255,.7)' : 'var(--es-fg-2)',
      margin: 0,
      flex: 1,
      position: 'relative',
      zIndex: 2
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: p.ink ? 'var(--es-yellow-500)' : 'var(--es-ink-900)'
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 14
  })))))));
};
window.ProductsGrid = ProductsGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductsGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

})();

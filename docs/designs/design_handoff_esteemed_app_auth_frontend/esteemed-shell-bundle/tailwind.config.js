/**
 * ESTEEMED PLATFORM SHELL — Tailwind config
 * Mirrors tokens.css. Use either approach; values are identical.
 * Tailwind v3. Colors exposed under the `es` namespace, e.g. bg-es-yellow, text-es-fg-2.
 */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        es: {
          yellow:        "#FEE546", // primary actions ONLY
          "yellow-hover":"#FCD72B", // secondary-nav hover + tile glow
          "yellow-press":"#EFC600",
          "yellow-50":   "#FFFCE6",
          "yellow-100":  "#FFF7B8",
          ink:           "#111111",
          "ink-1000":    "#0A0A0A",
          "fg-1":        "#14140F",
          "fg-2":        "#565449",
          "fg-3":        "#8C887A",
          bg:            "#FAFAF7",
          surface:       "#FFFFFF",
          "surface-alt": "#F4F3EE",
          "surface-ink": "#111111",
          "surface-sunken":"#F0EFEA",
          border:        "#E4E4E4", // 1px card border
          "border-soft": "#EFEEE9",
          "border-strong":"#D7D4C8",
          circle:        "#B8B8B8", // secondary-nav outline circle
          // label ramps (fg = text/border, bg = pastel fill)
          "red-fg":"#C8341F","red-bg":"#FBE5E1",
          "amber-fg":"#92610F","amber-bg":"#FBF1DD",
          "blue-fg":"#2A6FDB","blue-bg":"#E2ECFA",
          "slate-fg":"#475569","slate-bg":"#EDF0F4",
          "teal-fg":"#0E7490","teal-bg":"#DBEFF3",
          "coral-fg":"#C2410C","coral-bg":"#FCE9E0",
          "purple-fg":"#6D28D9","purple-bg":"#EDE7FC",
          "pink-fg":"#BE2065","pink-bg":"#FBE2EE",
          success:"#1F8A5B","success-bg":"#E4F4EC",
          warning:"#D08A1F","warning-bg":"#FBF1DD",
          danger:"#C8341F","danger-bg":"#FBE5E1",
          info:"#2A6FDB","info-bg":"#E2ECFA",
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs:["12px"], sm:["13px"], base:["14px"], md:["15px"], lg:["16px"],
        xl:["18px"], "2xl":["22px"], "3xl":["30px"], "4xl":["40px"],
      },
      spacing: { nav:"248px", rail:"300px", page:"24px" /* LOCKED page padding */ },
      maxWidth: { content:"1180px" },
      borderRadius: {
        sm:"8px", md:"12px", lg:"16px", xl:"20px", "2xl":"24px", pill:"999px",
      },
      boxShadow: {
        none:"none",                                  // priority cards carry no shadow
        "star-input":"0 10px 30px rgba(30,28,18,.10), 0 2px 8px rgba(30,28,18,.06)",
        panel:"0 24px 60px rgba(20,18,10,.18), 0 4px 12px rgba(20,18,10,.08)",
        sm:"0 1px 2px rgba(30,28,18,.06)",
        md:"0 8px 24px rgba(30,28,18,.10)",
        "tile-hover":"0 0 0 2px #FCD72B, 0 8px 20px rgba(252,215,43,.30)",
      },
      transitionTimingFunction: {
        out:"cubic-bezier(0.22,1,0.36,1)",
        "in-out":"cubic-bezier(0.6,0,0.2,1)",
      },
      transitionDuration: { fast:"120ms", base:"200ms", slow:"320ms" },
    },
  },
  plugins: [],
};

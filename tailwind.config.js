/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ----------------------------------------------------------------
         COLORS — legacy ink/paper/accent kept for backwards compat.
         New tokens live under the `es` namespace: bg-es-yellow, text-es-fg-2, etc.
         Values sourced from tokens.css (design-handoff).
         ---------------------------------------------------------------- */
      colors: {
        // Legacy (backwards compat)
        ink: '#282828',
        paper: '#FFFFFF',
        accent: '#FEE546',
        'accent-hover': '#FFF489',

        // Esteemed Platform Shell design tokens
        es: {
          // 1. Brand yellow
          yellow:          "#FEE546",
          "yellow-hover":  "#FFF489",
          "yellow-press":  "#EFC600",
          "yellow-50":     "#FFFCE6",
          "yellow-100":    "#FFF7B8",

          // 2. Ink + text
          "ink-1000":      "#0A0A0A",
          ink:             "#111111",
          "ink-700":       "#2A2A2A",
          "fg-1":          "rgba(0,0,0,0.85)",
          "fg-2":          "#565449",
          "fg-3":          "#8C887A",
          "fg-on-yellow":  "#0A0A0A",
          "fg-on-ink":     "#FFFFFF",

          // 3. Surfaces + borders
          bg:              "#FAFAF7",
          surface:         "#FFFFFF",
          "surface-alt":   "#F4F3EE",
          "surface-ink":   "#111111",
          "surface-sunken":"#F0EFEA",
          border:          "#D7D7D7",
          "border-soft":   "#D7D7D7",
          "border-strong": "#D7D7D7",
          circle:          "#B8B8B8",
          "pill-outline":  "#282828",

          // 4. Semantic label ramps (fg = text/border, bg = pastel fill)
          "red-fg":        "#C8341F",
          "red-bg":        "#FBE5E1",
          "amber-fg":      "#92610F",
          "amber-bg":      "#FBF1DD",
          "blue-fg":       "#2A6FDB",
          "blue-bg":       "#E2ECFA",
          "slate-fg":      "#475569",
          "slate-bg":      "#EDF0F4",
          "teal-fg":       "#0E7490",
          "teal-bg":       "#DBEFF3",
          "coral-fg":      "#C2410C",
          "coral-bg":      "#FCE9E0",
          "purple-fg":     "#6D28D9",
          "purple-bg":     "#EDE7FC",
          "pink-fg":       "#BE2065",
          "pink-bg":       "#FBE2EE",

          // Status colors (aligned to Toastify palette)
          success:         "#07BC0C",
          "success-bg":    "#E4F7E4",
          warning:         "#F1C40F",
          "warning-bg":    "#FCF4D6",
          danger:          "hsl(6, 78%, 57%)",
          "danger-bg":     "#FBE6E2",
          info:            "#3498DB",
          "info-bg":       "#E3F0FB",

          // 5. Focus + overlay
          "focus-ring":      "rgba(254, 229, 70, 0.55)",
          "focus-ring-blue": "rgba(42, 111, 219, 0.40)",
          overlay:           "rgba(14, 13, 8, 0.42)",
        },
      },

      /* ----------------------------------------------------------------
         TYPOGRAPHY
         ---------------------------------------------------------------- */
      fontFamily: {
        "es-sans":    ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
        "es-display": ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
        "es-mono":    ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        "es-xs":  ["12px", { lineHeight: "1.45" }],
        "es-sm":  ["13px", { lineHeight: "1.45" }],
        "es-base":["14px", { lineHeight: "1.45" }],
        "es-md":  ["15px", { lineHeight: "1.45" }],
        "es-lg":  ["16px", { lineHeight: "1.25" }],
        "es-xl":  ["18px", { lineHeight: "1.25" }],
        "es-2xl": ["22px", { lineHeight: "1.25" }],
        "es-3xl": ["30px", { lineHeight: "1.08" }],
        "es-4xl": ["40px", { lineHeight: "1.08" }],
      },
      fontWeight: {
        "es-regular":  "400",
        "es-medium":   "500",
        "es-semibold":  "600",
        "es-bold":     "700",
        "es-extra":    "800",
      },
      lineHeight: {
        "es-tight":  "1.08",
        "es-snug":   "1.25",
        "es-normal": "1.45",
      },
      letterSpacing: {
        "es-tight": "-0.02em",
        "es-snug":  "-0.01em",
        "es-caps":  "0.10em",
      },

      /* ----------------------------------------------------------------
         SPACING — 4px base grid
         ---------------------------------------------------------------- */
      spacing: {
        "es-1":  "4px",
        "es-2":  "8px",
        "es-3":  "12px",
        "es-4":  "16px",
        "es-5":  "20px",
        "es-6":  "24px",
        "es-8":  "32px",
        "es-10": "40px",
        "es-12": "48px",
        "es-16": "64px",
        "es-nav":  "248px",
        "es-rail": "300px",
      },

      /* ----------------------------------------------------------------
         LAYOUT
         ---------------------------------------------------------------- */
      maxWidth: {
        "es-content": "1180px",
      },
      width: {
        "es-nav":  "248px",
        "es-rail": "300px",
      },

      /* ----------------------------------------------------------------
         BORDER RADIUS
         ---------------------------------------------------------------- */
      borderRadius: {
        // Legacy
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
        // Esteemed design tokens
        "es-sm":   "8px",
        "es-md":   "12px",
        "es-lg":   "16px",
        "es-xl":   "20px",
        "es-2xl":  "24px",
        "es-pill": "999px",
      },

      /* ----------------------------------------------------------------
         BOX SHADOWS — warm, never blue. Cards carry NO shadow.
         ---------------------------------------------------------------- */
      boxShadow: {
        "es-none":       "none",
        "es-sm":         "0 1px 2px rgba(30, 28, 18, 0.06)",
        "es-md":         "0 8px 24px rgba(30, 28, 18, 0.10)",
        "es-star-input": "0 10px 30px rgba(30, 28, 18, 0.10), 0 2px 8px rgba(30, 28, 18, 0.06)",
        "es-panel":      "0 24px 60px rgba(20, 18, 10, 0.18), 0 4px 12px rgba(20, 18, 10, 0.08)",
        "es-tile-hover": "0 0 0 2px #FFF489, 0 8px 20px rgba(255, 244, 137, 0.30)",
      },

      /* ----------------------------------------------------------------
         ANIMATION / TRANSITIONS
         ---------------------------------------------------------------- */
      transitionTimingFunction: {
        "es-out":     "cubic-bezier(0.22, 1, 0.36, 1)",
        "es-in-out":  "cubic-bezier(0.6, 0, 0.2, 1)",
      },
      transitionDuration: {
        "es-fast": "120ms",
        "es-base": "200ms",
        "es-slow": "320ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

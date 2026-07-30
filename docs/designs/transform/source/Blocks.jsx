// Blocks — the user's lucide "blocks" icon, faithfully driven by framer-motion.
// On hover the detached block springs (translateX:-4, translateY:4) into the
// notch of the L, completing the square — exactly the handed .tsx behavior.

const VARIANTS = {
  normal: { translateX: 0, translateY: 0 },
  animate: { translateX: -4, translateY: 4 },
};

function BlocksSvg({ n, children, hover }) {
  return (
    <svg
      fill="none"
      width={n}
      height={n}
      viewBox="0 0 24 24"
      stroke="var(--es-ink-900)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block", width: n, maxWidth: "100%", height: "auto", cursor: "pointer" }}
      onMouseEnter={hover && hover.enter}
      onMouseLeave={hover && hover.leave}
    >
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
      {children}
    </svg>
  );
}

function BlocksAnimated({ n }) {
  const { motion, useAnimation } = window.Motion;
  const controls = useAnimation();
  return (
    <BlocksSvg n={n} hover={{ enter: () => controls.start("animate"), leave: () => controls.start("normal") }}>
      <motion.path
        animate={controls}
        initial="normal"
        variants={VARIANTS}
        d="M14 3h7v7h-7z"
        fill="var(--es-yellow-500)"
      />
    </BlocksSvg>
  );
}

function BlocksStatic({ n }) {
  return (
    <BlocksSvg n={n}>
      <path d="M14 3h7v7h-7z" fill="var(--es-yellow-500)" />
    </BlocksSvg>
  );
}

function Blocks({ size }) {
  const n = parseInt(size, 10) || 450;
  const [ready, setReady] = React.useState(!!(window.Motion && window.Motion.useAnimation));
  React.useEffect(() => {
    if (ready) return;
    const id = setInterval(() => {
      if (window.Motion && window.Motion.useAnimation) {
        setReady(true);
        clearInterval(id);
      }
    }, 30);
    return () => clearInterval(id);
  }, [ready]);
  return ready ? <BlocksAnimated n={n} /> : <BlocksStatic n={n} />;
}

window.Blocks = Blocks;

export const theme = {
  brand: {
    text: "text-zinc-100 dark:text-zinc-100",
    subtext: "text-zinc-500 dark:text-zinc-400",
    card: "bg-white/70 dark:bg-zinc-900/70 backdrop-blur",
    border: "border border-zinc-200/50 dark:border-zinc-800/60",
    ring: "ring-1 ring-zinc-900/5 dark:ring-white/10",
  },
  radius: { card: "rounded-2xl", pill: "rounded-full" },
  shadow: { soft: "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]" },
};
export const fadeInUp = { initial:{opacity:0,y:12}, animate:{opacity:1,y:0}, transition:{duration:0.5,ease:"easeOut"} };
export const scaleIn = { initial:{opacity:0,scale:0.96}, animate:{opacity:1,scale:1}, transition:{duration:0.35,ease:"easeOut"} };

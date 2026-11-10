import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Flower2, Heart, Sparkles, Trees, BedDouble, Landmark, UtensilsCrossed, Images, Phone, CalendarHeart, Info, Star, Home } from "lucide-react";

const THEMES: Record<string, { label: string; line: string; Icon: typeof Home; from: "bottom" | "left" | "right" | "top" | "circle" }> = {
  "/": { label: "Vrindavan Vatika", line: "Welcome home", Icon: Home, from: "circle" },
  "/banquet-hall": { label: "Banquet Hall", line: "Chandeliers & grandeur", Icon: Landmark, from: "top" },
  "/lawn": { label: "The Lawn", line: "Under open skies", Icon: Trees, from: "bottom" },
  "/rooms": { label: "Guest Rooms", line: "Rest between rituals", Icon: BedDouble, from: "left" },
  "/weddings": { label: "Weddings", line: "Every ritual, beautifully", Icon: Heart, from: "circle" },
  "/decor": { label: "Décor", line: "Florals & light", Icon: Flower2, from: "right" },
  "/menu": { label: "Menu", line: "A vegetarian feast", Icon: UtensilsCrossed, from: "bottom" },
  "/gallery": { label: "Gallery", line: "Moments in full bloom", Icon: Images, from: "left" },
  "/facilities": { label: "Facilities", line: "Thoughtfully provided", Icon: Star, from: "top" },
  "/about": { label: "Our Story", line: "About the venue", Icon: Info, from: "right" },
  "/contact": { label: "Contact", line: "Let's talk", Icon: Phone, from: "bottom" },
  "/plan-your-event": { label: "Plan Your Event", line: "Let's begin", Icon: CalendarHeart, from: "circle" },
};

const enter = {
  bottom: { initial: { y: "100%" }, animate: { y: "0%" }, exit: { y: "-100%" } },
  top: { initial: { y: "-100%" }, animate: { y: "0%" }, exit: { y: "100%" } },
  left: { initial: { x: "-100%" }, animate: { x: "0%" }, exit: { x: "100%" } },
  right: { initial: { x: "100%" }, animate: { x: "0%" }, exit: { x: "-100%" } },
  circle: { initial: { clipPath: "circle(0% at 50% 50%)" }, animate: { clipPath: "circle(150% at 50% 50%)" }, exit: { opacity: 0 } },
};

export function Splash() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();
  useEffect(() => {
    const t = setTimeout(() => setShow(false), reduce ? 300 : 2200);
    return () => clearTimeout(t);
  }, [reduce]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest text-ivory"
          style={{ clipPath: "inset(0 0 0% 0)" }}
        >
          <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <Flower2 className="h-12 w-12 text-gold" strokeWidth={1.2} />
          </motion.div>
          <div className="mt-6 overflow-hidden">
            <motion.p initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-5xl md:text-7xl">
              Vrindavan
            </motion.p>
          </div>
          <motion.p initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.5em" }} transition={{ delay: 0.7, duration: 1 }} className="eyebrow mt-3 text-gold">
            Vatika
          </motion.p>
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }} className="mt-8 block h-px w-40 origin-left bg-gold" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1.1 }} className="mt-5 text-xs tracking-widest">
            BANQUET HALL · LAWN · STAY
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PageCurtain({ path }: { path: string }) {
  const first = useRef(true);
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (reduce) return;
    setActive(path);
    const t = setTimeout(() => setActive(null), 1100);
    return () => clearTimeout(t);
  }, [path, reduce]);
  const theme = active ? THEMES[active] ?? { label: "", line: "", Icon: Sparkles, from: "bottom" as const } : null;
  return (
    <AnimatePresence>
      {theme && (
        <motion.div
          key={active}
          {...enter[theme.from]}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="pointer-events-none fixed inset-0 z-[90] flex flex-col items-center justify-center bg-forest text-ivory"
        >
          <motion.div initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <theme.Icon className="h-10 w-10 text-gold" strokeWidth={1.3} />
          </motion.div>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }} className="mt-4 px-6 text-center font-serif text-4xl md:text-6xl">
            {theme.label}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="eyebrow mt-3 text-gold">{theme.line}</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

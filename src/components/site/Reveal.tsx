import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, line1, line2, light, center }: { eyebrow?: string; line1: string; line2?: string; light?: boolean; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {eyebrow && <p className={`eyebrow mb-5 ${light ? "text-gold" : "text-gold"}`}>{eyebrow}</p>}
      <h2 className={`text-4xl leading-[1.02] md:text-6xl ${light ? "text-ivory" : "text-forest"}`}>
        {line1}
        {line2 && (
          <>
            <br />
            <em className={light ? "text-ivory/60" : "text-muted-foreground"}>{line2}</em>
          </>
        )}
      </h2>
    </Reveal>
  );
}

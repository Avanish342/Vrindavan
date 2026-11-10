import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import entrance from "@/assets/entrance.jpg";
import table from "@/assets/table.jpg";
import { Reveal, SectionTitle } from "./Reveal";

const steps = [
  ["01", "Choose your occasion", "Wedding, reception, sangeet or a milestone birthday."],
  ["02", "Pick your setting", "Indoor elegance, open-air lawn — or both."],
  ["03", "Share your details", "Guests, date and stay — we'll take it from there."],
];

export function PlanTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-5%", "15%"]);
  return (
    <section ref={ref} className="overflow-hidden bg-beige/50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative h-[560px]">
          <motion.img style={{ y: y1 }} src={entrance} alt="Floral entrance" loading="lazy" className="absolute left-0 top-0 h-[78%] w-[62%] rounded-2xl object-cover shadow-soft" />
          <motion.img style={{ y: y2 }} src={table} alt="Reception table" loading="lazy" className="absolute bottom-0 right-0 h-[60%] w-[50%] rounded-2xl border-8 border-ivory object-cover shadow-soft" />
        </div>
        <div>
          <SectionTitle eyebrow="Plan your event" line1="Your celebration," line2="in three steps" />
          <ol className="mt-10 space-y-6">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.1}>
                <li className="flex gap-6 border-b border-border pb-6">
                  <span className="font-serif text-3xl text-gold">{n}</span>
                  <div>
                    <p className="font-serif text-2xl text-forest">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.3}>
            <Link to="/plan-your-event" className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-ivory transition-all hover:gap-3 hover:bg-gold hover:text-charcoal">
              Start planning <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

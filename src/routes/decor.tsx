import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import entrance from "@/assets/entrance.jpg";
import floral from "@/assets/floral.jpg";
import table from "@/assets/table.jpg";
import stage from "@/assets/stage.jpg";
import hall from "@/assets/hall.jpg";
import lawn from "@/assets/lawn.jpg";
import mehendi from "@/assets/mehendi.jpg";
import sangeet from "@/assets/sangeet.jpg";
import { REAL } from "@/lib/photos";
import { CTASection, PageHero } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/decor")({
  head: () => ({
    meta: [
      { title: "Décor Inspiration – Vrindavan Vatika" },
      { name: "description", content: "Floral mandaps, grand entrances, table settings and stage décor ideas for celebrations at Vrindavan Vatika." },
      { property: "og:title", content: "Décor Inspiration – Vrindavan Vatika" },
      { property: "og:description", content: "Florals, light and detail — ideas for your celebration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Decor,
});

const themes = [
  { t: "Floral entrances", img: REAL.floralEntrance },
  { t: "Mandap & stage", img: REAL.stageLotus },
  { t: "Table styling", img: REAL.lawnDiningNight },
  { t: "Marigold & brass", img: floral },
  { t: "Colourful mehendi", img: mehendi },
  { t: "Night lighting", img: REAL.lawnNightStage },
];

function ZoomFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const clip = useTransform(scrollYProgress, [0, 0.7], ["inset(18% 22% 18% 22% round 24px)", "inset(0% 0% 0% 0% round 0px)"]);
  const op = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.img style={{ clipPath: clip }} src={REAL.lawnNightStage} alt="The lawn lit for an evening celebration" className="absolute inset-0 h-full w-full object-cover" />
        <motion.div style={{ opacity: op }} className="absolute inset-0 flex items-center justify-center bg-forest/50 px-6 text-center">
          <h2 className="max-w-4xl text-5xl leading-none text-ivory text-legible md:text-7xl">Light turns a lawn <em className="text-gold">into a memory.</em></h2>
        </motion.div>
      </div>
    </section>
  );
}

function Decor() {
  return (
    <>
      <PageHero image={REAL.floralEntrance} eyebrow="Décor inspiration" title="Florals, light & the finest details" subtitle="Ideas to inspire your décorator — every space at Vrindavan Vatika is a canvas." />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Themes" line1="Six ways to" line2="dress the venue" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t, i) => (
              <Reveal key={t.t} delay={(i % 3) * 0.1} className={i % 3 === 1 ? "lg:mt-16" : ""}>
                <figure className="group overflow-hidden rounded-2xl">
                  <div className="overflow-hidden"><img src={t.img} alt={t.t} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" /></div>
                  <figcaption className="mt-5 flex items-baseline justify-between">
                    <span className="font-serif text-3xl text-forest">{t.t}</span>
                    <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ZoomFeature />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Mood board" line1="A palette of" line2="ivory, green & gold" />
          <div className="mt-14 columns-2 gap-4 md:columns-4">
            {[REAL.hallWide, REAL.floralEntrance, REAL.stageLotus, REAL.lawnDiningNight, hall, floral, table, entrance, stage, mehendi, sangeet, lawn].map((s, i) => (
              <Reveal key={i} delay={i * 0.05} className="mb-4 overflow-hidden rounded-xl"><img src={s} alt="" loading="lazy" className="w-full transition-transform duration-1000 hover:scale-110" /></Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">Several photographs are from real events at Vrindavan Vatika; others are inspiration only. Décor services and partners are to be confirmed with the venue.</p>
        </div>
      </section>
      <CTASection image={REAL.stageLotus} />
    </>
  );
}

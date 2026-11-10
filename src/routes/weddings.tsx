import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mehendi from "@/assets/mehendi.jpg";
import celebration from "@/assets/celebration.jpg";
import sangeet from "@/assets/sangeet.jpg";
import lawn from "@/assets/lawn.jpg";
import table from "@/assets/table.jpg";
import entrance from "@/assets/entrance.jpg";
import floral from "@/assets/floral.jpg";
import hall from "@/assets/hall.jpg";
import aerial from "@/assets/aerial.jpg";
import { REAL } from "@/lib/photos";
import { CTASection, PageHero } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { PlanTeaser } from "@/components/site/PlanTeaser";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings – Vrindavan Vatika" },
      { name: "description", content: "Every wedding ritual — mehendi, haldi, sangeet, pheras and reception — beautifully hosted at Vrindavan Vatika." },
      { property: "og:title", content: "Weddings – Vrindavan Vatika" },
      { property: "og:description", content: "From the first haldi to the final vidaai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Weddings,
});

const rituals = [
  { n: "01", t: "Mehendi", d: "Marigold canopies, bright cushions and an afternoon of laughter on the lawn.", img: mehendi },
  { n: "02", t: "Haldi", d: "Golden blessings in a sun-washed setting, made for candid photographs.", img: celebration },
  { n: "03", t: "Sangeet", d: "A glowing dance floor beneath the stars for a night of music and joy.", img: REAL.lawnNightStage },
  { n: "04", t: "Pheras", d: "A floral mandap at dusk, framed by trees and soft fairy lights.", img: lawn },
  { n: "05", t: "Reception", d: "A lotus-backed stage, an ornate sofa and a grand entrance for the couple.", img: REAL.stageLotus },
];

function HorizontalStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);
  const imgs = [REAL.floralEntrance, entrance, table, REAL.lawnDiningNight, hall, aerial, REAL.hallWide, mehendi, sangeet, floral];
  return (
    <section ref={ref} className="relative h-[260vh] bg-forest">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-6"><SectionTitle light eyebrow="Wedding album" line1="Frames from" line2="a perfect day" /></div>
        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-[8vw]">
          {imgs.map((s, i) => (
            <div key={i} className={`shrink-0 overflow-hidden rounded-2xl ${i % 2 ? "h-[44vh] w-[34vh] self-end" : "h-[54vh] w-[42vh]"}`}>
              <img src={s} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Weddings() {
  return (
    <>
      <PageHero image={REAL.stageLotus} eyebrow="Weddings" title="From the first haldi to the final vidaai" subtitle="Every ritual of an Indian wedding, held with grace in one beautiful place." />
      <section className="py-28">
        <div className="mx-auto max-w-7xl space-y-28 px-6">
          {rituals.map((r, i) => (
            <div key={r.t} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Reveal className="overflow-hidden rounded-2xl">
                <motion.img whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }} src={r.img} alt={r.t} loading="lazy" className="aspect-[5/4] w-full object-cover" />
              </Reveal>
              <Reveal delay={0.15}>
                <span className="font-serif text-7xl text-gold/60">{r.n}</span>
                <h2 className="mt-2 text-5xl text-forest md:text-6xl">{r.t}</h2>
                <span className="gold-rule my-6" />
                <p className="max-w-md leading-relaxed text-muted-foreground">{r.d}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <HorizontalStrip />
      <PlanTeaser />
      <CTASection image={REAL.lawnDiningNight} />
    </>
  );
}

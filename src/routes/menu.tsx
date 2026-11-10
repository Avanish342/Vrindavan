import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChefHat, IceCreamCone, MessageCircle, Soup, UtensilsCrossed } from "lucide-react";
import { REAL, REAL_ALT } from "@/lib/photos";
import { CTASection, PageHero } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Catering – Vrindavan Vatika" },
      { name: "description", content: "A complete vegetarian wedding menu with live counters — starters, mains and desserts at Vrindavan Vatika." },
      { property: "og:title", content: "Menu & Catering – Vrindavan Vatika" },
      { property: "og:description", content: "Starters, live counters, thali mains and sweets — a vegetarian wedding menu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Menu,
});

const courses = [
  {
    n: "01",
    t: "Starters",
    icon: Soup,
    note: "To open the evening",
    items: ["Veg Chowmein", "Veg Manchurian", "Chaat Counter", "Pani Puri", "Litti Chokha — live counter", "Hot Coffee"],
    img: REAL.lawnDiningNight,
  },
  {
    n: "02",
    t: "Main Course",
    icon: ChefHat,
    note: "The heart of the feast",
    items: ["Butter Naan", "Plain Puri", "Veg Pulao", "Dal Tadka", "Matar Paneer", "Mix Veg", "Dahi Vada / Boondi Raita", "Papad", "Fresh Green Salad"],
    img: REAL.hallWide,
  },
  {
    n: "03",
    t: "Desserts",
    icon: IceCreamCone,
    note: "Something sweet to finish",
    items: ["Rasgulla", "Gulab Jamun", "Ice-Cream"],
    img: REAL.stageLotus,
  },
];

const occasions = ["Weddings", "Receptions", "Ring Ceremonies", "Birthday Parties", "Anniversaries", "Corporate Events"];

function MenuCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  return (
    <section ref={ref} className="overflow-hidden bg-beige/50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div style={{ y }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-3xl border border-gold/30" />
          <img src={REAL.menuCard} alt={REAL_ALT.menuCard} loading="lazy" className="relative w-full rounded-2xl shadow-soft" />
        </motion.div>
        <div>
          <SectionTitle eyebrow="The menu card" line1="A complete" line2="vegetarian feast" />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
              Our wedding menu is entirely vegetarian and built to feed a crowd without fuss — chaat and live counters to begin, a full thali at the centre, and sweets to send everyone home happy.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-3"><UtensilsCrossed className="h-4 w-4 text-gold" /> Live counters: chaat, pani puri and litti chokha</li>
              <li className="flex items-center gap-3"><UtensilsCrossed className="h-4 w-4 text-gold" /> Home-style north Indian mains and breads</li>
              <li className="flex items-center gap-3"><UtensilsCrossed className="h-4 w-4 text-gold" /> Sweets and cold desserts included</li>
            </ul>
            <p className="mt-8 text-xs text-muted-foreground">Menu shown is our standard wedding card. Per-plate pricing, customisation and menu tastings are shared on request.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <>
      <PageHero
        image={REAL.lawnDiningNight}
        eyebrow="Menu & catering"
        title="Food that keeps the party going"
        subtitle="A complete vegetarian wedding menu — live counters, a full thali and sweets, served across the hall and the lawn."
      />

      <MenuCard />

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Courses" line1="Three chapters," line2="one long table" />
          <div className="mt-16 space-y-24">
            {courses.map((c, i) => (
              <div key={c.t} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <Reveal className="overflow-hidden rounded-2xl">
                  <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1.2 }} src={c.img} alt="" loading="lazy" className="aspect-[5/4] w-full object-cover" />
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-6xl text-gold/50">{c.n}</span>
                    <div>
                      <h2 className="text-4xl text-forest md:text-5xl">{c.t}</h2>
                      <p className="eyebrow mt-2 text-muted-foreground">{c.note}</p>
                    </div>
                  </div>
                  <span className="gold-rule my-8" />
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 border-b border-border pb-3 text-sm text-charcoal">
                        <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-28 text-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle light eyebrow="Perfect for" line1="Every occasion," line2="served well" />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((o, i) => (
              <Reveal key={o} delay={i * 0.06} className="bg-forest p-10">
                <span className="eyebrow text-gold">0{i + 1}</span>
                <p className="mt-4 font-serif text-3xl">{o}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/plan-your-event" className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:scale-105">Plan your event</Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ivory hover:text-forest">
              <MessageCircle className="h-4 w-4" /> Ask for per-plate pricing
            </a>
          </div>
        </div>
      </section>

      <CTASection image={REAL.stageLotus} title="Tell us the menu you're dreaming of." />
    </>
  );
}

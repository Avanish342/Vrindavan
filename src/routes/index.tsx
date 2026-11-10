import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Sparkles, Heart, BedDouble, Settings2, Smile, HandHeart, MessageCircle } from "lucide-react";
import aerial from "@/assets/aerial.jpg";
import clouds from "@/assets/clouds.jpg";
import hall from "@/assets/hall.jpg";
import lawn from "@/assets/lawn.jpg";
import room from "@/assets/room.jpg";
import floral from "@/assets/floral.jpg";
import stage from "@/assets/stage.jpg";
import celebration from "@/assets/celebration.jpg";
import { REAL, REAL_ALT } from "@/lib/photos";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/Layout";
import { PlanTeaser } from "@/components/site/PlanTeaser";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vrindavan Vatika – Luxury Banquet Hall & Wedding Lawn" },
      { name: "description", content: "Where every celebration becomes a beautiful memory. Banquet hall, wedding lawn and guest rooms for weddings, receptions and events." },
      { property: "og:title", content: "Vrindavan Vatika – Luxury Banquet Hall & Wedding Lawn" },
      { property: "og:description", content: "Banquet hall, wedding lawn and guest rooms for unforgettable celebrations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const aerialCards = [
  { t: "Grand\nBanquet Hall", d: "Chandeliers, ivory drapes and a stage made for your entrance.", pos: "left-[6%] top-[22%]" },
  { t: "Open-Air\nWedding Lawn", d: "Pheras beneath the sky, framed by trees and fairy lights.", pos: "right-[6%] top-[30%]" },
  { t: "Stay\nOn Site", d: "Comfortable rooms so family stays close to every ritual.", pos: "left-[34%] top-[58%]" },
];

function AerialStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.45]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const cloudOpacity = useTransform(scrollYProgress, [0.6, 0.95], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const c0 = useTransform(scrollYProgress, [0.1, 0.2, 0.55, 0.65], [0, 1, 1, 0]);
  const c1 = useTransform(scrollYProgress, [0.2, 0.3, 0.55, 0.65], [0, 1, 1, 0]);
  const c2 = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const ops = [c0, c1, c2];

  return (
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.img src={aerial} alt="Aerial view of Vrindavan Vatika wedding lawn" style={{ scale, y }} className="absolute inset-0 h-full w-full object-cover" width={1920} height={1088} />
        <div className="absolute inset-0 bg-shade" />

        <motion.div style={{ opacity: titleOpacity }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="eyebrow text-gold">
            A destination for your celebrations
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-5xl text-5xl leading-[0.95] text-ivory text-legible md:text-8xl">
            Where Every Celebration Becomes <em className="text-gold">a Beautiful Memory.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-6 max-w-xl text-ivory text-legible">
            Vrindavan Vatika brings together an elegant banquet hall, a sweeping wedding lawn and guest rooms — one graceful address for every ritual.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/banquet-hall" className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:scale-105">Explore Our Venue</Link>
            <Link to="/contact" className="rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory backdrop-blur-sm transition-colors hover:bg-ivory hover:text-forest">Plan Your Event</Link>
          </motion.div>
          <p className="eyebrow absolute bottom-10 text-ivory/60">Scroll to fly over the venue</p>
        </motion.div>

        {aerialCards.map((c, i) => (
          <motion.div key={c.t} style={{ opacity: ops[i] }} className={`glass-card absolute hidden w-72 rounded-xl p-6 md:block ${c.pos}`}>
            <Sparkles className="mb-3 h-4 w-4 text-gold" />
            <h3 className="whitespace-pre-line font-sans text-sm font-bold uppercase tracking-wider">{c.t}</h3>
            <p className="mt-2 text-sm text-ivory/75">{c.d}</p>
          </motion.div>
        ))}

        <motion.div style={{ opacity: cloudOpacity }} className="pointer-events-none absolute inset-0">
          <img src={clouds} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-cloud-fade" />
        </motion.div>
      </div>
    </section>
  );
}

const venues = [
  { img: REAL.hallWide, t: "Banquet Hall", d: "Elegant indoor venue with sophisticated interiors — perfect for weddings and receptions.", to: "/banquet-hall" as const },
  { img: REAL.lawnNightStage, t: "Wedding Lawn", d: "A beautiful open-air space for grand celebrations under the stars.", to: "/lawn" as const },
  { img: REAL.room, t: "Guest Rooms", d: "Comfortable, relaxing rooms for a convenient wedding stay.", to: "/rooms" as const },
];

const why = [
  { i: Sparkles, t: "Beautiful venue spaces" },
  { i: Heart, t: "Memorable celebrations" },
  { i: BedDouble, t: "Guest accommodation" },
  { i: Settings2, t: "Flexible arrangements" },
  { i: Smile, t: "Comfortable experience" },
  { i: HandHeart, t: "Dedicated event support" },
];

const celebrations = ["Weddings", "Receptions", "Engagements", "Ring ceremonies", "Pre-wedding functions", "Anniversaries", "Birthday celebrations", "Corporate events"];

const testimonials = [
  { n: "Sample Guest", r: "Wedding · placeholder", q: "Placeholder testimonial — the décor, the lawn at dusk and the warmth of the team made our wedding feel like a dream." },
  { n: "Sample Family", r: "Reception · placeholder", q: "Placeholder testimonial — our guests still talk about the banquet hall and how effortlessly everything flowed." },
  { n: "Sample Host", r: "Anniversary · placeholder", q: "Placeholder testimonial — having rooms on site meant our elders could rest between functions." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i] ?? testimonials[0]!;
  return (
    <section className="bg-beige/50 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <SectionTitle eyebrow="Kind words" line1="Straight from" line2="our guests" />
          <p className="mt-6 text-xs text-muted-foreground">Placeholder reviews shown until real guest testimonials are provided.</p>
          <div className="mt-8 flex gap-2">
            <button aria-label="Previous" onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-forest/20 p-3 text-forest hover:bg-forest hover:text-ivory"><ArrowLeft className="h-4 w-4" /></button>
            <button aria-label="Next" onClick={() => setI((i + 1) % testimonials.length)} className="rounded-full border border-forest/20 p-3 text-forest hover:bg-forest hover:text-ivory"><ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
            <span className="font-serif text-7xl leading-none text-gold">“</span>
            <blockquote className="font-serif text-3xl leading-snug text-forest md:text-4xl">{t.q}</blockquote>
            <figcaption className="mt-8">
              <span className="gold-rule mb-4" />
              <p className="eyebrow text-charcoal">{t.n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.r}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </section>
  );
}

function RealMoments() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const down = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const shots = [REAL.facade, REAL.hallWide, REAL.stageLotus, REAL.lawnDiningNight, REAL.floralEntrance, REAL.lawnNightStage, REAL.room, REAL.hallGuests];
  return (
    <section ref={ref} className="overflow-hidden bg-forest py-28 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle light eyebrow="As it really is" line1="Photographed" line2="at the venue" />
      </div>
      <div className="mt-16 grid grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {shots.map((s, i) => (
          <motion.div key={i} style={{ y: i % 2 ? down : up }} className="overflow-hidden rounded-2xl">
            <img src={s} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-1000 hover:scale-110" />
          </motion.div>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-ivory/50">Real photographs from Vrindavan Vatika — the building, hall, lawn, stage and rooms.</p>
    </section>
  );
}

function MenuTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  return (
    <section ref={ref} className="bg-beige/50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Menu" line1="A vegetarian" line2="feast, sorted" />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
              Chaat, pani puri and litti chokha counters, a full north-Indian thali, and sweets to send everyone home happy — our standard wedding menu is entirely vegetarian.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Litti chokha", "Dal tadka", "Matar paneer", "Butter naan", "Rasgulla", "Ice-cream"].map((d) => (
                <span key={d} className="rounded-full border border-forest/25 px-4 py-1.5 text-xs text-forest">{d}</span>
              ))}
            </div>
            <Link to="/menu" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold">
              See the full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <motion.div style={{ y }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-5 rounded-3xl border border-gold/40" />
          <img src={REAL.menuCard} alt={REAL_ALT.menuCard} loading="lazy" className="relative w-full rounded-2xl shadow-soft" />
        </motion.div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <AerialStory />

      {/* Welcome */}
      <section className="relative -mt-px bg-ivory pb-28 pt-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Welcome" line1="A Place Where Moments" line2="Become Memories" />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
                From the first haldi to the last farewell, Vrindavan Vatika is designed to hold every chapter of your celebration with grace — weddings, receptions, engagements, anniversaries, birthdays and corporate gatherings.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold">Discover our story <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal><img src={floral} alt="Floral wedding decoration" loading="lazy" className="ml-auto aspect-[4/5] w-4/5 rounded-2xl object-cover shadow-soft" /></Reveal>
            <Reveal delay={0.2} className="absolute -bottom-10 left-0 w-1/2">
              <img src={celebration} alt="Haldi celebration" loading="lazy" className="aspect-square w-full rounded-2xl border-8 border-ivory object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="bg-ivory py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="The collection" line1="Three spaces," line2="one celebration" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {venues.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.12}>
                <Link to={v.to} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={v.img} alt={v.t} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                  </div>
                  <h3 className="mt-6 text-3xl text-forest">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:gap-3 group-hover:text-gold transition-all">Explore More <ArrowRight className="h-4 w-4" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RealMoments />

      {/* Why */}
      <section className="bg-forest py-28 text-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle light eyebrow="Why Vrindavan Vatika" line1="Every detail," line2="thoughtfully held" />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(({ i: I, t }, k) => (
              <Reveal key={t} delay={k * 0.06} className="bg-forest p-10">
                <I className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <p className="mt-6 font-serif text-2xl">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-ivory py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Gallery" line1="Moments in" line2="full bloom" />
            <Link to="/gallery" className="rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest hover:bg-forest hover:text-ivory">Explore Gallery</Link>
          </div>
          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
            {[[REAL.stageLotus, "row-span-2"], [hall, "col-span-2"], [REAL.lawnDiningNight, "row-span-2"], [REAL.floralEntrance, ""], [celebration, ""], [REAL.facade, "col-span-2"], [room, "col-span-2"]].map(([src, cls], i) => (
              <Reveal key={i} delay={i * 0.05} className={`overflow-hidden rounded-xl ${cls}`}>
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrations */}
      <section className="relative overflow-hidden py-28">
        <img src={lawn} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle light eyebrow="We host" line1="Celebrations of" line2="every kind" />
          <ul className="mt-14 divide-y divide-ivory/15 border-y border-ivory/15">
            {celebrations.map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <li className="group flex items-center justify-between py-6 text-ivory">
                  <span className="font-serif text-3xl transition-all group-hover:translate-x-3 group-hover:text-gold md:text-5xl">{c}</span>
                  <span className="eyebrow text-ivory/40">0{i + 1}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal">
            <MessageCircle className="h-4 w-4" /> Ask about your date
          </a>
        </div>
      </section>

      <MenuTeaser />
      <PlanTeaser />
      <Testimonials />
      <CTASection image={stage} />
    </>
  );
}

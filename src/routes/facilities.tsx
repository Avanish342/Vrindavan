import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Zap, UtensilsCrossed, Flower2, Music, BedDouble, HandHeart, Sparkles, ArrowRight } from "lucide-react";
import floral from "@/assets/floral.jpg";
import { REAL } from "@/lib/photos";
import { CTASection, PageHero } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities – Vrindavan Vatika" },
      { name: "description", content: "Parking, catering, décor, sound, accommodation and event assistance at Vrindavan Vatika." },
      { property: "og:title", content: "Facilities – Vrindavan Vatika" },
      { property: "og:description", content: "Everything your celebration needs, in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Facilities,
});

const items = [
  { i: Car, t: "Parking", d: "Parking for guests — capacity to be confirmed." },
  { i: Zap, t: "Electricity backup", d: "Power backup details to be confirmed." },
  { i: UtensilsCrossed, t: "Vegetarian catering", d: "A complete wedding menu with live counters — see our menu page." },
  { i: Flower2, t: "Decoration arrangements", d: "Décor support and partners to be confirmed." },
  { i: Music, t: "Sound facilities", d: "Sound setup details to be confirmed." },
  { i: BedDouble, t: "Guest accommodation", d: "On-site guest rooms for family and guests." },
  { i: HandHeart, t: "Event assistance", d: "A team to help your celebration run smoothly." },
  { i: Sparkles, t: "Guest convenience", d: "Thoughtful touches for every guest — details to be added." },
];

function Facilities() {
  return (
    <>
      <PageHero image={REAL.hallWide} eyebrow="Facilities" title="Everything, thoughtfully in place" />
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="What we offer" line1="Comforts for" line2="every celebration" />
          <p className="mt-6 text-xs text-muted-foreground">Items marked “to be confirmed” are placeholders until verified by the venue.</p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ i: I, t, d }, k) => (
              <Reveal key={t} delay={k * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft">
                  <I className="h-7 w-7 text-gold" strokeWidth={1.3} />
                  <h3 className="mt-6 text-2xl text-forest">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige/50 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl">
            <img src={REAL.lawnDiningNight} alt="Lawn dining under string lights" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <div>
            <SectionTitle eyebrow="Dining" line1="Eat well," line2="celebrate longer" />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
                Meals are served in the hall or under the lawn canopy, with live counters for chaat, pani puri and litti chokha. Our standard wedding card is entirely vegetarian.
              </p>
              <Link to="/menu" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold">
                See the full menu <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3">
          {[REAL.lawnNightStage, REAL.room, REAL.floralEntrance].map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="overflow-hidden rounded-2xl">
              <img src={s} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-110" />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection image={floral} />
    </>
  );
}

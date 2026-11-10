import { createFileRoute } from "@tanstack/react-router";
import aerial from "@/assets/aerial.jpg";
import floral from "@/assets/floral.jpg";
import celebration from "@/assets/celebration.jpg";
import { REAL } from "@/lib/photos";
import { CTASection, PageHero } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About – Vrindavan Vatika" },
      { name: "description", content: "The story and philosophy behind Vrindavan Vatika, a banquet hall and wedding lawn for heartfelt celebrations." },
      { property: "og:title", content: "About – Vrindavan Vatika" },
      { property: "og:description", content: "A garden of celebrations, built around warmth and hospitality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero image={REAL.facade} eyebrow="About us" title="A garden for life's grandest moments" />
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-serif text-3xl leading-snug text-forest md:text-5xl">
              Named for the gardens of Vrindavan, our venue is imagined as a place of joy, devotion and togetherness — where families gather and memories take root.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5"><img src={REAL.hallGuests} alt="" loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" /></Reveal>
          <div className="md:col-span-6 md:col-start-7 md:pt-24">
            <SectionTitle eyebrow="Our story" line1="Built around" line2="your celebration" />
            <Reveal delay={0.1}><p className="mt-8 leading-relaxed text-muted-foreground">Vrindavan Vatika brings a banquet hall, an open wedding lawn and guest rooms together in one place, so every function — from intimate rituals to grand receptions — can unfold without hurry. (Add your founding story here.)</p></Reveal>
            <Reveal delay={0.2}><img src={REAL.lawnDiningNight} alt="" loading="lazy" className="mt-12 aspect-[4/3] w-full rounded-2xl object-cover" /></Reveal>
          </div>
        </div>
      </section>
      <section className="bg-beige/50 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          {[["Our philosophy", "Hospitality first — every family should feel like the only family we are hosting."], ["Thoughtful spaces", "Indoor elegance, outdoor openness and rest, all a few steps apart."], ["Made personal", "Flexible arrangements that let your traditions lead the way."]].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <span className="gold-rule mb-6" />
              <h3 className="text-3xl text-forest">{t}</h3>
              <p className="mt-4 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2">
          <Reveal><img src={REAL.hallWide} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" /></Reveal>
          <Reveal delay={0.1}><img src={aerial} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover md:mt-24" /></Reveal>
          <Reveal><img src={floral} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover md:-mt-12" /></Reveal>
          <Reveal delay={0.1}><img src={celebration} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" /></Reveal>
        </div>
      </section>
      <CTASection image={REAL.lawnNightStage} title="We would love to host you." />
    </>
  );
}

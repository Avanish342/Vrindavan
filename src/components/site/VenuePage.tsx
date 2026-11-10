import { Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { CTASection, PageHero } from "./Layout";
import { Reveal, SectionTitle } from "./Reveal";
import { whatsappLink } from "@/lib/site";

export type VenueProps = {
  hero: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  introTitle: [string, string];
  intro: string;
  introImage: string;
  stats: { k: string; v: string }[];
  listTitle: string;
  list: string[];
  suits?: string[];
  gallery: string[];
  ctaImage: string;
};

export function VenuePage(p: VenueProps) {
  return (
    <>
      <PageHero image={p.hero} eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Introduction" line1={p.introTitle[0]} line2={p.introTitle[1]} />
            <Reveal delay={0.1}>
              <p className="mt-8 leading-relaxed text-muted-foreground">{p.intro}</p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                {p.stats.map((s) => (
                  <div key={s.k}>
                    <dt className="eyebrow text-muted-foreground">{s.k}</dt>
                    <dd className="mt-2 font-serif text-3xl text-forest">{s.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold hover:text-charcoal">Enquire Now</Link>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest hover:bg-forest hover:text-ivory"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </div>
            </Reveal>
          </div>
          <Reveal><img src={p.introImage} alt="" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft" /></Reveal>
        </div>
      </section>

      <section className="bg-forest py-28 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <SectionTitle light eyebrow="Details" line1={p.listTitle} line2="at a glance" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {p.list.map((f, i) => (
              <Reveal key={f} delay={i * 0.04}>
                <li className="flex items-start gap-3 border-b border-ivory/15 pb-4"><Check className="mt-1 h-4 w-4 text-gold" />{f}</li>
              </Reveal>
            ))}
          </ul>
        </div>
        {p.suits && (
          <div className="mx-auto mt-20 max-w-7xl px-6">
            <p className="eyebrow text-gold">Ideal for</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {p.suits.map((s) => <span key={s} className="rounded-full border border-ivory/25 px-5 py-2 text-sm">{s}</span>)}
            </div>
          </div>
        )}
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Inspiration" line1="Décor &" line2="atmosphere" />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {p.gallery.map((g, i) => (
              <Reveal key={i} delay={i * 0.08} className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={g} alt="" loading="lazy" className="h-full min-h-[260px] w-full object-cover transition-transform duration-1000 hover:scale-110" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection image={p.ctaImage} />
    </>
  );
}

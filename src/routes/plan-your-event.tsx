import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import entrance from "@/assets/entrance.jpg";
import hall from "@/assets/hall.jpg";
import lawn from "@/assets/lawn.jpg";
import aerial from "@/assets/aerial.jpg";
import stage from "@/assets/stage.jpg";
import mehendi from "@/assets/mehendi.jpg";
import sangeet from "@/assets/sangeet.jpg";
import celebration from "@/assets/celebration.jpg";
import table from "@/assets/table.jpg";
import { PageHero } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { planMessage, suggestVenue, type Setting } from "@/lib/planner";

export const Route = createFileRoute("/plan-your-event")({
  head: () => ({
    meta: [
      { title: "Plan Your Event – Vrindavan Vatika" },
      { name: "description", content: "Plan your wedding or celebration at Vrindavan Vatika in a few simple steps and send your plan on WhatsApp." },
      { property: "og:title", content: "Plan Your Event – Vrindavan Vatika" },
      { property: "og:description", content: "Choose your occasion, setting and guests — we'll take it from there." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Plan,
});

const events = [
  { t: "Wedding", img: stage }, { t: "Reception", img: hall }, { t: "Sangeet", img: sangeet },
  { t: "Mehendi & Haldi", img: mehendi }, { t: "Engagement", img: celebration }, { t: "Birthday / Anniversary", img: table },
];
const settings: { k: Setting; t: string; d: string; img: string }[] = [
  { k: "indoor", t: "Indoor", d: "The banquet hall", img: hall },
  { k: "outdoor", t: "Outdoor", d: "The wedding lawn", img: lawn },
  { k: "both", t: "Both", d: "Hall + lawn", img: aerial },
];

function Plan() {
  const [step, setStep] = useState(0);
  const [event, setEvent] = useState("Wedding");
  const [setting, setSetting] = useState<Setting>("both");
  const [guests, setGuests] = useState(250);
  const [date, setDate] = useState("");
  const [stay, setStay] = useState(true);
  const venues = suggestVenue(setting, stay);
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(planMessage({ event, guests, date, venues }))}`;
  const labels = ["Occasion", "Setting", "Details", "Your plan"];

  const card = (active: boolean) => `group relative overflow-hidden rounded-2xl text-left transition-all ${active ? "ring-2 ring-gold ring-offset-4 ring-offset-ivory" : ""}`;

  return (
    <>
      <PageHero image={entrance} eyebrow="Plan your event" title="Begin your celebration story" subtitle="A few simple choices — and we'll craft the rest around you." />
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-wrap items-center gap-3">
            {labels.map((l, i) => (
              <button key={l} onClick={() => setStep(i)} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${i === step ? "bg-forest text-ivory" : i < step ? "bg-beige text-forest" : "border border-border text-muted-foreground"}`}>
                <span className="font-serif text-base">{i < step ? <Check className="h-4 w-4" /> : `0${i + 1}`}</span>{l}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              {step === 0 && (
                <>
                  <SectionTitle line1="What are we" line2="celebrating?" />
                  <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                    {events.map((e) => (
                      <button key={e.t} onClick={() => setEvent(e.t)} className={card(event === e.t)}>
                        <img src={e.img} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-shade" />
                        <span className="absolute bottom-4 left-5 font-serif text-2xl text-ivory text-legible">{e.t}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
              {step === 1 && (
                <>
                  <SectionTitle line1="Where would you" line2="like to celebrate?" />
                  <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {settings.map((s) => (
                      <button key={s.k} onClick={() => setSetting(s.k)} className={card(setting === s.k)}>
                        <img src={s.img} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-shade" />
                        <div className="absolute bottom-6 left-6 text-ivory text-legible">
                          <p className="font-serif text-4xl">{s.t}</p><p className="text-sm">{s.d}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
              {step === 2 && (
                <div className="grid gap-12 md:grid-cols-2">
                  <SectionTitle line1="A few" line2="final details" />
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between"><label className="eyebrow text-muted-foreground">Expected guests</label><span className="font-serif text-3xl text-forest">{guests}</span></div>
                      <input type="range" min={25} max={1500} step={25} value={guests} onChange={(e) => setGuests(+e.target.value)} className="mt-3 w-full accent-forest" />
                    </div>
                    <div>
                      <label className="eyebrow text-muted-foreground">Preferred date</label>
                      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-3 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold" />
                    </div>
                    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card p-5">
                      <span><span className="block font-serif text-2xl text-forest">Guest stay</span><span className="text-sm text-muted-foreground">Rooms for family on site</span></span>
                      <input type="checkbox" checked={stay} onChange={(e) => setStay(e.target.checked)} className="h-5 w-5 accent-forest" />
                    </label>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="relative overflow-hidden rounded-3xl">
                  <img src={aerial} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-forest/85" />
                  <div className="relative grid gap-10 p-10 text-ivory md:grid-cols-2 md:p-16">
                    <div>
                      <p className="eyebrow text-gold">Your plan</p>
                      <h2 className="mt-4 text-5xl leading-none md:text-6xl">A {event.toLowerCase()} <em className="text-ivory/70">for {guests} guests</em></h2>
                      <p className="mt-4 text-ivory/80">{date ? `Preferred date: ${date}` : "Date to be decided"}</p>
                    </div>
                    <div>
                      <p className="eyebrow text-gold">We suggest</p>
                      <ul className="mt-4 space-y-3">{venues.map((v) => <li key={v} className="flex items-center gap-3 border-b border-ivory/15 pb-3 font-serif text-2xl"><Check className="h-4 w-4 text-gold" />{v}</li>)}</ul>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal"><MessageCircle className="h-4 w-4" /> Send plan on WhatsApp</a>
                        <Link to="/contact" className="rounded-full border border-ivory/40 px-6 py-3 text-sm font-semibold hover:bg-ivory hover:text-forest">Full enquiry form</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-between">
            <button disabled={step === 0} onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest disabled:opacity-30"><ArrowLeft className="h-4 w-4" /> Back</button>
            {step < 3 && <button onClick={() => setStep(step + 1)} className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold hover:text-charcoal">Continue <ArrowRight className="h-4 w-4" /></button>}
          </div>
        </div>
      </section>

      <section className="bg-beige/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Inspiration" line1="Ideas for" line2="every function" />
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
            {[[mehendi, "col-span-2 row-span-2"], [table, "row-span-2"], [sangeet, ""], [entrance, ""], [stage, "col-span-2"], [celebration, "col-span-2"]].map(([s, c], i) => (
              <Reveal key={i} delay={i * 0.05} className={`overflow-hidden rounded-xl ${c}`}><img src={s} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

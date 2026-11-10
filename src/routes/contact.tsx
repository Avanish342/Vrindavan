import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import lawn from "@/assets/lawn.jpg";
import { PageHero } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SITE, whatsappLink } from "@/lib/site";
import { validateEnquiry, type Enquiry } from "@/lib/enquiry";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiry – Vrindavan Vatika" },
      { name: "description", content: "Enquire about weddings and events at Vrindavan Vatika. Call, WhatsApp or send an enquiry." },
      { property: "og:title", content: "Contact & Enquiry – Vrindavan Vatika" },
      { property: "og:description", content: "Begin planning your celebration with us." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const empty: Enquiry = { name: "", phone: "", email: "", eventType: "", date: "", guests: "", venue: "", message: "" };
const field = "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Enquiry, string>>>({});
  const [done, setDone] = useState(false);
  const set = (k: keyof Enquiry) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateEnquiry(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true); // Demo only: connect a backend/form service here.
  };

  const Err = ({ k }: { k: keyof Enquiry }) => (errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null);

  return (
    <>
      <PageHero image={lawn} eyebrow="Contact" title="Let's plan something beautiful" />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="text-4xl text-forest md:text-5xl">Visit, call <em className="text-muted-foreground">or write</em></h2>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex gap-3"><Phone className="h-5 w-5 text-gold" />{SITE.phone}</li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-gold" />{SITE.email}</li>
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-gold" />{SITE.address}</li>
            </ul>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold hover:text-charcoal"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe title="Vrindavan Vatika on Google Maps" src={SITE.mapsEmbed} className="block aspect-[4/3] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-forest px-4 py-3 text-sm font-semibold text-ivory hover:bg-gold hover:text-charcoal"><MapPin className="h-4 w-4" /> Get directions</a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-card p-8 shadow-soft md:p-12">
              {done ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
                  <h3 className="mt-6 text-4xl text-forest">Thank you, {form.name.split(" ")[0]}</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">This is a demo confirmation — enquiries aren't being sent yet. For now, please reach us on WhatsApp.</p>
                  <div className="mt-8 flex justify-center gap-3">
                    <a href={whatsappLink()} target="_blank" rel="noreferrer" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-ivory">WhatsApp us</a>
                    <button onClick={() => { setForm(empty); setDone(false); }} className="rounded-full border border-forest px-6 py-3 text-sm font-semibold text-forest">New enquiry</button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2"><p className="eyebrow text-gold">Enquiry form</p></div>
                  <div><label className="mb-1 block text-xs font-semibold">Full name *</label><input className={field} value={form.name} onChange={set("name")} /><Err k="name" /></div>
                  <div><label className="mb-1 block text-xs font-semibold">Phone number *</label><input className={field} inputMode="tel" value={form.phone} onChange={set("phone")} /><Err k="phone" /></div>
                  <div><label className="mb-1 block text-xs font-semibold">Email address</label><input className={field} type="email" value={form.email} onChange={set("email")} /><Err k="email" /></div>
                  <div><label className="mb-1 block text-xs font-semibold">Event type *</label>
                    <select className={field} value={form.eventType} onChange={set("eventType")}>
                      <option value="">Select</option>
                      {["Wedding", "Reception", "Engagement", "Pre-wedding function", "Anniversary", "Birthday", "Corporate event", "Other"].map((o) => <option key={o}>{o}</option>)}
                    </select><Err k="eventType" /></div>
                  <div><label className="mb-1 block text-xs font-semibold">Preferred date *</label><input className={field} type="date" value={form.date} onChange={set("date")} /><Err k="date" /></div>
                  <div><label className="mb-1 block text-xs font-semibold">Number of guests</label><input className={field} inputMode="numeric" value={form.guests} onChange={set("guests")} /><Err k="guests" /></div>
                  <div className="sm:col-span-2"><label className="mb-1 block text-xs font-semibold">Venue preference</label>
                    <select className={field} value={form.venue} onChange={set("venue")}>
                      <option value="">No preference</option>
                      {["Banquet Hall", "Wedding Lawn", "Hall + Lawn", "With guest rooms"].map((o) => <option key={o}>{o}</option>)}
                    </select></div>
                  <div className="sm:col-span-2"><label className="mb-1 block text-xs font-semibold">Message</label><textarea rows={4} className={field} value={form.message} onChange={set("message")} /></div>
                  <button type="submit" className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-charcoal transition-transform hover:scale-[1.02] sm:col-span-2">Submit Enquiry</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

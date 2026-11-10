import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import aerial from "@/assets/aerial.jpg";
import hall from "@/assets/hall.jpg";
import lawn from "@/assets/lawn.jpg";
import room from "@/assets/room.jpg";
import floral from "@/assets/floral.jpg";
import stage from "@/assets/stage.jpg";
import celebration from "@/assets/celebration.jpg";
import mehendi from "@/assets/mehendi.jpg";
import sangeet from "@/assets/sangeet.jpg";
import table from "@/assets/table.jpg";
import entrance from "@/assets/entrance.jpg";
import { REAL } from "@/lib/photos";
import { PageHero } from "@/components/site/Layout";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery – Vrindavan Vatika" },
      { name: "description", content: "Photographs of weddings, décor, the banquet hall, lawn and rooms at Vrindavan Vatika." },
      { property: "og:title", content: "Gallery – Vrindavan Vatika" },
      { property: "og:description", content: "Moments in full bloom at Vrindavan Vatika." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const cats = ["All", "Weddings", "Banquet Hall", "Lawn", "Decorations", "Receptions", "Rooms", "Venue"] as const;
const photos = [
  { src: REAL.facade, c: ["Venue"] },
  { src: REAL.hallWide, c: ["Banquet Hall", "Venue"] },
  { src: REAL.hallGuests, c: ["Banquet Hall"] },
  { src: REAL.stageLotus, c: ["Receptions", "Decorations"] },
  { src: REAL.lawnNightStage, c: ["Lawn", "Weddings", "Decorations"] },
  { src: REAL.lawnDiningNight, c: ["Lawn", "Receptions"] },
  { src: REAL.floralEntrance, c: ["Decorations", "Weddings"] },
  { src: REAL.room, c: ["Rooms", "Venue"] },
  { src: aerial, c: ["Lawn", "Weddings"] },
  { src: stage, c: ["Receptions", "Banquet Hall"] },
  { src: floral, c: ["Decorations"] },
  { src: hall, c: ["Banquet Hall", "Receptions"] },
  { src: celebration, c: ["Weddings"] },
  { src: lawn, c: ["Lawn", "Weddings", "Decorations"] },
  { src: room, c: ["Rooms"] },
  { src: mehendi, c: ["Weddings", "Decorations"] },
  { src: entrance, c: ["Decorations", "Weddings"] },
  { src: sangeet, c: ["Receptions", "Lawn"] },
  { src: table, c: ["Receptions", "Decorations"] },
];

function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = cat === "All" ? photos : photos.filter((p) => p.c.includes(cat));
  const go = (d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length));

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });

  return (
    <>
      <PageHero image={REAL.facade} eyebrow="Gallery" title="Moments in full bloom" />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${cat === c ? "bg-forest text-ivory" : "border border-border text-charcoal hover:border-forest"}`}>{c}</button>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Photographs marked “Venue” are from Vrindavan Vatika itself; the rest are inspiration.</p>
          <motion.div layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            <AnimatePresence>
              {list.map((p, i) => (
                <motion.button
                  layout
                  key={p.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(i)}
                  className="group mb-4 block w-full overflow-hidden rounded-xl"
                >
                  <img src={p.src} alt={p.c.join(", ")} loading="lazy" className="w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="mt-16 text-center">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-ivory"><MessageCircle className="h-4 w-4" /> Love what you see? Chat with us</a>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {open !== null && list[open] && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4" onClick={() => setOpen(null)}>
            <button aria-label="Close" className="absolute right-6 top-6 text-ivory"><X className="h-7 w-7" /></button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-4 rounded-full border border-ivory/30 p-3 text-ivory hover:bg-ivory/10"><ChevronLeft /></button>
            <AnimatePresence mode="wait">
              <motion.img key={list[open].src} src={list[open].src} alt="" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
            </AnimatePresence>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-4 rounded-full border border-ivory/30 p-3 text-ivory hover:bg-ivory/10"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import hall from "@/assets/hall.jpg";
import floral from "@/assets/floral.jpg";
import celebration from "@/assets/celebration.jpg";
import { REAL } from "@/lib/photos";
import { VenuePage } from "@/components/site/VenuePage";

export const Route = createFileRoute("/banquet-hall")({
  head: () => ({
    meta: [
      { title: "Banquet Hall – Vrindavan Vatika" },
      { name: "description", content: "An elegant indoor banquet hall for weddings, receptions and celebrations at Vrindavan Vatika." },
      { property: "og:title", content: "Banquet Hall – Vrindavan Vatika" },
      { property: "og:description", content: "Chandeliers, elegant interiors and a stage made for your celebration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <VenuePage
      hero={REAL.hallWide}
      eyebrow="Banquet Hall"
      title="An indoor setting of quiet grandeur"
      subtitle="Sophisticated interiors, warm light and a stage designed for your most photographed moments."
      introTitle={["Elegance,", "indoors"]}
      intro="Our banquet hall pairs refined interiors with flexible layouts, so weddings, receptions and family gatherings each feel tailored and intimate — whatever the season."
      introImage={REAL.hallGuests}
      stats={[{ k: "Capacity", v: "TBA guests" }, { k: "Seating", v: "Flexible" }]}
      listTitle="Hall facilities"
      list={["Decorated stage area", "Elegant lighting", "Air-conditioning (to confirm)", "Sound arrangement (to confirm)", "Dining area", "Bridal room (to confirm)"]}
      suits={["Weddings", "Receptions", "Engagements", "Anniversaries", "Corporate events"]}
      gallery={[REAL.hallWide, REAL.hallGuests, REAL.stageLotus, hall, floral, celebration]}
      ctaImage={REAL.hallWide}
    />
  ),
});

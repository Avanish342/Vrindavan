import { createFileRoute } from "@tanstack/react-router";
import lawn from "@/assets/lawn.jpg";
import floral from "@/assets/floral.jpg";
import celebration from "@/assets/celebration.jpg";
import { REAL } from "@/lib/photos";
import { VenuePage } from "@/components/site/VenuePage";

export const Route = createFileRoute("/lawn")({
  head: () => ({
    meta: [
      { title: "Wedding Lawn – Vrindavan Vatika" },
      { name: "description", content: "A sweeping open-air wedding lawn for grand celebrations, pheras and evening receptions." },
      { property: "og:title", content: "Wedding Lawn – Vrindavan Vatika" },
      { property: "og:description", content: "Open skies, fairy lights and room for every guest." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <VenuePage
      hero={REAL.lawnNightStage}
      eyebrow="Wedding Lawn"
      title="Celebrate beneath an open sky"
      subtitle="A green, tree-lined lawn that glows at dusk — made for grand weddings and starlit receptions."
      introTitle={["Open air,", "open hearts"]}
      intro="Wide lawns framed by greenery give your décorator a generous canvas — from floral mandaps at golden hour to lantern-lit dinners long into the night."
      introImage={REAL.lawnDiningNight}
      stats={[{ k: "Capacity", v: "TBA guests" }, { k: "Best for", v: "Grand events" }]}
      listTitle="Lawn facilities"
      list={["Mandap & stage area", "Evening lighting", "Open dining layouts", "Tent & canopy arrangements", "Parking (to confirm)", "Power backup (to confirm)"]}
      suits={["Weddings", "Sangeet", "Mehendi & Haldi", "Receptions", "Birthday parties"]}
      gallery={[REAL.lawnDiningNight, REAL.lawnNightStage, REAL.floralEntrance, lawn, celebration, floral]}
      ctaImage={REAL.lawnDiningNight}
    />
  ),
});

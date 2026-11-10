import { createFileRoute } from "@tanstack/react-router";
import { REAL } from "@/lib/photos";
import { VenuePage } from "@/components/site/VenuePage";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Guest Rooms – Vrindavan Vatika" },
      { name: "description", content: "Comfortable guest rooms at Vrindavan Vatika so family stays close to every celebration." },
      { property: "og:title", content: "Guest Rooms – Vrindavan Vatika" },
      { property: "og:description", content: "Rest, refresh and stay close to every ritual." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <VenuePage
      hero={REAL.room}
      eyebrow="Guest Rooms"
      title="Rest between the rituals"
      subtitle="Calm, comfortable rooms that keep your family close to every moment."
      introTitle={["A stay as", "warm as the welcome"]}
      intro="Our rooms offer a quiet retreat for the couple, elders and out-of-town guests — just steps from the hall and lawn, so no one misses a moment."
      introImage={REAL.room}
      stats={[{ k: "Rooms", v: "TBA" }, { k: "Tariff", v: "On request" }]}
      listTitle="Room amenities"
      list={["Comfortable bedding", "Attached bathrooms (to confirm)", "Air-conditioning", "Ceiling fan", "Housekeeping (to confirm)", "Getting-ready space"]}
      gallery={[REAL.room, REAL.facade, REAL.hallWide]}
      ctaImage={REAL.room}
    />
  ),
});

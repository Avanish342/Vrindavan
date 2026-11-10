export type Setting = "indoor" | "outdoor" | "both";

export function suggestVenue(setting: Setting, needsStay: boolean): string[] {
  const v = setting === "indoor" ? ["Banquet Hall"] : setting === "outdoor" ? ["Wedding Lawn"] : ["Banquet Hall", "Wedding Lawn"];
  return needsStay ? [...v, "Guest Rooms"] : v;
}

export function planMessage(p: { event: string; guests: number; date: string; venues: string[] }) {
  return `Hello Vrindavan Vatika, I am planning a ${p.event} for about ${p.guests} guests${p.date ? ` on ${p.date}` : ""}. Interested in: ${p.venues.join(", ")}. Please share more details.`;
}

// Real photographs of the venue, served from the CDN via .asset.json pointers.
import facadeDusk from "@/assets/facade_dusk.jpg.asset.json";
import hallWide from "@/assets/hall_interior_wide.jpg.asset.json";
import hallGuests from "@/assets/hall_interior_guests.jpg.asset.json";
import lawnNightStage from "@/assets/lawn_night_stage.jpg.asset.json";
import lawnDiningNight from "@/assets/lawn_dining_night.jpg.asset.json";
import floralEntranceNight from "@/assets/floral_entrance_night.jpg.asset.json";
import stageLotus from "@/assets/stage_lotus.jpg.asset.json";
import roomInterior from "@/assets/room_interior.jpg.asset.json";
import menuCard from "@/assets/catering_menu_card.jpg.asset.json";

export const REAL = {
  facade: facadeDusk.url,
  hallWide: hallWide.url,
  hallGuests: hallGuests.url,
  lawnNightStage: lawnNightStage.url,
  lawnDiningNight: lawnDiningNight.url,
  floralEntrance: floralEntranceNight.url,
  stageLotus: stageLotus.url,
  room: roomInterior.url,
  menuCard: menuCard.url,
} as const;

export const REAL_ALT: Record<keyof typeof REAL, string> = {
  facade: "Vrindavan Vatika banquet hall and lawn building at dusk",
  hallWide: "Banquet hall interior with chandeliers, sofas and a decorated stage",
  hallGuests: "Guests seated in the Vrindavan Vatika banquet hall",
  lawnNightStage: "Wedding lawn at night with fairy lights and a decorated stage",
  lawnDiningNight: "Open-air lawn dining under a canopy of string lights",
  floralEntrance: "Floral arch entrance gateway lit up at night",
  stageLotus: "Wedding stage with a lotus backdrop and hanging florals",
  room: "Guest room at Vrindavan Vatika",
  menuCard: "Vrindavan Vatika vegetarian wedding menu card",
};

import facadeDusk from "@/assets/facade_dusk.jpg";
import hallWide from "@/assets/hall_interior_wide.jpg";
import hallGuests from "@/assets/hall_interior_guests.jpg";
import lawnNightStage from "@/assets/lawn_night_stage.jpg";
import lawnDiningNight from "@/assets/lawn_dining_night.jpg";
import floralEntranceNight from "@/assets/floral_entrance_night.jpg";
import stageLotus from "@/assets/stage_lotus.jpg";
import roomInterior from "@/assets/room_interior.jpg";
import menuCard from "@/assets/catering_menu_card.jpg";

export const REAL = {
  facade: facadeDusk,
  hallWide,
  hallGuests,
  lawnNightStage,
  lawnDiningNight,
  floralEntrance: floralEntranceNight,
  stageLotus,
  room: roomInterior,
  menuCard,
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

// Central brand + contact config. Replace placeholders with real business details.
export const SITE = {
  name: "Vrindavan Vatika",
  tagline: "Where Every Celebration Becomes a Beautiful Memory.",
  phone: "+91 00000 00000", // placeholder
  whatsapp: "910000000000", // placeholder, digits only with country code
  email: "hello@vrindavanvatika.example", // placeholder
  address: "Gaya Road, Islampur, Nalanda, Bihar", // from the venue's own menu card
  mapsUrl: "https://maps.app.goo.gl/xCUxfeqawTHsuC6F7",
  mapsEmbed: "https://maps.google.com/maps?q=25.1400194,85.1978283&z=16&output=embed",
  social: { instagram: "#", facebook: "#", youtube: "#" },
};

export const WHATSAPP_MESSAGE =
  "Hello Vrindavan Vatika, I am interested in booking your venue. Please share more details.";

export const whatsappLink = () =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/banquet-hall", label: "Banquet Hall" },
  { to: "/lawn", label: "Lawn" },
  { to: "/rooms", label: "Rooms" },
  { to: "/weddings", label: "Weddings" },
  { to: "/decor", label: "Décor" },
  { to: "/gallery", label: "Gallery" },
  { to: "/facilities", label: "Facilities" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
  { to: "/plan-your-event", label: "Plan Your Event" },
] as const;

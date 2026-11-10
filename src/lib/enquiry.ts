export type Enquiry = {
  name: string; phone: string; email: string; eventType: string;
  date: string; guests: string; venue: string; message: string;
};

export function validateEnquiry(f: Enquiry) {
  const e: Partial<Record<keyof Enquiry, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name";
  const digits = f.phone.replace(/[\s\-+()]/g, "");
  if (!/^(91)?[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit mobile number";
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email";
  if (!f.eventType) e.eventType = "Select an event type";
  if (!f.date) e.date = "Choose a preferred date";
  if (f.guests && !/^\d+$/.test(f.guests)) e.guests = "Numbers only";
  return e;
}

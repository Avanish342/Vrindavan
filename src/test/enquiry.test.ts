import { describe, expect, it } from "vitest";
import { validateEnquiry } from "@/lib/enquiry";

const ok = { name: "Asha Rao", phone: "9876543210", email: "", eventType: "Wedding", date: "2027-02-14", guests: "300", venue: "", message: "" };

describe("enquiry validation", () => {
  it("accepts a valid enquiry", () => expect(validateEnquiry(ok)).toEqual({}));
  it("rejects a short phone number", () => expect(validateEnquiry({ ...ok, phone: "12345" }).phone).toBeDefined());
  it("requires event type and date", () => {
    const e = validateEnquiry({ ...ok, eventType: "", date: "" });
    expect(e.eventType).toBeDefined();
    expect(e.date).toBeDefined();
  });
});

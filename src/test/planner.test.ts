import { describe, expect, it } from "vitest";
import { suggestVenue, planMessage } from "@/lib/planner";

describe("event planner", () => {
  it("indoor suggests the banquet hall", () => expect(suggestVenue("indoor", false)).toEqual(["Banquet Hall"]));
  it("both with stay suggests all three", () => expect(suggestVenue("both", true)).toEqual(["Banquet Hall", "Wedding Lawn", "Guest Rooms"]));
  it("message includes guests and venues", () => {
    const m = planMessage({ event: "Wedding", guests: 300, date: "", venues: ["Wedding Lawn"] });
    expect(m).toContain("300 guests");
    expect(m).toContain("Wedding Lawn");
  });
});

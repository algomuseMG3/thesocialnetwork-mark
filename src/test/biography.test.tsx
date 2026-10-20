import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { timeline, companies } from "../data";
import { Timeline } from "../components/Timeline";
import { CompanyCards } from "../components/CompanyCards";

afterEach(cleanup);

describe("Historical milestones", () => {
  it("dates Facebook's founding to 4 February 2004", () => {
    expect(timeline.find((item) => item.year === "2004")?.date).toBe("2004-02-04");
  });
  it("dates open registration to September 2006", () => {
    expect(timeline.find((item) => item.year === "2006")?.date).toBe("2006-09-26");
  });
  it("requires an age of at least 13 for the 2006 milestone", () => {
    expect(timeline.find((item) => item.year === "2006")?.minimumAge).toBe(13);
  });
  it("requires a valid email for the 2006 milestone", () => {
    expect(timeline.find((item) => item.year === "2006")?.requiresValidEmail).toBe(true);
  });
  it("dates the IPO to 18 May 2012", () => {
    expect(timeline.find((item) => item.year === "2012")?.date).toBe("2012-05-18");
  });
  it("places Instagram's announcement and completion in 2012", () => {
    const item = timeline.find((entry) => entry.year === "2012");
    expect([item?.acquisitionAnnounced, item?.acquisitionCompleted]).toEqual([
      "2012-04-09",
      "2012-09-06",
    ]);
  });
  it("places WhatsApp's announcement and completion in 2014", () => {
    const item = timeline.find((entry) => entry.year === "2014");
    expect([item?.acquisitionAnnounced, item?.acquisitionCompleted]).toEqual([
      "2014-02-19",
      "2014-10-06",
    ]);
  });
  it("dates the Meta rebranding to 28 October 2021", () => {
    expect(timeline.find((item) => item.year === "2021")?.date).toBe("2021-10-28");
  });
});

describe("Expanders", () => {
  it("opens each timeline's own details and closes it again", () => {
    render(<Timeline />);
    for (const item of timeline) {
      const button = screen.getByRole("button", { name: `${item.year} — ${item.title}` });
      if (button.getAttribute("aria-expanded") === "true") fireEvent.click(button);
      fireEvent.click(button);
      expect(screen.getByText(item.details)).toBeInTheDocument();
      fireEvent.click(button);
      expect(screen.queryByText(item.details)).not.toBeInTheDocument();
    }
  });
  it("opens each company's own information and closes it again", () => {
    render(<CompanyCards />);
    for (const company of companies) {
      const button = screen.getByRole("button", { name: company.name });
      fireEvent.click(button);
      expect(screen.getByText(company.more)).toBeInTheDocument();
      fireEvent.click(button);
      expect(screen.queryByText(company.more)).not.toBeInTheDocument();
    }
  });
});

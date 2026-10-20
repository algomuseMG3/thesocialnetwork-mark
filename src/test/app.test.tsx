import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App Component", () => {
  it("renders the main website title and hero section", () => {
    render(<App />);

    // Verify main headings are present in the DOM
    expect(
      screen.getByRole("heading", { name: "The Social Network", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Early Beginnings", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Timeline", level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Companies and Ventures", level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Challenges and Impact", level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Lessons for Entrepreneurs", level: 2 }),
    ).toBeInTheDocument();
  });
});

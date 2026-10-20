import { useState } from "react";
import { timeline } from "../data";
import { Button } from "./Button";

/**
 * Timeline Component
 * Renders an interactive vertical timeline of key milestones in Zuckerberg's journey.
 * Uses React useState to expand/collapse details for individual milestones.
 */
export function Timeline() {
  // State: stores index of currently expanded item.
  // Initialized to 0 so the first milestone (2004) is visible by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Toggle handler: clicking an open item closes it; clicking another item opens it.
  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="timeline" className="section">
      <div className="container">
        <h2>Timeline</h2>
        <p className="muted">Click on a year to read more.</p>
        <div className="timeline">
          {timeline.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.year}
                className={isOpen ? "timeline-item open" : "timeline-item"}
                onClick={() => handleToggle(index)}
              >
                {/* Accessible expander button: keyboard navigable with Enter/Space */}
                <Button
                  className="expand-toggle"
                  aria-expanded={isOpen}
                  aria-controls={`milestone-${item.year}`}
                >
                  <span className="year">{item.year}</span> — {item.title}
                </Button>

                <p>{item.short}</p>

                {/* Conditional rendering: details are rendered only when item is open */}
                {isOpen && (
                  <div className="details" id={`milestone-${item.year}`}>
                    <p>{item.details}</p>
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevents parent card click from toggling
                    >
                      Source →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

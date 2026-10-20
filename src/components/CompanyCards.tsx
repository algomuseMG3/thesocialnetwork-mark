import { useState } from "react";
import { companies } from "../data";
import { Button } from "./Button";

/**
 * CompanyCards Component
 * Displays interactive cards for key platforms: Facebook, Instagram, WhatsApp, and Meta.
 * Clicking a card or title button expands additional background details and links.
 */
export function CompanyCards() {
  // State: stores the name of the currently expanded company ("" = none open)
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  // Toggle company card expansion
  function handleToggle(companyName: string) {
    setSelectedCompany(selectedCompany === companyName ? "" : companyName);
  }

  return (
    <section id="companies" className="section alt">
      <div className="container">
        <h2>Companies and Ventures</h2>
        <p className="muted">Click a card to see more information.</p>
        <div className="card-grid">
          {companies.map((company) => {
            const isSelected = selectedCompany === company.name;

            return (
              <div
                key={company.name}
                className="card clickable"
                onClick={() => handleToggle(company.name)}
              >
                {/* CSS letter badge matching the brand palette */}
                <div className="badge" style={{ backgroundColor: company.color }}>
                  {company.letter}
                </div>

                <h3>
                  <Button
                    className="expand-toggle"
                    aria-expanded={isSelected}
                    aria-controls={`company-${company.name}`}
                  >
                    {company.name}
                  </Button>
                </h3>

                <p>{company.description}</p>
                <p className="relation">{company.relationship}</p>

                {/* Expanded details shown only when card is selected */}
                {isSelected && (
                  <div className="details" id={`company-${company.name}`}>
                    <p>{company.more}</p>
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()} // Avoid triggering parent toggle
                    >
                      Official website →
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

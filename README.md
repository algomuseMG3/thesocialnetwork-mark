HEAD
# The Social Network — Mark Zuckerberg's Journey

An interactive, responsive React + TypeScript web application b tracing Mark Zuckerberg's entrepreneurial journey from a Harvard dorm room to the global scale of Meta Platforms, Inc.

---

## 1. Project Purpose & Overview

The project provides an objective, historically verified case study of how Facebook was conceived, scaled, and managed through major acquisitions and regulatory milestones. It is designed around a clean blue-and-white theme (`#1877f2` and `#ffffff`) across 6 core sections:

1. **Introduction & Hero (`#home`):** Overview of Mark Zuckerberg as a Facebook co-founder and current Chairman & CEO of Meta Platforms, Inc.
2. **Early Beginnings (`#beginnings`):** The progression from Facemash (2003) to founding TheFacebook on 4 February 2004 with co-founders Eduardo Saverin, Dustin Moskovitz, Chris Hughes, and Andrew McCollum, followed by the summer 2004 relocation to Palo Alto and angel investment from Peter Thiel.
3. **Interactive Chronological Timeline (`#timeline`):** Clickable milestones spanning 2004 to 2021 (founding, domain acquisition, open registration in 2006, 2012 IPO, Instagram & WhatsApp acquisitions, 2021 Meta rebranding).
4. **Companies & Ventures (`#companies`):** Expandable cards detailing Facebook, Instagram, WhatsApp, and Meta, distinguishing co-founding from strategic multi-billion dollar acquisitions.
5. **Challenges & Impact (`#impact`):** Global user connectivity, the 2018–2019 Cambridge Analytica scandal and $5B FTC settlement, content moderation with the Oversight Board, and an expandable **Film vs. Reality** factual comparison.
6. **Lessons for Entrepreneurs & References (`#lessons`):** Strategic takeaways for student founders, verified citations from primary sources (SEC, FTC, Meta Newsroom, Britannica), and image attribution.

---

## 2. Technologies Used

- **Frontend:** React 19 + TypeScript
- **Development and production build:** Vite 8
- **Styling:** Custom CSS, Tailwind CSS v4 reset, and Google Fonts
- **Testing:** Vitest 4 + React Testing Library + JSDOM

---

## 3. Folder & File Guide

```text
the-social-network-story/
├── package.json               # Dependencies and npm scripts
├── package-lock.json          # Exact installed dependency versions
├── index.html                 # Page metadata and React mount point
├── vite.config.ts             # Vite and React/Tailwind plugins
├── vitest.config.ts           # Test runner configuration
├── tsconfig.json              # TypeScript settings
├── eslint.config.js            # Lint rules
├── .prettierrc                 # Formatting preferences
├── public/                    # Favicon and crawler instructions
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── main.tsx               # Starts React and loads the stylesheet
│   ├── App.tsx                # Assembles page sections and reference content
│   ├── data.ts                # Timeline, company, and citation data
│   ├── styles.css             # Theme, layout, responsive styles, and Tailwind reset
│   ├── components/
│   │   ├── Navbar.tsx         # In-page navigation links
│   │   ├── Intro.tsx           # Hero and portrait
│   │   ├── Timeline.tsx        # Expandable historical milestones
│   │   ├── CompanyCards.tsx    # Expandable company information
│   │   └── Button.tsx          # Native button wrapper for expanders
│   └── test/
│       ├── setup.ts            # Testing Library matchers
│       ├── app.test.tsx        # Required page sections
│       └── biography.test.tsx  # Historical data and expander behavior
```

---

## 4. Main Components & Responsibilities

| Component          | File                                                                 | Responsibility                                                                                                                    |
| :----------------- | :------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **`Navbar`**       | [`src/components/Navbar.tsx`](src/components/Navbar.tsx)             | Renders the top sticky navigation bar with hash links (`#home`, `#beginnings`, `#timeline`, `#companies`, `#impact`, `#lessons`). |
| **`Intro`**        | [`src/components/Intro.tsx`](src/components/Intro.tsx)               | Presents the hero section, introducing Mark Zuckerberg as Facebook co-founder and Meta CEO.                                       |
| **`Timeline`**     | [`src/components/Timeline.tsx`](src/components/Timeline.tsx)         | Loops through milestones in `data.ts`, rendering clickable chronological cards with expand/collapse details.                      |
| **`CompanyCards`** | [`src/components/CompanyCards.tsx`](src/components/CompanyCards.tsx) | Renders interactive venture cards for Facebook, Instagram, WhatsApp, and Meta with brand lettermarks.                             |
| **`Button`**       | [`src/components/Button.tsx`](src/components/Button.tsx)             | Accessible button primitive supporting keyboard navigation (Enter/Space) and ARIA state attributes.                               |
| **`App`**          | [`src/App.tsx`](src/App.tsx)                                         | Assembles all six sections, references, and image credits.                                                                        |
| **`data.ts`**      | [`src/data.ts`](src/data.ts)                                         | Keeps timeline milestones, company information, and references separate from page markup.                                         |

---

## 5. How Interactivity Works (Viva Defense Guide)

### A. The Timeline Component (`Timeline.tsx`)

- **State Hook:** `const [openIndex, setOpenIndex] = useState<number | null>(0);` tracks which milestone is open. Initialized to `0` so the 2004 founding is visible by default.
- **Toggle Logic:** When a user clicks a milestone, `handleToggle(index)` checks if `openIndex === index`. If already open, it sets `openIndex` to `null` (closing it); otherwise, it sets it to `index` (opening it).
- **Conditional Rendering:** `{isOpen && <div className="details">...</div>}` ensures extra details and source links are only inserted into the DOM for the active milestone.
- **Accessibility:** The `<Button>` element includes `aria-expanded={isOpen}` and `aria-controls={"milestone-" + item.year}` so screen readers notify visually impaired users when a section expands.

### B. The Company Cards (`CompanyCards.tsx`)

- **State Hook:** `const [selectedCompany, setSelectedCompany] = useState<string>("");` stores the name of the active company card.
- **Stopping Event Bubbling (`e.stopPropagation()`):** The official website link inside each card uses `onClick={(e) => e.stopPropagation()}`. This prevents the click from bubbling up to the parent card container, ensuring the external link opens without toggling the card closed.

### C. Native `<details>` for Film vs. Reality

The **Film vs. Reality** section in `App.tsx` uses the native HTML `<details>` and `<summary>` tags. This provides accessible accordion expand/collapse behavior directly in the browser with **zero custom JavaScript or external libraries**.

---

## 6. Historical Facts vs. _The Social Network_ (2010)

| Aspect                      | Hollywood Film (_The Social Network_, 2010)                                        | Verified Historical Fact                                                                                                                                                                            |
| :-------------------------- | :--------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Founding Team**           | Dramatized as primarily Zuckerberg working in isolation.                           | Zuckerberg **co-founded** Facebook with Harvard classmates Eduardo Saverin, Dustin Moskovitz, Chris Hughes, and Andrew McCollum.                                                                    |
| **Creation Motivation**     | Created out of spite after a breakup to gain entry into elite Harvard final clubs. | Mark had been dating future wife Priscilla Chan since 2003; his motivation was creating a transparent online campus directory.                                                                      |
| **Eduardo Saverin Dispute** | Depicted as personal malice and betrayal.                                          | While Saverin's initial shareholding was diluted—triggering lawsuits settled in 2009 with Saverin recognized as a co-founder—Saverin confirmed the movie dramatized the conflict for entertainment. |
| **Technical Development**   | Portrayed as chaotic, alcohol-fueled hacking sprints.                              | Developing Facebook was a disciplined software engineering effort in PHP and MySQL with shared technical contributions.                                                                             |
| **Acquisitions & Meta**     | Not covered (film concludes in 2004/2005).                                         | Facebook acquired Instagram in 2012 ($1B) and WhatsApp in 2014 ($19B+), and rebranded parent company to Meta Platforms, Inc. on 28 October 2021.                                                    |

---

## 7. How to Run Locally

### Prerequisites

- **Node.js** (v20 or v22 LTS recommended, v24 supported).

### Steps

1. Navigate to the project root:
   ```bash
   cd the-social-network-story-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL (usually `http://localhost:3000` or `http://localhost:5173`) in your browser.

### Running Checks & Tests

- **Run Unit Tests:**
  ```bash
  npm test
  ```
  _(Verifies all 11 tests across `app.test.tsx` and `biography.test.tsx`.)_
- **Run Code Linting:**
  ```bash
  npm run lint
  ```
- **Run Production Build:**
  ```bash
  npm run build
  ```

---

## 8. References & Image Credits

- **Primary References:** US FTC (2019 $5B Settlement), Meta Newsroom (Meta Rebranding, WhatsApp Acquisition), SEC 8-K Filings, Britannica (Mark Zuckerberg, Facebook).
- **Mark Zuckerberg Photo:** Anthony Quintano, CC BY 2.0, via Wikimedia Commons.
- **Widener Library Photo:** Wikimedia Commons (Public Domain / Creative Commons).
- **Company Badges:** Custom CSS lettermarks created with `Archivo Black`, not trademarked corporate logos.
=======
# thesocialnetwork-mark
An interactive, responsive React and TypeScript case study of Mark Zuckerberg’s journey from Harvard to Meta, featuring a clickable timeline, expandable company cards, and cited references.
>>>>>>> 04eadd41d3983f3c055e6cdc8d12220bcf9a2885

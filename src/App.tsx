import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Timeline } from "./components/Timeline";
import { CompanyCards } from "./components/CompanyCards";
import { sources } from "./data";

const harvardPhoto =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Widener_Library,_Harvard_University.jpg?width=600";

/**
 * App Component
 * Main page assembling all 6 core sections of Mark Zuckerberg's entrepreneurial journey.
 */
export default function App() {
  return (
    <>
      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Section 1: Introduction / Hero */}
      <Intro />

      {/* Section 2: Early Beginnings */}
      <section id="beginnings" className="section alt">
        <div className="container home-grid">
          <div>
            <h2>Early Beginnings</h2>
            <p>
              Zuckerberg started programming as a teenager, developing early communication tools
              like "ZuckNet" for his father's dental practice. He entered Harvard University in 2002
              to study computer science and psychology. In late 2003, he built "Facemash", a campus
              website comparing student photos. Although university administration shut it down due
              to network disruption and privacy complaints, it highlighted the immense campus
              appetite for social connectivity.
            </p>
            <p>
              Recognizing this demand, Zuckerberg collaborated with fellow Harvard students
              <strong> Eduardo Saverin, Dustin Moskovitz, Chris Hughes, and Andrew McCollum</strong>
              . On <strong>4 February 2004</strong>, they launched <em>"TheFacebook"</em> from their
              Kirkland House dorm room. Within a month, more than half of Harvard's undergraduates
              had registered profiles.
            </p>
            <p>
              The platform rapidly expanded across Stanford, Columbia, Yale, and the rest of the Ivy
              League. In the summer of 2004, Zuckerberg and the core team moved to Palo Alto,
              California, where they received their first major angel investment from Peter Thiel.
              Zuckerberg subsequently took a leave of absence from Harvard to devote himself
              full-time to building the company.
            </p>
          </div>
          <figure>
            <img src={harvardPhoto} alt="Widener Library at Harvard University" />
            <figcaption>Widener Library, Harvard University. Image: Wikimedia Commons</figcaption>
          </figure>
        </div>
      </section>

      {/* Section 3: Interactive Chronological Timeline */}
      <Timeline />

      {/* Section 4: Facebook, Instagram, WhatsApp, and Meta */}
      <CompanyCards />

      {/* Section 5: Impact and Challenges */}
      <section id="impact" className="section">
        <div className="container">
          <h2>Challenges and Impact</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Connecting People</h3>
              <p>
                Facebook fundamentally transformed digital communication, enabling families,
                friends, and global communities to interact seamlessly. Today, Meta's family of apps
                serves billions of active users worldwide each month.
              </p>
            </div>
            <div className="card">
              <h3>Privacy and Data Governance</h3>
              <p>
                Rapid growth brought intense regulatory scrutiny. In 2018, revelations emerged
                regarding Cambridge Analytica's unauthorized data collection. In July 2019, Facebook
                reached a landmark $5 billion settlement with the US Federal Trade Commission (FTC)
                over user privacy violations.{" "}
                <a
                  href="https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  FTC source →
                </a>
              </p>
            </div>
            <div className="card">
              <h3>Content Moderation</h3>
              <p>
                Managing misinformation, hate speech, and civic discourse at global scale remains an
                ongoing challenge. In October 2020, an independent Oversight Board was formed to
                review high-stakes content moderation decisions and promote transparency.{" "}
                <a
                  href="https://www.oversightboard.com/news/719406882003532-announcing-the-oversight-board-s-first-cases-and-appointment-of-trustees/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Board source →
                </a>
              </p>
            </div>
          </div>

          {/* Expandable Film vs Reality Section */}
          <details className="note film-note">
            <summary>Film vs. Reality (Historical Facts vs. Hollywood Drama)</summary>
            <p>
              David Fincher's critically acclaimed 2010 film <em>The Social Network</em> (written by
              Aaron Sorkin) is a dramatized retelling of Facebook's founding based on Ben Mezrich's
              book <em>The Accidental Billionaires</em>. While capturing the era's energy, key
              elements were fictionalized:
            </p>
            <ul>
              <li>
                <strong>Motivation:</strong> The film portrays Zuckerberg creating Facebook out of
                spite after being dumped, seeking social status and entry into elite Harvard final
                clubs. In reality, Zuckerberg had already been dating his future wife, Priscilla
                Chan, since 2003, and his primary motivation was building a transparent online
                directory.
              </li>
              <li>
                <strong>Co-founder Conflict:</strong> The movie dramatizes extreme interpersonal
                hostility between Zuckerberg and Eduardo Saverin. While Saverin's initial
                shareholding was diluted—triggering lawsuits that settled confidentially in 2009
                with Saverin recognized as a co-founder—Saverin himself confirmed the movie
                dramatized events for entertainment.
              </li>
              <li>
                <strong>Coding & Technical Creation:</strong> The film depicts chaotic, impulsive
                coding binges. In reality, developing Facebook was a disciplined software
                engineering effort in PHP and MySQL, with crucial contributions from co-founders
                Dustin Moskovitz, Chris Hughes, and Andrew McCollum.
              </li>
            </ul>
            <p>
              <a
                href="https://www.theguardian.com/business/andrew-clark-on-america/2010/sep/23/facebook-mark-zuckerberg"
                target="_blank"
                rel="noreferrer"
              >
                The Guardian: The Social Network — Fact and Fiction Analysis →
              </a>
            </p>
          </details>
        </div>
      </section>

      {/* Section 6: Lessons for Entrepreneurs, References, and Credits */}
      <section id="lessons" className="section alt">
        <div className="container">
          <h2>Lessons for Entrepreneurs</h2>
          <ol className="lessons">
            <li>
              <strong>Start with a focused niche:</strong> Facebook began strictly within Harvard
              before methodically expanding to other Ivy League campuses and then global audiences.
            </li>
            <li>
              <strong>Anticipate technological shifts:</strong> Strategic acquisitions of
              mobile-first platforms like Instagram (2012) and WhatsApp (2014) positioned the
              company for the smartphone era.
            </li>
            <li>
              <strong>Scale demands governance:</strong> Rapid user adoption without strong privacy,
              data, and content safeguards inevitably generates substantial regulatory and
              reputational risk.
            </li>
          </ol>

          <h3>Conclusion</h3>
          <p>
            Mark Zuckerberg's journey illustrates how an inventive college project can evolve into a
            global conglomerate reshaping how humanity communicates. For student entrepreneurs, it
            demonstrates the power of rapid product iteration alongside the critical importance of
            ethical technology leadership.
          </p>

          <h3>References</h3>
          <ul className="refs">
            {sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>

          <h3>Image Credits</h3>
          <ul className="refs">
            <li>
              Mark Zuckerberg at F8 2019 — Anthony Quintano, CC BY 2.0, via{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_F8_2019_Keynote_(32830578717)_(cropped).jpg"
                target="_blank"
                rel="noreferrer"
              >
                Wikimedia Commons
              </a>
            </li>
            <li>
              Widener Library, Harvard — via{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Widener_Library,_Harvard_University.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Wikimedia Commons
              </a>{" "}
              (Public Domain / Creative Commons)
            </li>
            <li>Company badges are custom CSS letter marks, not trademarked corporate logos.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

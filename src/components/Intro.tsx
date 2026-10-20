// Intro Component: Hero banner introducing Mark Zuckerberg as Facebook co-founder
const photo =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mark_Zuckerberg_F8_2019_Keynote_(32830578717)_(cropped).jpg?width=600";

export function Intro() {
  return (
    <section id="home" className="section home">
      <div className="container home-grid">
        <div>
          <h1>The Social Network</h1>
          <p className="subtitle">From a Harvard Dorm Room to a Global Platform</p>
          <p>
            Mark Zuckerberg is an American software engineer and entrepreneur who co-founded
            Facebook in 2004 alongside Harvard classmates Eduardo Saverin, Dustin Moskovitz, Chris
            Hughes, and Andrew McCollum.
          </p>
          <p>
            Today, he serves as the Chairman and CEO of Meta Platforms, Inc., the parent company
            operating Facebook, Instagram, WhatsApp, and technologies for the future metaverse.
          </p>
          <a href="#timeline" className="button">
            Explore His Journey
          </a>
        </div>
        <figure>
          <img src={photo} alt="Mark Zuckerberg speaking at the F8 conference in 2019" />
          <figcaption>Mark Zuckerberg at F8 2019. Photo: Anthony Quintano, CC BY 2.0</figcaption>
        </figure>
      </div>
    </section>
  );
}

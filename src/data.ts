// ============================================================================
// DATA STORE: The Social Network — Mark Zuckerberg's Journey
// ============================================================================
// Centralized data objects for the website. Separating content from UI
// components keeps React code clean, readable, and easy to maintain.
// ============================================================================

/**
 * Type definition for a milestone in the chronological timeline.
 */
export interface TimelineMilestone {
  year: string;
  date?: string;
  title: string;
  short: string;
  details: string;
  source: string;
  minimumAge?: number;
  requiresValidEmail?: boolean;
  acquisitionAnnounced?: string;
  acquisitionCompleted?: string;
}

/**
 * Type definition for a major company or venture in Zuckerberg's journey.
 */
export interface CompanyVenture {
  name: string;
  letter: string;
  color: string;
  description: string;
  relationship: string;
  more: string;
  link: string;
}

/**
 * Type definition for verified references and citations.
 */
export interface ReferenceSource {
  label: string;
  url: string;
}

// ----------------------------------------------------------------------------
// 1. Interactive Timeline Milestones
// ----------------------------------------------------------------------------
export const timeline: TimelineMilestone[] = [
  {
    year: "2004",
    date: "2004-02-04",
    source: "https://www.britannica.com/money/Facebook",
    title: "TheFacebook is launched",
    short: "Mark Zuckerberg co-founds TheFacebook at Harvard.",
    details:
      "On 4 February 2004, Zuckerberg launched TheFacebook for Harvard students with co-founders Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes. It soon spread to other universities, and that summer the team moved to Palo Alto, California.",
  },
  {
    year: "2005",
    source: "https://www.britannica.com/money/Facebook",
    title: "The name becomes Facebook",
    short: "The company drops “The” and becomes simply Facebook.",
    details:
      "In 2005 the company bought the facebook.com domain and changed its name. It also opened the site to high school networks during the year.",
  },
  {
    year: "2006",
    date: "2006-09-26",
    minimumAge: 13,
    requiresValidEmail: true,
    source: "https://techcrunch.com/2006/09/26/facebook-just-launched-open-registrations/",
    title: "Open to everyone",
    short:
      "In September 2006, registration opens to anyone aged 13 or older with a valid email address.",
    details:
      "On 26 September 2006, Facebook allowed anyone aged 13 or older with a valid email address to sign up. The News Feed feature was also introduced earlier that month.",
  },
  {
    year: "2012",
    date: "2012-05-18",
    acquisitionAnnounced: "2012-04-09",
    acquisitionCompleted: "2012-09-06",
    source: "https://www.britannica.com/money/Facebook",
    title: "Facebook goes public",
    short: "Facebook holds its IPO and buys Instagram.",
    details:
      "Facebook began trading on NASDAQ on 18 May 2012. It announced an agreement to acquire Instagram on 9 April for approximately $1 billion in cash and stock; the acquisition was completed on 6 September. The announced price was not the final closing value.",
  },
  {
    year: "2014",
    acquisitionAnnounced: "2014-02-19",
    acquisitionCompleted: "2014-10-06",
    source: "https://about.fb.com/news/2014/02/facebook-to-acquire-whatsapp/",
    title: "WhatsApp acquisition",
    short: "Facebook agrees to buy the messaging app WhatsApp.",
    details:
      "On 19 February 2014, Facebook announced an agreement to acquire WhatsApp for about $16 billion in cash and stock, plus $3 billion in restricted stock units for employees. The deal closed on 6 October 2014. Its value changed with Facebook's share price.",
  },
  {
    year: "2021",
    date: "2021-10-28",
    source: "https://about.fb.com/news/2021/10/facebook-company-is-now-meta/",
    title: "The company becomes Meta",
    short: "Facebook, Inc. changes its company name to Meta Platforms.",
    details:
      "On 28 October 2021, Zuckerberg announced the new name Meta, reflecting the company's focus on the “metaverse” and virtual reality. The Facebook app itself kept its name.",
  },
];

// ----------------------------------------------------------------------------
// 2. Company Cards & Key Ventures
// ----------------------------------------------------------------------------
export const companies: CompanyVenture[] = [
  {
    name: "Facebook",
    letter: "f",
    color: "#1877f2",
    description: "A social networking site for sharing posts, photos and updates with friends.",
    relationship: "Co-founded by Mark Zuckerberg in 2004.",
    more: "Facebook started as a Harvard-only website and grew into one of the largest social networks in the world, with billions of monthly users.",
    link: "https://about.meta.com/technologies/facebook-app/",
  },
  {
    name: "Instagram",
    letter: "I",
    color: "#c13584",
    description: "A photo and video sharing app.",
    relationship:
      "Founded by Kevin Systrom and Mike Krieger in 2010. Acquired by Facebook in 2012.",
    more: "Zuckerberg did not create Instagram. Facebook announced its acquisition in April 2012 at approximately $1 billion in cash and stock; the deal closed in September 2012.",
    link: "https://about.instagram.com/",
  },
  {
    name: "WhatsApp",
    letter: "W",
    color: "#25a244",
    description: "A messaging app for text, voice and video calls.",
    relationship: "Founded by Jan Koum and Brian Acton in 2009. Acquired by Facebook in 2014.",
    more: "Zuckerberg did not create WhatsApp. Facebook announced the acquisition in February 2014 and completed it in October. The announced terms included about $16 billion in cash and stock plus $3 billion in employee restricted stock units.",
    link: "https://www.whatsapp.com/about",
  },
  {
    name: "Meta",
    letter: "M",
    color: "#0866ff",
    description: "The parent company of Facebook, Instagram and WhatsApp.",
    relationship: "Renamed from Facebook, Inc. in 2021. Zuckerberg is its chairman and CEO.",
    more: "Meta also works on virtual reality (Meta Quest headsets) and artificial intelligence projects alongside its social apps.",
    link: "https://about.meta.com/",
  },
];

// ----------------------------------------------------------------------------
// 3. Verified References and Citations
// ----------------------------------------------------------------------------
export const sources: ReferenceSource[] = [
  { label: "Meta – Company Info (official)", url: "https://about.meta.com/company-info/" },
  {
    label: "Meta Newsroom – Introducing Meta (2021)",
    url: "https://about.fb.com/news/2021/10/facebook-company-is-now-meta/",
  },
  {
    label: "Meta Newsroom – Facebook to acquire WhatsApp (2014)",
    url: "https://about.fb.com/news/2014/02/facebook-to-acquire-whatsapp/",
  },
  {
    label: "Britannica – Mark Zuckerberg",
    url: "https://www.britannica.com/biography/Mark-Zuckerberg",
  },
  { label: "Britannica – Facebook", url: "https://www.britannica.com/money/Facebook" },
  {
    label: "FTC – $5 billion privacy penalty (2019)",
    url: "https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook",
  },
  {
    label: "TechCrunch – Open registration (26 September 2006)",
    url: "https://techcrunch.com/2006/09/26/facebook-just-launched-open-registrations/",
  },
  {
    label: "Meta – Instagram acquisition announcement (9 April 2012)",
    url: "https://investor.atmeta.com/investor-news/press-release-details/2012/Facebook-to-Acquire-Instagram/default.aspx",
  },
  {
    label: "BBC – Instagram acquisition completed (6 September 2012)",
    url: "https://www.bbc.com/news/business-19514191",
  },
  {
    label: "SEC – WhatsApp acquisition completed (6 October 2014)",
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000132680114000037/fb_8-kxclosingxofxwhatsapp.htm",
  },
  {
    label: "Oversight Board – First cases (2020)",
    url: "https://www.oversightboard.com/news/719406882003532-announcing-the-oversight-board-s-first-cases-and-appointment-of-trustees/",
  },
  {
    label: "The Guardian – The Social Network: fact and fiction (2010)",
    url: "https://www.theguardian.com/business/andrew-clark-on-america/2010/sep/23/facebook-mark-zuckerberg",
  },
];

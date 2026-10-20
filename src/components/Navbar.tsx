// Navigation bar: Provides sticky top navigation with smooth-scrolling hash links

interface NavLinkItem {
  href: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { href: "#home", label: "Home" },
  { href: "#beginnings", label: "Beginnings" },
  { href: "#timeline", label: "Timeline" },
  { href: "#companies", label: "Companies" },
  { href: "#impact", label: "Impact" },
  { href: "#lessons", label: "Lessons" },
];

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <span className="logo">thesocialnetwork</span>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

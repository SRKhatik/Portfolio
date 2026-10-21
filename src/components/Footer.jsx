import { FiArrowUp } from "react-icons/fi";
import { brand, profile, socials, navLinks, contact } from "../data/profile";
import { Icon } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="logo"><span className="logo__mark">SK</span>{profile.name}<span className="logo__dot">.</span></a>
          <p className="muted">{profile.roles.slice(0, 2).join(" · ")} · Founder of <a href={brand.website} target="_blank" rel="noreferrer" className="footer__brand">{brand.name}</a></p>
          <p className="muted small">{contact.email} · {contact.phone}</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          {navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </nav>
        <div className="socials">
          {socials.map((s) => (
            <a key={s.id} href={s.url} target={s.id === "email" ? undefined : "_blank"} rel="noreferrer" aria-label={s.label}><Icon name={s.id} /></a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React & ❤ in India.</span>
        <a href="#home" className="icon-btn" aria-label="Back to top"><FiArrowUp /></a>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiUser, FiBriefcase, FiZap, FiClock, FiFolder, FiMail, FiChevronRight } from "react-icons/fi";
import { SiShopify } from "react-icons/si";
import { img } from "../data/assets";
import { navLinks, profile } from "../data/profile";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = navLinks.map((l) => l.id);

/** Icon for each nav item (keyed by section id). MKOJI uses the brand logo. */
const NAV_ICONS = {
  about: FiUser,
  services: FiBriefcase,
  skills: FiZap,
  experience: FiClock,
  "shopify-work": SiShopify,
  projects: FiFolder,
  contact: FiMail,
};

function NavIcon({ id }) {
  if (id === "mkoji") return <img src={img("mkoji")} alt="" className="nav-icon nav-icon--img" width="18" height="18" />;
  const I = NAV_ICONS[id] || FiChevronRight;
  return <I className="nav-icon" aria-hidden="true" />;
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    // close the menu if the screen grows to desktop width or Esc is pressed
    const mq = window.matchMedia("(min-width: 1100px)");
    const close = () => setOpen(false);
    const onKey = (e) => e.key === "Escape" && close();
    mq.addEventListener("change", close);
    window.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? "nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <a href="#home" className="logo" aria-label={`${profile.name}, home`}>
            <span className="logo__mark">SK</span>
            {profile.name}
            <span className="logo__dot">.</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : ""}>
                <NavIcon id={l.id} />
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a href="#contact" className="btn btn--primary btn--sm nav__cta">Hire me</a>
            <button className="icon-btn nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed menu inside the 68px bar */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className={active === l.id ? "is-active" : ""}
              >
                <span className="mobile-menu__icon"><NavIcon id={l.id} /></span>
                <span className="mobile-menu__label">{l.label}</span>
                <FiChevronRight className="mobile-menu__arrow" aria-hidden="true" />
              </motion.a>
            ))}
            <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>Hire me</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

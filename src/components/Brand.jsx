import { FiArrowUpRight, FiCheck, FiGlobe, FiShoppingBag } from "react-icons/fi";
import { SiAmazon, SiFlipkart, SiGoogle, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import { brand } from "../data/profile";
import { img } from "../data/assets";
import { Section, Reveal } from "./ui";

const LINK_ICONS = {
  website: FiGlobe,
  amazon: SiAmazon,
  flipkart: SiFlipkart,
  googleshopping: FiShoppingBag,
  google: SiGoogle,
  instagram: SiInstagram,
  youtube: SiYoutube,
  facebook: SiFacebook,
};

export default function Brand() {
  const [primary, ...rest] = brand.links;
  const stores = rest.filter((l) => ["amazon", "flipkart", "googleshopping", "google"].includes(l.id));
  const social = rest.filter((l) => !stores.includes(l));

  return (
    <Section
      id="mkoji"
      eyebrow={`My brand · ${brand.role}`}
      title={`${brand.name}: my own ${brand.product.toLowerCase()} brand`}
      intro={brand.description}
    >
      <div className="brand">
        <Reveal className="brand__hero">
          <div className="brand__id">
            <img src={img(brand.logo)} alt={`${brand.name} logo`} className="brand__logo" width="120" height="120" loading="lazy" />
            <div>
              <span className="brand__since">Since {brand.founded}</span>
              <h3 className="brand__name">{brand.name}<span>.</span></h3>
            </div>
          </div>
          <p className="brand__tag">{brand.tagline}</p>

          <span className="flow__label">Flavours</span>
          <div className="brand__flavours">
            {brand.flavours.map((f) => <span key={f} className="flavour">{f}</span>)}
          </div>

          <ul className="brand__highlights">
            {brand.highlights.map((h) => <li key={h}><FiCheck /> {h}</li>)}
          </ul>

          <a href={primary.url} target="_blank" rel="noreferrer" className="btn btn--primary">
            <FiGlobe /> Visit {primary.label} <FiArrowUpRight />
          </a>
        </Reveal>

        <Reveal i={1} className="brand__links">
          <span className="flow__label">Shop MKOJI on</span>
          <div className="brand__stores">
            {stores.map((l) => {
              const I = LINK_ICONS[l.id] || FiGlobe;
              return (
                <a key={l.id} href={l.url} target="_blank" rel="noreferrer" className={`card brand-link brand-link--${l.id}`}>
                  <span className="brand-link__icon"><I /></span>
                  <span className="brand-link__label">{l.label}</span>
                  <FiArrowUpRight className="brand-link__arrow" />
                </a>
              );
            })}
          </div>

          <span className="flow__label">Follow MKOJI</span>
          <div className="socials socials--left">
            {social.map((l) => {
              const I = LINK_ICONS[l.id] || FiGlobe;
              return (
                <a key={l.id} href={l.url} target="_blank" rel="noreferrer" aria-label={`MKOJI on ${l.label}`} title={l.label}><I /></a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

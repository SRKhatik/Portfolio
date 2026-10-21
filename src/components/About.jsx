import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { profile, brand } from "../data/profile";
import { img } from "../data/assets";
import { Section, Reveal } from "./ui";

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Developer by craft, seller-minded by experience">
      <div className="about">
        <Reveal className="about__text">
          {profile.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </Reveal>
        <Reveal i={1} className="brand-card">
          <div className="brand-card__id">
            <img src={img(brand.logo)} alt={`${brand.name} logo`} width="72" height="72" loading="lazy" />
            <div>
              <span className="brand-card__label">{brand.role} · since {brand.founded}</span>
              <h3 className="brand-card__name">{brand.name}<span>.</span></h3>
            </div>
          </div>
          <p className="brand-card__tag">{brand.tagline}</p>
          <p>
            Beyond client work, I run my own {brand.product.toLowerCase()} brand. I built the site and handle its
            selling on Amazon, Flipkart and Google myself.
          </p>
          <div className="brand-card__cta">
            <a href="#mkoji" className="btn btn--ghost btn--sm">See the brand <FiArrowDown /></a>
            <a href={brand.website} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">mkoji.com <FiArrowUpRight /></a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

import { services } from "../data/profile";
import { Section, Reveal } from "./ui";
import { Icon } from "./icons";

export default function Services() {
  return (
    <Section id="services" eyebrow="What I do" title="Services" intro="From storefront to marketplace to automation: what an online brand needs to sell more.">
      <div className="grid grid--3">
        {services.map((s, i) => (
          <Reveal key={s.title} i={i % 3} className="card service">
            <div className="service__icon"><Icon name={s.icon} /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="tags">{s.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

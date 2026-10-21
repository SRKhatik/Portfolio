import { FiCheckCircle, FiChevronRight } from "react-icons/fi";
import { marketplace } from "../data/profile";
import { Section, Reveal } from "./ui";
import { Icon } from "./icons";

export default function Marketplace() {
  return (
    <Section id="marketplace" eyebrow="Marketplace" title="Amazon & Flipkart listings, powered by AI" intro={marketplace.intro}>
      <div className="grid grid--2">
        {marketplace.platforms.map((p, i) => (
          <Reveal key={p.id} i={i} className={`card market market--${p.id}`}>
            <div className="market__head">
              <span className="market__logo"><Icon name={p.id} /></span>
              <h3>{p.name}</h3>
            </div>
            <ul className="checklist">
              {p.points.map((pt) => <li key={pt}><FiCheckCircle /> {pt}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="flow" aria-label="AI listing workflow">
        <span className="flow__label">My AI listing workflow</span>
        <ol className="flow__steps">
          {marketplace.aiFlow.map((step, i) => (
            <li key={step}>
              <span className="flow__num">{i + 1}</span>
              {step}
              {i < marketplace.aiFlow.length - 1 && <FiChevronRight className="flow__arrow" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

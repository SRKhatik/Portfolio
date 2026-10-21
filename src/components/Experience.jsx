import { experience, education, achievements } from "../data/profile";
import { img } from "../data/assets";
import { Section, Reveal } from "./ui";
import { FiAward, FiBookOpen } from "react-icons/fi";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience" intro="Where I've worked and what I shipped.">
      <ol className="timeline">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.company} i={i % 2} className="timeline__item">
            <span className="timeline__dot" aria-hidden="true" />
            <div className="card timeline__card">
              <div className="timeline__head">
                {e.logo && <img src={img(e.logo)} alt="" className="timeline__logo" loading="lazy" width="44" height="44" />}
                <div>
                  <h3>{e.role}</h3>
                  <p className="timeline__company">{e.company}</p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{e.period}</span>
                  <span className="timeline__type">{e.type}</span>
                </div>
              </div>
              <ul>
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="grid grid--2 edu">
        <Reveal className="card">
          <h3 className="card__title"><FiBookOpen /> Education</h3>
          <ul className="edu__list">
            {education.map((e) => (
              <li key={e.title}><strong>{e.title}</strong><span>{e.place}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal i={1} className="card">
          <h3 className="card__title"><FiAward /> Achievements</h3>
          <ul className="edu__list">
            {achievements.map((a) => <li key={a}><strong>{a}</strong></li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups } from "../data/profile";
import { Section } from "./ui";

const LEVELS = ["", "Familiar", "Proficient", "Advanced"];

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active);

  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills" intro="The stack I use every day, including the AI tools that make me faster.">
      <div className="tabs" role="tablist" aria-label="Skill categories">
        {skillGroups.map((g) => (
          <button key={g.id} role="tab" aria-selected={active === g.id} className={`tab ${active === g.id ? "is-active" : ""}`} onClick={() => setActive(g.id)}>
            {active === g.id && <motion.span layoutId="tab-bg" className="tab__bg" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            <span className="tab__label">{g.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={group.id}
          className="skills"
          role="tabpanel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {group.skills.map((s, i) => (
            <motion.li key={s.name} className="skill" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.035 }}>
              <span className="skill__name">{s.name}</span>
              <span className="skill__level" title={LEVELS[s.level]}>
                {[1, 2, 3].map((d) => <i key={d} className={d <= s.level ? "on" : ""} />)}
                <small>{LEVELS[s.level]}</small>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </Section>
  );
}

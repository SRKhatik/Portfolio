import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/profile";
import { img } from "../data/assets";
import { Section } from "./ui";

export default function Projects() {
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" eyebrow="Side projects" title="Projects" intro="Apps, tools and experiments I've built.">
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c} className={`chip ${filter === c ? "is-active" : ""}`} onClick={() => setFilter(c)} aria-pressed={filter === c}>
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid--3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              layout
              key={p.title}
              className="card project"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project__media">
                {p.image ? (
                  <img src={img(p.image)} alt={`${p.title} screenshot`} loading="lazy" width="900" height="560" />
                ) : (
                  <div className="project__placeholder" aria-hidden="true">
                    <span>{"{ }"}</span>
                    {p.title}
                  </div>
                )}
                <span className="project__cat">{p.category}</span>
              </div>
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                <div className="project__links">
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Live demo</a>}
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer"><FiGithub /> Code</a>}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

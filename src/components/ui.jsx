import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

/** Fades/slides children in once when scrolled into view. */
export function Reveal({ children, i = 0, as = "div", className, ...rest }) {
  const M = motion[as];
  return (
    <M className={className} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} {...rest}>
      {children}
    </M>
  );
}

export function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <Reveal className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="section-title">{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

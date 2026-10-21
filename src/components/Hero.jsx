import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FiArrowRight, FiDownload, FiMessageCircle, FiMapPin, FiCpu } from "react-icons/fi";
import { SiShopify, SiAmazon } from "react-icons/si";
import { profile, socials, stats } from "../data/profile";
import { img } from "../data/assets";
import { Icon } from "./icons";
import { useGitHub } from "../hooks/useGitHub";

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1600 : cleared ? 250 : deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="typewriter" aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const badges = [
  { icon: SiShopify, label: "Shopify Expert", cls: "badge--a" },
  { icon: FiCpu, label: "AI Agents", cls: "badge--b" },
  { icon: SiAmazon, label: "Amazon · Flipkart", cls: "badge--c" },
];

const enter = (delay, y = 14) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero({ onAsk }) {
  const { data } = useGitHub();
  const liveStats = stats.map((s) => (s.live === "repos" && data?.user?.repos ? { ...s, value: data.user.repos } : s));

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__text">
          <motion.span className="pill" {...enter(0)}>
            <span className="pulse" /> Available for work
          </motion.span>
          <motion.h1 {...enter(0.08, 20)}>
            Hi, I&apos;m <span className="grad">{profile.name}</span>
          </motion.h1>
          <motion.p className="hero__role" {...enter(0.18)}>
            <Typewriter words={profile.roles} />
          </motion.p>
          <motion.p className="hero__tagline" {...enter(0.26)}>{profile.tagline}</motion.p>
          <motion.p className="hero__loc" {...enter(0.32)}>
            <FiMapPin /> {profile.location}
          </motion.p>

          <motion.div className="hero__cta" {...enter(0.4)}>
            <a href="#contact" className="btn btn--primary">Let&apos;s work together <FiArrowRight /></a>
            <button className="btn btn--ghost" onClick={onAsk}><FiMessageCircle /> Ask SRK agent</button>
            <a href={profile.resume} download className="btn btn--ghost"><FiDownload /> Resume</a>
          </motion.div>

          <motion.div className="socials" {...enter(0.5)}>
            {socials.map((s) => (
              <a key={s.id} href={s.url} target={s.id === "email" ? undefined : "_blank"} rel="noreferrer" aria-label={s.label} title={s.label}>
                <Icon name={s.id} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="avatar">
            <div className="avatar__ring" aria-hidden="true" />
            <img src={img(profile.photo)} alt={profile.name} width="320" height="320" />
          </div>
          {badges.map(({ icon: I, label, cls }, i) => (
            <motion.div
              key={label}
              className={`badge ${cls}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
            >
              <I /> {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container">
        <motion.div className="stats" {...enter(0.6)}>
          {liveStats.map((s) => (
            <div key={s.label} className="stat">
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

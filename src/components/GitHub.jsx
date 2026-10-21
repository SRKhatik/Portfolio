import { FiStar, FiGithub, FiExternalLink } from "react-icons/fi";
import { useGitHub } from "../hooks/useGitHub";
import { socials } from "../data/profile";
import { Section, Reveal } from "./ui";

const LANG_COLORS = { JavaScript: "#f1e05a", HTML: "#e34c26", CSS: "#563d7c", Liquid: "#67b8de", TypeScript: "#3178c6" };
const github = socials.find((s) => s.id === "github");
const timeAgo = (d) => {
  const days = Math.floor((Date.now() - new Date(d)) / 864e5);
  if (days < 30) return `${days || 1}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

export default function GitHub() {
  const { data, loading, error } = useGitHub();
  const repos = data?.repos.slice(0, 6) ?? [];

  return (
    <Section id="github" eyebrow="Open source" title="Latest on GitHub" intro="Pulled live from my GitHub profile.">
      {error && (
        <p className="muted center">
          GitHub is taking a break right now. <a href={github.url} target="_blank" rel="noreferrer">See my profile instead.</a>
        </p>
      )}
      <div className="grid grid--3">
        {loading && Array.from({ length: 6 }, (_, i) => <div key={i} className="card repo skeleton" aria-hidden="true" />)}
        {repos.map((r, i) => (
          <Reveal key={r.id} i={i % 3} className="card repo">
            <a href={r.html_url} target="_blank" rel="noreferrer" className="repo__name">
              <FiGithub /> {r.name}
            </a>
            <p>{r.description || "No description yet."}</p>
            <div className="repo__meta">
              {r.language && (
                <span><i className="lang-dot" style={{ background: LANG_COLORS[r.language] || "var(--accent)" }} />{r.language}</span>
              )}
              <span><FiStar /> {r.stars}</span>
              <span>Updated {timeAgo(r.updated_at)}</span>
              {r.homepage && <a href={r.homepage} target="_blank" rel="noreferrer" aria-label={`${r.name} live demo`}><FiExternalLink /></a>}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="center mt">
        <a href={github.url} target="_blank" rel="noreferrer" className="btn btn--ghost">
          <FiGithub /> View all {data?.user?.repos ?? ""} repositories
        </a>
      </div>
    </Section>
  );
}

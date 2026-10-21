import { FiArrowUpRight, FiMapPin, FiCheck } from "react-icons/fi";
import { SiShopify } from "react-icons/si";
import { shopifyStores, shopifyWorkScope } from "../data/profile";
import { Section, Reveal } from "./ui";

const domain = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const initials = (name) => name.split(/[\s&-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function ShopifyWork() {
  return (
    <Section
      id="shopify-work"
      eyebrow="Professional work"
      title="Shopify stores I've worked on"
      intro="Live client stores across India, the USA, UK, Canada and Australia, built and maintained as a professional Shopify developer."
    >
      <div className="grid grid--3">
        {shopifyStores.map((s, i) => {
          const Tag = s.url ? "a" : "div";
          return (
            <Reveal key={s.name} i={i % 3}>
              <Tag
                className={`card shop ${s.url ? "shop--link" : ""}`}
                {...(s.url && { href: s.url, target: "_blank", rel: "noreferrer", "aria-label": `Visit ${s.name} (opens in new tab)` })}
              >
                <div className="shop__top">
                  <span className="shop__mono" aria-hidden="true">{initials(s.name)}</span>
                  <span className="shop__badge"><SiShopify /> Shopify</span>
                </div>
                <h3>{s.name}</h3>
                <div className="shop__meta">
                  {s.industry && <span className="tag">{s.industry}</span>}
                  {s.region && <span className="shop__region"><FiMapPin /> {s.region}</span>}
                </div>
                {s.url ? (
                  <span className="shop__visit">{domain(s.url)} <FiArrowUpRight /></span>
                ) : (
                  <span className="shop__visit shop__visit--muted">Client project</span>
                )}
              </Tag>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="scope">
        <span className="flow__label">What I deliver on client stores</span>
        <ul>
          {shopifyWorkScope.map((s) => <li key={s}><FiCheck /> {s}</li>)}
        </ul>
      </Reveal>
    </Section>
  );
}

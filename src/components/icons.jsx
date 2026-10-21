import { SiShopify, SiAmazon, SiFlipkart } from "react-icons/si";
import { FiCpu, FiCode, FiServer, FiTrendingUp, FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

/** Icon lookup for string keys used in profile.js */
const icons = {
  shopify: SiShopify,
  ai: FiCpu,
  market: SiAmazon,
  amazon: SiAmazon,
  flipkart: SiFlipkart,
  code: FiCode,
  server: FiServer,
  rocket: FiTrendingUp,
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  email: FiMail,
};

export const Icon = ({ name, ...props }) => {
  const C = icons[name] || FiCode;
  return <C aria-hidden="true" {...props} />;
};

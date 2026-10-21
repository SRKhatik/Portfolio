import { useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Marketplace from "./components/Marketplace";
import Brand from "./components/Brand";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ShopifyWork from "./components/ShopifyWork";
import Projects from "./components/Projects";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AskSRK from "./components/AskSRK";

export default function App() {
  const [askOpen, setAskOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
      <a href="#main" className="skip">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero onAsk={() => setAskOpen(true)} />
        <About />
        <Services />
        <Marketplace />
        <Brand />
        <Skills />
        <Experience />
        <ShopifyWork />
        <Projects />
        <GitHub />
        <Contact />
      </main>
      <Footer />
      <AskSRK open={askOpen} setOpen={setAskOpen} />
    </MotionConfig>
  );
}

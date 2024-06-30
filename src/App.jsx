import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";
import Education from "./component/Education/Education";
import Portfolio from "./component/Portfolio/Portfolio";
import Skills from "./component/Skills/Skills";
import Works from "./component/Works/Works";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Education />
      <Skills />
      <Portfolio />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

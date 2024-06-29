import React from "react";
import "./Intro.css";
import FloatinDiv from "../Floating/Floating";
import Crown from "./images/c.png";
import Thumbup from "./images/thumbup.png";
import Sk from "../../img/sk.1.png";
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Instagram from "../../img/instagram.png"
import Github from "../../img/github.png"
import Linkdin from "../../img/linkedin.png"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';
import { Link } from "react-scroll";
function Intro() {
/*Animation*/ 
  const transition ={duration:2,type:'spring'}

  const theme =useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="Intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white':''}}>Hi ! I Am </span>
          <span>Shubham R.Khatik </span>
          <span style={{color: darkMode? 'white':''}}>
           Shopify & Frontend Web Developer Passionate about designing beautiful web
            interfaces,producing the quality work, Based in India.
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/SRKhatik">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-khatik-4a21a9203/">
            <img src={Linkdin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/shubham.khatik.1650/">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>

    { /*right side*/}

      <div className="i-right">
        
        <img src={Vector1} alt="V1" />
        <img src={Vector2} alt="v2" />
        <img src={Sk} alt=""/>
        <motion.div 
         initial={{ top: "-4%", left: "74%" }}
         whileInView={{ left: "68%" }}
         transition={transition}
         className="floating-div">
        <FloatinDiv image={Crown} text1="Shopify" text2="Developer" />
        </motion.div>

        <motion.div initial={{ left: "19rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div">
        <FloatinDiv image={Thumbup} text1="Full-Stack" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;

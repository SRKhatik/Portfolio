import React from "react";
import "./Education.css";
import Idea from "../../img/idea.jpeg"
import Deve from "../../img/dev-1.jpg";
import Code from "../../img/code-1.png";
import Deployment from "../../img/deployment.png";
import Debug from "../../img/debug-1.png";

import { AiFillSafetyCertificate } from "react-icons/ai";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="education" id="qualification">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Qualification</span>
          <span>Education</span>
          <div>
            <h3 style={{ color: darkMode ? "white" : "" }}>
              <AiFillSafetyCertificate /> FullStack Development
            </h3>
            <span style={{ color: darkMode ? "white" : "" }}>
              Unacademy-RELEVEL
            </span>

            <h3 style={{ color: darkMode ? "white" : "" }}>
              <AiFillSafetyCertificate /> Diploma Mechanical Engg.
            </h3>
            <span style={{ color: darkMode ? "white" : "" }}>
              M.M.P.C Warora(MSBTE )
            </span>

            <h3 style={{ color: darkMode ? "white" : "" }}>
              <AiFillSafetyCertificate /> CAD-CAM Diploma
            </h3>
            <span style={{ color: darkMode ? "white" : "" }}>IIPDM Nagpur</span>

            <h3 style={{ color: darkMode ? "white" : "" }}>
              <AiFillSafetyCertificate /> HSC
            </h3>
            <span style={{ color: darkMode ? "white" : "" }}>
              Bharat jr.college Hinganghat
            </span>

            <h3 style={{ color: darkMode ? "white" : "" }}>
              <AiFillSafetyCertificate /> SSC
            </h3>
            <span style={{ color: darkMode ? "white" : "" }}>
              Dr.B.R.Ambedkar School Hinganghat
            </span>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          className="w-mainCircle"
          initial={{ rotate: 0 }}
          whileInView={{ rotate:360 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring" }}
        >
          <div className="w-secCircle">
            <img src={Idea} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Deployment} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Code} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Deve} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Debug} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};
export default Education;

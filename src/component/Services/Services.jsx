import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import {
  RiBracesLine,
  RiLayout4Fill,
  RiDatabaseFill,
  RiComputerFill,
} from "react-icons/ri";
import Resume from "./resume.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="services" id="services">
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>

        <span style={{ color: darkMode ? "white" : "" }}>
          services that provides the best quality and at the request of the
          client,
          <br />
          with professional Frontend & Backend work and customer support.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* Right side */}
      <div className="cards">
        {/* First card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "17rem" }}
          transition={transition}
        >
          <Card
            icon={<RiBracesLine />}
            heading={" Frontend "}
            details={"Javascript, React-JS, Html, Css, Bootstrap"}
          />
        </motion.div>

        {/* Second card */}
        <motion.div
          initial={{ bottom:"12rem",right: "6rem" }}
          whileInView={{ right: "-1rem" }}
          transition={transition}
        >
          <Card icon={<RiDatabaseFill />} heading={" DataBase "} details={"My-SQL, MongoDB"} />
        </motion.div>

        {/* Third card */}
        <motion.div
          initial={{ top: "17rem", left: "25rem" }}
          whileInView={{ left: "17rem" }}
          transition={transition}
        >
          <Card
            icon={<RiComputerFill />}
            heading={"Software "}
            details={" Vs-code, Postman, GitHub, Ms-office, Illustrator"}
          />
        </motion.div>

        {/* Fourth card */}
        <motion.div
          initial={{right: "1rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
        >
          <Card
            icon={<RiLayout4Fill />}
            heading={" Backend "}
            details={"Node-js,  Express-js, JSON, Api, Npm "}
          />
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;


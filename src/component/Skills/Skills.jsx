import React from "react";
import "./Skills.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import liquid from "../../img/liquid.jpg";
import shopify from "../../img/shopify-logo.png";
import Js from "../../img/javascript-1.svg";
import Html from "../../img/html-1.svg";
import Css from "../../img/css-3.svg";
import Reactjs from "../../img/react-2.svg";
import Bootstrap from "../../img/bootstrap-5-1.svg";
import Node from "../../img/nodejs-icon.svg";
import Express from "../../img/express.png";
import Git from "../../img/git-icon.svg";
import Npm from "../../img/npm.png";
import Postman from "../../img/postman.svg";
import mong from "../../img/mongodb.svg";
import Sql from "../../img/mysql-4.svg";
import github from "../../img/github.png";
import Vscode from "../../img/vs-code.png";
import figma from "../../img/figma.png";
import Ms from "../../img/ms.svg";

function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skills" id="skills">
      <h2 style={{ color: darkMode ? "white" : "" }}>Skills</h2>
      <h1>Frontend</h1>
      <div className="achievement1">
        <div className="achievement2">
          <div className="circle1">
            <img
              src={shopify}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>shopify</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={liquid}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>liquid</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Js}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>JavaScript</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Html}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>HTML</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Css}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>CSS</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Reactjs}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>React-JS</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Bootstrap}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>Bootstrap</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------*/}
      <h1>Backend</h1>
      <div className="achievement1">
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Node}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>Node-JS</span>
          <span style={{ color: darkMode ? "white" : "" }}>Basic</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Express}
              alt="Image"
              style={{ width: "100%", height: "100%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>Express-JS</span>
          <span style={{ color: darkMode ? "white" : "" }}>Basic</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Git}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>GIT</span>
          <span style={{ color: darkMode ? "white" : "" }}>Basic</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Npm}
              alt="Image"
              style={{ width: "60%", height: "70%", marginTop: "2px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>NPM</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------*/}
      <h1>Database</h1>
      <div className="achievement1">
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Sql}
              alt="Image"
              style={{ width: "60%", height: "60%", marginTop: "5px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>My-Sql</span>
          <span style={{ color: darkMode ? "white" : "" }}>Basic</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={mong}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>MongoDB</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------*/}
      <h1>Other Skills</h1>
      <div className="achievement1">
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Vscode}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>VSCode</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={github}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>GitHub</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Postman}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>Postman</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={figma}
              alt="Image"
              style={{ width: "auto", height: "80%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>Figma</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src={Ms}
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{ color: darkMode ? "gray" : "" }}>Ms-office</span>
          <span style={{ color: darkMode ? "white" : "" }}>Intermediate</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;

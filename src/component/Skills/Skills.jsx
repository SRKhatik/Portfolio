import React from "react";
import "./Skills.css";
import { useContext } from "react";
import {themeContext} from "../../Context";

function Skills() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="skills" id="skills">
      <h2 style={{color: darkMode? 'white':''}}>Skills</h2>
      <h1>Frontend</h1>
      <div className="achievement1">
        <div className="achievement2" >
          <div className="circle1">
            <img
              src="src/img/javascript-1.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>JavaScript</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/html-1.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>HTML</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/css-3.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>CSS</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/react-2.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>React-JS</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/bootstrap-5-1.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Bootstrap</span>
          <span style={{color: darkMode? 'white':''}}>Basic</span>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------*/}
      <h1>Backend</h1>
      <div className="achievement1">
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/nodejs-icon.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Node-JS</span>
          <span style={{color: darkMode? 'white':''}}>Basic</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/express.png"
              alt="Image"
              style={{ width: "100%", height: "100%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Express-JS</span>
          <span style={{color: darkMode? 'white':''}}>Basic</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/git-icon.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>GIT</span>
          <span style={{color: darkMode? 'white':''}}>Basic</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/npm.png"
              alt="Image"
              style={{ width: "60%", height: "70%", marginTop: "2px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>NPM</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/postman.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Postman</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------*/}
      <h1>Database</h1>
      <div className="achievement1">
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/mysql-4.svg"
              alt="Image"
              style={{ width: "60%", height: "60%", marginTop: "5px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>My-Sql</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/mongodb.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>MongoDB</span>
          <span style={{color: darkMode? 'white':''}}>Basic</span>
        </div>
      </div>
      {/*---------------------------------------------------------------------------------*/}
      <h1>Other Skills</h1>
      <div className="achievement1">
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/vs-code.png"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>VSCode</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/github-logo.png"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>GitHub</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/ms.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Ms-office</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/Autocad.png"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "1px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Auto-CAD</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/creo.png"
              alt="Image"
              style={{ width: "65%", height: "60%", marginTop: "5px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Creo3.0</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/catia.png"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>CATIA</span>
          <span style={{color: darkMode? 'white':''}}>Intermediate</span>
        </div>
        <div className="achievement2">
          <div className="circle1">
            <img
              src="src/img/illustrator.svg"
              alt="Image"
              style={{ width: "70%", height: "70%", marginTop: "5px" }}
            />
          </div>
          <span style={{color: darkMode? 'gray':''}}>Illustrator</span>
          <span style={{color: darkMode? 'white':''}}>Basic</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;

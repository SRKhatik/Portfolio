import React from "react";
import "./card.css"
import { useContext } from "react";
import { themeContext } from "../../Context";
function Card({ icon, heading, details }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card"style={{ background: darkMode ? "cornsilk" : "" }}>
      <span>{icon}</span>
      <span>{heading}</span>
      <span style={{ color: darkMode ? "black" : "" }}>{details}</span>
      <button className="c-button"
      > LEARN MORE</button>
    </div>
  );
}
export default Card;

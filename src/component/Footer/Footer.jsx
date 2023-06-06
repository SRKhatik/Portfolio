import React from "react";
import{RiInstagramFill,RiLinkedinBoxFill} from "react-icons/ri";
import {RxGithubLogo} from "react-icons/rx";
import Wave from "../../img/wave.png"
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
            <span>khatikshubham1995@gmail.com</span>
            <span>+91 8412949901</span>
            <div className="f-icons">
            <RxGithubLogo color="white" size={"3rem"}/>
            <RiInstagramFill color="white" size={"3rem"}/>
            <RiLinkedinBoxFill color="white" size={"3rem"}/>
            </div>
        </div>
    </div>
  )
}

export default Footer;
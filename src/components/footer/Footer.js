import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Riaz Mohammed A")}
        </p>
        {/* To add your signature image, place it in src/assets/images/ and reference it here */}
        {/* Example: <img src={require("../../assets/images/signature.png")} alt="Signature" style={{height: "40px", marginTop: "10px"}} /> */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Riaz Mohammed A{" "}
          <a
            href="https://github.com/riazmd3"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </p>
      </div>
    </Fade>
  );
}

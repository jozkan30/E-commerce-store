import React from "react";
import "./header.css";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className="header-card">
      <h3 className="header-img" id="e-comm">
      <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Make a house ... HOME")
              .pauseFor(200)
              .start();
          }}
        />
      </h3>
      <br />
      <img
        className="header-img"
        id="img"
        src="https://secure.img1-fg.wfcdn.com/im/97493477/resize-h800-w800%5Ecompr-r85/2111/211149099/Domenique+41.3%27%27+Wide+Rolling+Kitchen+Cart+with+Solid+Wood+Top.jpg"
        alt="1"
      />
     
    </div>
  );
}

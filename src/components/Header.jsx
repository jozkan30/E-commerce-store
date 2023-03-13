import React from "react";
import "./header.css";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div>
    <div className="header-card">
      <h3 className="header-img" id="e-comm">
      <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Design Your Dream Home")
              .pauseFor(200)
              .start();
          }}
        />
      </h3>
      <br />

      <img
        className="header-img"
        id="img"
        src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="1"
      
      />
      </div>
     <div className="head-card-2">
     <h3 className="ex" id="e-comm">
      10+ Years Experience 
      </h3>
     <img
        className="header-img"
        id="img"
        src="https://images.adsttc.com/media/images/632c/1ed8/5c11/c22d/15aa/f20e/slideshow/what-is-good-interior-design_7.jpg?1663835870"
        alt="1"
      />
      


     </div>
    </div>
  );
}

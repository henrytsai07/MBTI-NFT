import React, { useState } from "react";
import landing_b from "../assets/landing.mp4";




const Landing = () => {
  const [transition, setTransition] = useState(false);

  return (
    <><div className="landing">
      <div className="landing_content">
        <div className="big_title">MBTI BUNNY</div>
        <button className="launch" onClick={() => {
          setTransition(true); setTimeout(() => {
            window.location.href = "/home";
          }, 2000);
        } }>Launch</button>

      </div>

      <div className={`r_block ${transition ? "r_shown" : ""}`}></div>
      <div className={`l_block ${transition ? "l_shown" : ""}`}></div>
    </div><video src={landing_b} autoPlay muted loop /></>

  );
};

export default Landing;

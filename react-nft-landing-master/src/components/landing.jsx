import React, { useState } from "react";



const Landing = () => {
  const [transition, setTransition] = useState(false);
  const [buttonState, setButton] = useState("");
  const handleClick = () => {
    setButton("loading");
    // make asynchronous call
    setTimeout(() => {
      setButton("success");
    }, 3000);
  };

  return (
    <div className="landing">
      <div className="landing_content">
        <div className="big_title">MBTI BUNNY</div>
        <button className="launch" onClick={() => {setTransition(true);setTimeout(() =>{
        window.location.href = "/";
    }, 2000);}}>Launch</button>
        
      </div>

      <div className={`r_block ${transition ? "r_shown" : ""}`}></div>
      <div className={`l_block ${transition ? "l_shown" : ""}`}></div>
    </div>
  );
};

export default Landing;

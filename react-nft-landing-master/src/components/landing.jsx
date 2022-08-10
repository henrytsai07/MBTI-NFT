import React, { useState } from "react";

const Landing = () => {
    const [transition, setTransition] = useState(false);
    const collection = document.getElementsByClassName("r_block");
  return (
    <div className="landing">
        <div className="landing_content">
        <div className="big_title">
            MBTI BUNNY
        </div>
        <button className="launch" onClick={() => {if(transition === false){setTransition(true)}else{setTransition(false)}}}>
            Clicks
        </button>
        </div>
        
        <div className={`r_block ${transition ? "r_shown" : ""}`}></div>
        <div className={`l_block ${transition ? "l_shown" : ""}`}></div>



    </div>

  )
}

export default Landing
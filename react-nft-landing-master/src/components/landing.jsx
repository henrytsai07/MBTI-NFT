import React, { useState } from "react";

const Landing = () => {
    const [transition, setTransition] = useState(false);
  return (
    <div className="landing">
        <div className="content">
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
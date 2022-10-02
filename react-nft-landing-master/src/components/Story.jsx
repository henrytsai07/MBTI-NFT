import React from "react";
import home from "../assets/question_rabbit.png";
// import animate from "../assets/bunny_gif.gif"
import home_pic from "../assets/bunny_in_cloud.png"
export default function Home() {
  return (
    <div className="story">
      <div className="container">
      <img className="left_pic" src={home_pic}/>
      <img className="right_pic" src={home_pic}/>


        <div className="content">
          {/* <p className="sub-title">Launching Soon</p> */}
          <h1 className="title">Story</h1>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.
          </p>
        </div>

        {/* <div className="image-container">
          <div className="image">
            <img src={animate} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div> */}


      </div>
      
    </div>
  );
}

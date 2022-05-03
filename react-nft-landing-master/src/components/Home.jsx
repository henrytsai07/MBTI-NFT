import React from "react";
import home from "../assets/question_rabbit.png";
import videoBG from '../assets/cloud.mp4';
export default function Home() {
  return (
    <div className="home">
      <video src={videoBG} autoPlay muted loop/>
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">Your ID in Web3</h1>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

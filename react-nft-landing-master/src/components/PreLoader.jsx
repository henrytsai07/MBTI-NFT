import React, { useEffect } from "react";
import { preLoaderAnim } from "./Intro_Loader/preloader_anim";
import logo from "../assets/logo.png";


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();

    setTimeout(() => {

    }, 5000);
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>MBTI </span>
        <span>BUNNY </span>
        <span>
        <img src={logo} alt="logo" />
        </span>

      </div>
    </div>
  );
};

export default PreLoader;
import React from "react";
import ReactLoading from "react-loading";
import carrot from "../assets/carrot.png";

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading
        className="circle"
        type="spin"
        color="orange"
        height={300}
        width={300}
      />
      
      <img className="carrot" src={carrot} alt="carrot" />

    </div>
  );
}

import React from "react";
import Card from "./Card";
import ex from "../assets/question_rabbit.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <h2 className="title">What is MBTI Bunny?</h2>
          <p className="description">
            The first 10 users who sign up today will get free NFT
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={ex}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={ex}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
}

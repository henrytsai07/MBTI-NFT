import React from "react";
import Card from "./Card";
import ex from "../assets/question_rabbit.png";
import bunny_wiz from "../assets/cloud wiz rabbit.png"

export default function Free() {
  return (
    <div className="free">
      <img className="bunny_wiz" src={bunny_wiz}/>

      {/* <div className="container">
        <div className="content">
          <h2 className="title">What is MBTI Bunny?</h2>
          <p className="description">
            A unique collection of{" "}
            <strong>300 rabbits with different personalities</strong> that live
            on the Ethereum Blockchain. Every rabbit have its{" "}
            <strong>unique combination of traits and items</strong> that
            correspond to different personalities in <strong>Web3.0</strong>.
          </p>
          <img className="blackboard" src={blackboard}/>

        </div>

        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        
      </div> */}
      
      <div className="cards">
        {/* <div className="card1">
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
        </div> */}
        
      </div>
    </div>
  );
}

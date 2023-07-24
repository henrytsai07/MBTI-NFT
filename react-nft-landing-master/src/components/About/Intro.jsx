import React from "react";
import Card from "./Card";
import ex from "../../assets/question_rabbit.png";
import bunny_wiz from "../../assets/cloud wiz rabbit.png"

export default function Free() {
  return (
    <div className="free">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="left_pic">
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
          </div>
          <div class="col-md-4">
            <div class="content">
              {/* <p className="sub-title">Launching Soon</p> */}
              <h1 className="title">What is MBTI Bunny?</h1>
              <p className="description">
                A unique collection of{" "}
                <strong>300 rabbits with different personalities</strong> that live
                on the Ethereum Blockchain. Every rabbit have its{" "}
                <strong>unique combination of traits and items</strong> that
                correspond to different personalities in <strong>Web3.0</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}

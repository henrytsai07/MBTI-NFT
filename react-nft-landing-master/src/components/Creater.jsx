import React from "react";
import Card from "./Creator_Card";
import tia from "../assets/Tia.jpg";
import kevin from "../assets/Kevin.jpg";
import katie from "../assets/Katie.jpg";
import henry from "../assets/Henry.jpg";
import michelle from "../assets/Michelle.jpg";

import underground from "../assets/Underground.png";


export default function SuperRare() {
  const data = [
    {
      
      image: michelle,
      series: "Artist",
      title: "Yipudaha",
      tag: "INFP",
      time: 1,
    },
    {
      image: katie,
      series: "Artist",
      title: "Kaytea",
      tag: "ENFJ",
      time: 1,
    },
    {
      image: henry,
      series: "Programmer",
      title: "UnicornHen",
      tag: "ENTJ",
      time: 1,
    },
    {
      
      image: tia,
      series: "Marketing Director",
      title: "Haopiaoliang",
      tag: "INFP",
      time: 1,
    },
    
    {
      
      image: kevin,
      series: "Programmer",
      title: "Wangderful",
      tag: "ENFJ",
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      {/* <img className="underground" src={underground} /> */}

      <div className="title-container">
        <h2 className="title">MBTI BUNNY CREATORS</h2>
        <p className="description">
          
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>


    </div>
  );
}

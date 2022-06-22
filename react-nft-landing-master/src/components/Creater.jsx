import React from "react";
import Card from "./Creator_Card";
import ex from "../assets/question_rabbit.png";

export default function SuperRare() {
  const data = [
    {
      image: ex,
      series: "Marketing Director",
      title: "Haopiaoliang",
      tag: "ENFT",
      time: 1,
    },
    {
      image: ex,
      series: "Programmer",
      title: "UnicornHen",
      tag: "ENTJ",
      time: 1,
    },
    {
      image: ex,
      series: "Programmer",
      title: "Best_Kai",
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "Artist",
      title: "Yipudaha",
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "Artist",
      title: "Kaytea",
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">MBTI BUNNY CREATORS</h2>
        <p className="description">
          We have released four limited edition NFT's early which which can be
          bid on via <a target="_blank" rel="noopener noreferrer" href="https://magiceden.io/">Opensea</a>.
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
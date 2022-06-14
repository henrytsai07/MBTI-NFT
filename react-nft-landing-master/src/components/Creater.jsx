import React from "react";
import Card from "./Card";
import ex from "../assets/question_rabbit.png";

export default function SuperRare() {
  const data = [
    {
      image: ex,
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "Gloop Series",
      title: "Red Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "Gloop Series",
      title: "Green",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "Gloop Series",
      title: "Green",
      price: 2.99,
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
            // series={series}
            title={title}
            // price={price}
            // tag={tag}
            // time={time}
            // key={index}
          />
        ))}
      </div>
    </div>
  );
}

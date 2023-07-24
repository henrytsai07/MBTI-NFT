import React from "react";
import Card from "./About/Card";
import ex from "../assets/question_rabbit.png";

export default function SuperRare() {
  const data = [
    {
      image: ex,
      series: "GOLD LEVEL",
      title: "Bunny #1",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "GOLD LEVEL",
      title: "Bunny #2",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "GOLD LEVEL",
      title: "Bunny #3",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "GOLD LEVEL",
      title: "Bunny #4",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: ex,
      series: "Gloop Series",
      title: "Bunny #5",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Bunny Super Rare Auction</h2>
        <p className="description">
          We have released 20 limited edition NFT's early which which can be
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

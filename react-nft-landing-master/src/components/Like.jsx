import React from "react";
import solana_Banner from "../assets/Solana_Banner.png";


export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={solana_Banner} alt="Solana Banner" width = "300" height = "130"/>
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new NFT.
          </p>
        </div>
      </div>
    </div>
  );
}

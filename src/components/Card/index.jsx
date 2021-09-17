import React from "react";
import "./style.css";
import backgroundCard from "../../assets/images/bg-pattern-card.svg";
import photo from "../../assets/images/image-victor.jpg";

function Card() {
  return (
    <div className="card">
      <img src={backgroundCard} alt="" />
      <div className="circle">
        <img className="photo" src={photo} alt="" />
      </div>

      <div className="info">
        <div className="pessornalInfo">
          <h1 className="name">Victor Crest</h1>
          <h1 className="age">26</h1>
        </div>
        <p className="local">London</p>
      </div>

      <div className="allData">
        <div className="firstData">
          <h1 className="data">80k</h1>
          <p>Followers</p>
        </div>
        <div className="secondData">
          <h1 className="data">803k</h1>
          <p>Likes</p>
        </div>
        <div className="thirdData">
          <h1 className="data">1.4k</h1>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}

export { Card };

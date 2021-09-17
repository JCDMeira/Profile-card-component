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
    </div>
  );
}

export { Card };

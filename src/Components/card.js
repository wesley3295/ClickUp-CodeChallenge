import React from "react";
import "../assets/css/card.css";
import CardPic from "../assets/img/card_pic.png";
const card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <img src={CardPic} alt="Card Pic" />
        <h2>
          We are a high-level data <br /> storage bank
        </h2>
        <p>
          The place to store various data that you can access at any
          <br /> time through the internet and where you can carry it.
          <br /> This very flexible storage area has a high level of security.
          <br /> To enter into you own data you must enter the password
          <br /> that you created when you registered in this Data
          <br /> Warehouse.
        </p>
      </div>
    </div>
  );
};

export default card;

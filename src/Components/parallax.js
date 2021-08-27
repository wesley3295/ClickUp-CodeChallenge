import React from "react";
import "../assets/css/parallax.css";
import Parallax from "../assets/img/parallax.png";

const parallax = () => {
  return (
    <div className="parallax">
      <div className="parallax__card">
        <h1>
          {" "}
          Save your data
          <br /> storage here.
        </h1>
        <img src={Parallax} alt="Parallax" />
        <p>
          Data Warehouse is a data storage area that
          <br /> has been tested for security, so you can store
          <br /> your data here safely but not be afraid of
          <br /> being stolen by others.
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default parallax;

import React from "react";
import "../assets/css/about.css";
import Parallax from "./parallax";
import Card from "./card";
import Features from "./features";
import Header from "./header";
const about = () => {
  return (
    <div>
      <Header />
      <Parallax />
      <Card />
      <Features />
    </div>
  );
};

export default about;

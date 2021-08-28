import React from "react";
import "../assets/css/features.css";
import grid1 from "../assets/img/grid1.png";
import grid2 from "../assets/img/grid2.png";
import grid3 from "../assets/img/grid3.png";
import grid4 from "../assets/img/grid4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const features = () => {
  return (
    <div className="features">
      <div className="features__container">
        <h3>Features</h3>
        <p>
          Some of the features and advantages that we provide for those of you
          <br />
          who store data in this Data Warehouse.
        </p>
        <div className="features__grid">
          <img src={grid1} alt="grid1" />
          <div className="features__griditem1">
            <h3>Search Data</h3>
            <p>
              Don't worry if your data is very large, the Data Warehouse
              provides a search engine, which is useful for making it easier to
              find data effectively saving time.
            </p>
            <button>
              Learn More
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className="header__icon"
              />
            </button>
          </div>
          <div className="features__griditem2">
            <img src={grid2} alt="grid3" /> <h3>Search Data</h3>
            <p>
              Don't worry if your data is very large, the Data Warehouse
              provides a search engine, which is useful for making it easier to
              find data effectively saving time.
            </p>
            <button>
              Learn More
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className="header__icon"
              />
            </button>
          </div>
          <div className="features__griditem3">
            <img src={grid3} alt="grid3" /> <h3>Search Data</h3>
            <p>
              Don't worry if your data is very large, the Data Warehouse
              provides a search engine, which is useful for making it easier to
              find data effectively saving time.
            </p>
            <button>
              Learn More
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className="header__icon"
              />
            </button>
          </div>
          <div className="features__griditem4">
            <img src={grid4} alt="grid4" /> <h3>Search Data</h3>
            <p>
              Don't worry if your data is very large, the Data Warehouse
              provides a search engine, which is useful for making it easier to
              find data effectively saving time.
            </p>
            <button>
              Learn More
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className="header__icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;

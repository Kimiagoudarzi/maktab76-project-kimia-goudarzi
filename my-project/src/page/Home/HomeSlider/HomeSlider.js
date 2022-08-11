import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import cosmetic from "../../../assets/images/2.jpg";
import cream from "../../../assets/images/1.jpg";
import body from "../../../assets/images/3.jpg";
import shampo from "../../../assets/images/sh.jfif";
import perfume from "../../../assets/images/4.jpg";
import suny from "../../../assets/images/5.jpg";
import "./HomeSlider.css";

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="main-slider">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel"
        >
          <Carousel.Item>
            <img className="d-block c-item" src={cosmetic} alt="1 slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block c-item" src={cream} alt="2 slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block c-item" src={body} alt="3 slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block c-item" src={shampo} alt="4 slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block c-item" src={suny} alt="5 slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block c-item" src={perfume} alt="6 slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default HomeSlider;

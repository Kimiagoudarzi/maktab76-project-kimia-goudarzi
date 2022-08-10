import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import cosmetic from "../../../images/2.jpg";
import cream from "../../../images/1.jpg";
import body from "../../../images/3.jpg";
import shampo from "../../../images/sh.jfif";
import perfume from "../../../images/4.jpg";
import perfume2 from "../../../images/6.jpg";
import suny from "../../../images/5.jpg";
import "./HomeSlider.css";

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div>
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
          <Carousel.Item>
            <img className="d-block c-item" src={perfume2} alt="7 slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default HomeSlider;

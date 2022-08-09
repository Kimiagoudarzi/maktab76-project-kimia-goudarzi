import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import body from "../../images/body.png";
import bores from "../../images/bores.jpg";
import kerem from "../../images/kerem.jpg";
import shampo from "../../images/sh.jfif";
import "./HomeBody.css";

const HomeBody = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        <Carousel.Item>
          <img className="d-block c-item" src={shampo} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block c-item" src={bores} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block c-item" src={kerem} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block c-item" src={body} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HomeBody;

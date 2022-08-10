import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import cosmetic from "../../images/1.jpg";
import body from "../../images/5.jpg";
import cream from "../../images/4.jpg";
import shampo from "../../images/2.jpg";
import perfum from "../../images/3.jpg";
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
          <img className="d-block c-item" src={cosmetic} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block c-item" src={body} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block c-item" src={cream} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block c-item" src={shampo} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block c-item" src={perfum} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HomeBody;

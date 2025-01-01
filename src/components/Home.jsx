import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Slider from "./Visa/SliderWithAnimation/Slider";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "../assets/download.jpg";
import ExampleCarouselImage2 from "../assets/images (1).jpg";
import ExampleCarouselImage3 from "../assets/images.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    ExampleCarouselImage1,
    ExampleCarouselImage2,
    ExampleCarouselImage3,
  ];
  return (
    <div className="">
      {/* <Slider></Slider> */}
      <Slider {...settings}>
        {" "}
        {images.map((image, index) => (
          <div key={index}>
            {" "}
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%" }}
            />{" "}
          </div>
        ))}{" "}
      </Slider>
    </div>
  );
};

export default Home;

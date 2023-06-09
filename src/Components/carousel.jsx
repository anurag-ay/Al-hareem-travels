import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./carousel-item";
import slider from "../Assets/Data/carousal_data.json";

function CarouselCopmonent() {
  return (
    <Carousel autoPlay indicators={false}>
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselCopmonent;

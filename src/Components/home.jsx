import React from "react";
import Carousel from "./carousel";
import Services from "../Components/services";
import About from "./about";
import Contact from "./contact";
function home() {
  return (
    <>
      <Carousel />
      <Services />
      <About />
      <Contact/>
    </>
  );
}

export default home;

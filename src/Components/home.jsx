import React from "react";
import Carousel from "./carousel";
import Services from "../Components/services";
import About from "./about";
import Contact from "./contact";
import { Divider } from "@mui/material";
function home() {
  return (
    <>
      <Carousel />
      <Divider/>
      <Services />
      <Divider/>
      <About />
      <Divider/>
      <Contact/>
    </>
  );
}

export default home;

import React from "react";
import Carousel from "./carousel";
import Services from "../Components/services";
import About from "./about";
import Contact from "./contact";
import { Divider } from "@mui/material";
function Home(props) {
  return (
    <>
      <Carousel />
      <Services />
      <About />
      <Divider />
      <Contact {...props} />
    </>
  );
}

export default Home;

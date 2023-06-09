import React from "react";
import Carousel from "./carousel";
import { Box } from "@mui/material";
import Services from "../Components/services";
import About from "./about";
import Contact from "./contact";
function home() {
  return (
    <>
      <Box>
        <Carousel />
      </Box>

      <Services />
      <About />
      <Contact/>
    </>
  );
}

export default home;

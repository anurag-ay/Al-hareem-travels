import React from "react";
import Carousel from "./carousel";
import { Box } from "@mui/material";
import Services from "../Components/services";
import About from "./about";
function home() {
  return (
    <>
      <Box>
        <Carousel />
      </Box>

      <Services />
      <About />
    </>
  );
}

export default home;

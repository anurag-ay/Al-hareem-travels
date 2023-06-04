import React from "react";
import Carousel from "./carousel";
import { Box } from "@mui/material";
import Services from "../Components/service";
function home() {
  return (
    <>
      <Box>
        <Carousel />
      </Box>
      <Services />
    </>
  );
}

export default home;

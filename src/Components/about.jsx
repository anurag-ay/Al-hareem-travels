import { Card, CardMedia, Box, Typography } from "@mui/material";
import React from "react";

function about() {
  return (
    <Box id="about">
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{ mt: "1em", mb: "1em" }}
      >
        About Us
      </Typography>
      <Card sx={{ maxWidth: "100vw" }}>
        <CardMedia
          component="img"
          height="440"
          image="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          alt="green iguana"
        />
      </Card>
      <Box marginLeft="20em" marginRight="20em" justifyContent="center">
        <Typography variant="body1" p="2em">
          Images may be two or three-dimensional, such as a photograph or screen
          display, or three-dimensional, such as a statue or hologram. They may
          be captured by optical devices – such as cameras, mirrors, lenses,
          telescopes, microscopes, and natural objects and phenomena, such as
          the human eye or water. The word 'image' is also used in the broader
          sense of any two-dimensional figure such as a map, graph, pie chart,
          painting , or banner. In this wider sense, images can also be rendered
          manually, such as by drawing, the art of painting, carving, rendered
          automatically by printing or computer graphics technology, or
          developed by a combination of methods.
        </Typography>
      </Box>
    </Box>
  );
}

export default about;

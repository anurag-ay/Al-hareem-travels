import { Card, CardMedia, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AboutImage from "../Assets/Images/about-image.jpg"

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
          image={AboutImage}
          alt="green iguana"
        />
      </Card>
      <Container maxWidth="md">
        <Typography variant="body1" p="2em 0 2em 0" align="justify">
        We are Delivering the best Service to our Associates and ours costumers since 2014 And I hope forward also we will be providing best Service in Future, we deal in Saudi Wakala Packages Umrah Packages Kuwait Service Packages And All Gulf Country Immigration Medical and Gamca... And we give the best deal in Dubai&Oman&Qatar Visit Visa, We Request to all Please try Once, We make sure you'll like our Services and Our Team Behaviour Thanks...
        </Typography>
      </Container>
    </Box>
  );
}

export default about;

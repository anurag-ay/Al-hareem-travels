import { Card, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import travel__image from "../Components/Travel.jpeg";

function about() {
  return (
    <Container>
      <Typography variant="h3" align="center">
        About Us
      </Typography>
      <Typography variant="body1" align="center">
        Lorem ipsum dolor sit amet consectetur.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sequi
          possimus doloremque hic harum cumque nulla animi eius tempora quia,
          libero fugit ratione distinctio nihil itaque at dolore!
        </Typography>

        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="194"
            image={travel__image}
            alt="Travel Image"
          />
        </Card>
      </Stack>
      <Stack spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="194"
            image={travel__image}
            alt="Travel Image"
          />
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="194"
            image={travel__image}
            alt="Travel Image"
          />
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="194"
            image={travel__image}
            alt="Travel Image"
          />
        </Card>
      </Stack>
    </Container>
  );
}

export default about;

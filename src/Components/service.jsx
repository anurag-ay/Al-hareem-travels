import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import flight__image from "../Assets/Images/Services/Flight.jpg";
// import accomodation__image from "../Assets/Images/Services/Accomodation.jpg";
// import Tour__image from "../Assets/Images/Services/Tour.jpg";
// import CarRental__image from "../Assets/Images/Services/CarRentals.webp";

function service() {
  return (
    <Box sx={{ alignItems: "center" }}>
      <Box>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{ mt: "1em" }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mt: "2em", p: "0.5em" }}
        >
          At Travel Company, we offer a range of services to make your travels
          easier & more enjoyable.
        </Typography>
      </Box>

      <Grid container m="0">
        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                Saudi Wakala Service
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices & excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                Dubai Visit Visa & Service
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices & excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                Oman Visit And Service
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices and excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                Kuwait Service
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices and excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                Qatar Service
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices and excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                Gamca & Medical Service
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices & excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                Domestic Air Ticketing
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices and excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid p="1em" item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              maxWidth: "100vw",
              "&:hover": {
                cursor: "pointer",
                boxShadow: 20,
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={flight__image}
              alt="Flight Image"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary" textAlign="center">
                International Air Ticketing
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: "1em" }}
              >
                Book your flights with us for competitive prices & excellent
                customer service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default service;

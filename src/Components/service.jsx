import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import flight__image from "../Assets/Images/Services/Flight.jpg";
import accomodation__image from "../Assets/Images/Services/Accomodation.jpg";
import Tour__image from "../Assets/Images/Services/Tour.jpg";
import CarRental__image from "../Assets/Images/Services/CarRentals.webp";

function service() {
  return (
    <Box sx={{ alignItems: "center" }}>
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
        easier and more enjoyable.
      </Typography>

      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        sx={{
          alignItems: "center",
          mt: "2em",
          p: "1em",
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
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
              Fight Booking
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
        <Card
          sx={{
            maxWidth: 345,
            "&:hover": {
              cursor: "pointer",
              boxShadow: 20,
            },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={accomodation__image}
            alt="Accomodation Image"
          />
          <CardContent>
            <Typography variant="h5" color="text.primary" textAlign="center">
              Accomodation
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ p: "1em" }}
            >
              Find the perfect place to stay, from budget-friendly hostels to
              luxury hotels.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            "&:hover": {
              cursor: "pointer",
              boxShadow: 20,
            },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={Tour__image}
            alt="Tour and Activities Image"
          />
          <CardContent>
            <Typography variant="h5" color="text.primary" textAlign="center">
              Tour and activities
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ p: "1em" }}
            >
              Experience the best of your destination with our tours and
              activities.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            "&:hover": {
              cursor: "pointer",
              boxShadow: 20,
            },
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={CarRental__image}
            alt="Car Rental Image"
          />
          <CardContent>
            <Typography variant="h5" color="text.primary" textAlign="center">
              Car Rental
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ p: "1em" }}
            >
              Rent a car for your travels and explore your destination at your
              own pace.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

export default service;

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import saudi_wakala_service from "../Assets/Images/Services/Saudi_service.jpg";
import dubai_service_image from "../Assets/Images/Services/Dubai_service.jpg";
import oman_service_image from "../Assets/Images/Services/Oman_service.jpg";
import kuwait_service_image from "../Assets/Images/Services/Kuwait_service.jpg";
import qatar_service_image from "../Assets/Images/Services/Qatar_service.jpg";
import gamaca_service_image from "../Assets/Images/Services/Gamac_service.jpg";
import domestic_flight_ticketing_image from "../Assets/Images/Services/Domestic_air_ticket.jpg";
import international_flight_ticketing_image from "../Assets/Images/Services/Interanation_air_ticketing.jpg";

function service() {
  return (
    <Box id="services" sx={{ alignItems: "center" }}>
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
                boxShadow: "0.8em 0.8em 2em #4eadff",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              src={saudi_wakala_service}
              // image={flight__image}
              // image={services_data[0].service_image}
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
                boxShadow: "0.8em 0.8em 2em #e6cbda",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={dubai_service_image}
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
                boxShadow: "0.8em 0.8em 2em #e9d0b1",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={oman_service_image}
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
                boxShadow: "0.8em 0.8em 2em #7ec1ec",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={kuwait_service_image}
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
                boxShadow: "0.8em 0.8em 2em #9dedff",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={qatar_service_image}
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
                boxShadow: "0.8em 0.8em 2em #d7dadb",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={gamaca_service_image}
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
                boxShadow: "0.8em 0.8em 2em #75b6f8",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={domestic_flight_ticketing_image}
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
                boxShadow: "0.8em 0.8em 2em #f2dcda",
              },
            }}
          >
            <CardMedia
              component="img"
              height="194"
              image={international_flight_ticketing_image}
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

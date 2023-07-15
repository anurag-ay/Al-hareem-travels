import {
  Email,
  Facebook,
  Instagram,
  Phone,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Stack
      spacing={2}
      p="1.2em 1.2em 0 1.2em"
      sx={{ backgroundColor: "hsl(214, 18%, 18%)", color: "white" }}
    >
      <Stack
        spacing={3}
        direction={{ xs: "column", sm: "column", lg: "row" }}
        sx={{}}
        justifyContent={{ lg: "space-between" }}
      >
        {/* Address */}
        <Box maxWidth={{ lg: "30em" }}>
          <Typography
            p="0 0 0 0.5em"
            variant="h3"
            fontSize="1.2em"
            fontWeight="bold"
          >
            AL HAREEM TRAVELS
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            color="rgb(144, 152, 161)"
          >
            <Typography mt="1em" color="rgb(144, 152, 161)" p="0 0 0 0.5em">
              OFFICE NO 3,BE-SIDE PROXELA SALOON, FIRST FLOOR KB PLAZA 43/78,
              NAVAL KISHORE ROAD, HAZRATGANJ, LUCKNOW 226001, UP
            </Typography>
          </Box>
        </Box>

        {/* Contact Info */}
        <Box>
          <Typography
            fontSize="1.2em"
            fontWeight="bold"
            variant="h3"
            p="0 0 0 0.5em"
          >
            Contact
          </Typography>
          <Stack mt="1em" color="rgb(144, 152, 161)">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit">
                <PhoneAndroid />
              </IconButton>

              <Link
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1em",
                }}
                href="tel:+91-8090117598"
              >
                +91-8090117598
              </Link>
              <Link
                marginLeft="0.5em"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1em",
                }}
                href="tel:+91-9305807600"
              >
                +91-9305807600
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit">
                <Phone />
              </IconButton>
              <Link
                sx={{ textDecoration: "none", color: "inherit" }}
                href="tel:+91-522-4237878"
              >
                +91-522-4237878
              </Link>
            </Box>
            <Box>
              <Link
                sx={{
                  display: "flex",
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "center",
                }}
                href="mailto:alhareemlko@gmail.com"
              >
                <IconButton color="inherit">
                  <Email href="mailto:alhareemlko@gmail.com" />
                </IconButton>
                <Typography>alhareemlko@gmail.com</Typography>
              </Link>
            </Box>
          </Stack>
        </Box>

        {/* Social Media Handles */}
        <Box>
          <Typography
            fontSize="1.2em"
            fontWeight="bold"
            variant="h3"
            p="0 0 0 0.5em"
          >
            Join our Social
          </Typography>
          <Stack
            mt="1em"
            direction="row"
            justifyContent="flex-start"
            spacing={3}
            color="rgb(144, 152, 161)"
          >
            <Link
              sx={{
                display: "flex",
                textDecoration: "none",
                color: "inherit",
                alignItems: "center",
              }}
              href="https://www.facebook.com/people/Al-Hareem-Travels/100063635812461/?mibextid=ZbWKwL"
            >
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
            </Link>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ borderColor: "gray" }} />
      <Box p="0 0 0.5em 0">
        <Typography align="center">All Rights are reserved@2023</Typography>{" "}
      </Box>
    </Stack>
  );
}

export default Footer;

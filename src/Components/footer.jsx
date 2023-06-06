import {
  Email,
  Facebook,
  Instagram,
  Phone,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
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
          <Typography variant="h3" fontSize="1.2em" fontWeight="bold">
            AL HAREEM TRAVELS
          </Typography>
          <Typography mt="1em" color="rgb(144, 152, 161)">
            OFFICE NO 3,BE-SIDE PROXELA SALOON, FIRST FLOOR KB PLAZA 43/78,
            NAVAL KISHORE ROAD, HAZRATGANJ, LUCKNOW 226001, UP
          </Typography>
        </Box>

        {/* Contact Info */}
        <Box>
          <Typography fontSize="1.2em" fontWeight="bold" variant="h3">
            Contact
          </Typography>
          <Stack mt="1em" color="rgb(144, 152, 161)">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit">
                <PhoneAndroid />
              </IconButton>

              <Typography>+91-8090117598 / +91-9305807600</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit">
                <Phone />
              </IconButton>
              <Typography>+91-522-4237878</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit">
                <Email />
              </IconButton>
              <Typography>alhareemlko@gmail.com</Typography>
            </Box>
          </Stack>
        </Box>

        {/* Social Media Handles */}
        <Box>
          <Typography fontSize="1.2em" fontWeight="bold" variant="h3">
            Join our Social
          </Typography>
          <Stack
            mt="1em"
            direction="row"
            justifyContent="flex-start"
            spacing={3}
          >
            <Facebook />
            <Instagram />
            <Twitter />
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ borderColor: "gray" }} />
      <Box p="0 0 0.5em 0">
        <Typography align="center">Copyright</Typography>{" "}
      </Box>
    </Stack>
  );
}

export default Footer;

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

function contact() {
  const Form = styled("form")({
    display: "grid",
    justifyContent: "center",
  });
  return (
    <Box id="contact">
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{ mt: "1em", mb: "1em" }}
      >
        Contact Us
      </Typography>
      <Form>
        <Grid container spacing={2} m="0" sx={{ maxWidth: "40em" }}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              placeholder="Enter Your first name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              placeholder="Enter Your last name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              label="Phone"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={4}
              placeholder="Type your message here"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Box p="1em" sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
  );
}

export default contact;

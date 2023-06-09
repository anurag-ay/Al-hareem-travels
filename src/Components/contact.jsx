import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

function contact() {
  const Form = styled("form")({
    display: "grid",
    justifyContent: "center",
  });
  return (
    <Box id="contact" sx={{ backgroundColor: "e5e5e5" }}>
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{ mt: "1em", mb: "1em" }}
      >
        Contact Us
      </Typography>
      <Form>
        <Grid container m="0" sx={{ maxWidth: "40em" }}>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              label="First Name"
              placeholder="Enter Your first name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              label="Last Name"
              placeholder="Enter Your last name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              type="number"
              label="Phone"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid p="1em 0 1em 0" item xs={12}>
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
        <Box p="0 0 1em 0" sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
  );
}

export default contact;

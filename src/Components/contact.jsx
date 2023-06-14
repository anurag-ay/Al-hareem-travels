import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Collapse,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

const Form = styled("form")({
  display: "grid",
  justifyContent: "center",
});

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [message, setmessage] = useState("");
  const [isValidPhoneNo, setisValidPhoneNO] = useState(true);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    alert("Form submited");
    setFirstName("");
    setlastName("");
    setemail("");
    setphoneNo("");
    setmessage("");
  };
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
      <Form onSubmit={handleSubmit}>
        <Grid container m="0" sx={{ maxWidth: "40em" }}>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              label="First Name"
              placeholder="Enter Your first name"
              variant="outlined"
              fullWidth
              // required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Grid>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              label="Last Name"
              placeholder="Enter Your last name"
              variant="outlined"
              fullWidth
              // required
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </Grid>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setemail(e.target.value);
              }}
              // required
            />
          </Grid>
          <Grid p="1em 0 0 0" item xs={12}>
            <MuiTelInput
              value={phoneNo}
              label="Phone"
              defaultCountry="IN"
              fullWidth
              variant="outlined"
              sx={{ color: "#666674" }}
              onChange={(newPhone) => {
                setphoneNo(newPhone);
                setisValidPhoneNO(matchIsValidTel(newPhone));
              }}
            />
          </Grid>
          {isValidPhoneNo ? null : (
            <Grid p="0 0 1em 0" item xs={12}>
              <Alert severity="error">Invalid Phone No.</Alert>
            </Grid>
          )}
          <Grid p="2em 0 1em 0" item xs={12}>
            <TextField
              label="Message"
              multiline
              rows={4}
              placeholder="Type your message here"
              variant="outlined"
              onChange={(e) => {
                setmessage(e.target.value);
              }}
              fullWidth
              // required
            />
          </Grid>
        </Grid>
        <Box p="0 0 1em 0" sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Form>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;

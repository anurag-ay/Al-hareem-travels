import React, { useEffect, useState } from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import axios from "../api/axios";

const Form = styled("form")({
  display: "grid",
  justifyContent: "center",
});

function Contact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [backDropOpen, setBackDropOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [resMessage, setResMessage] = useState("");
  const [resSuccess, setResSucess] = useState(false);

  useEffect(() => {
    const { firstName, lastName, email, phone } = props;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPhone(phone);
  }, [props]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpenSnackbar(false);
      return;
    }

    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      phone,
      email,
      message,
    };
    try {
      const res = await axios.post("/message", formData);

      if (res.status === 200) {
        setBackDropOpen(false);
        setResSucess(true);
        setOpenSnackbar(true);
        setResMessage("Message Sent Successfully");
      }
      setMessage("");
    } catch (err) {
      setResMessage(err.response.data);
      setResSucess(false);
      setBackDropOpen(false);
      setOpenSnackbar(true);
    }
  };
  return (
    <Box id="contact" sx={{ backgroundColor: "e5e5e5" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          severity={resSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {resMessage}
        </Alert>
      </Snackbar>
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
              value={firstName}
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
              value={lastName}
              label="Last Name"
              placeholder="Enter Your last name"
              variant="outlined"
              fullWidth
              // required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Grid>
          <Grid p="1em 0 1em 0" item xs={12}>
            <TextField
              value={email}
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              // required
            />
          </Grid>
          <Grid p="1em 0 0 0" item xs={12}>
            <MuiTelInput
              value={phone}
              label="Phone"
              defaultCountry="IN"
              fullWidth
              variant="outlined"
              sx={{ color: "#666674" }}
              onChange={(newPhone) => {
                setPhone(newPhone);
                setIsValidPhone(matchIsValidTel(newPhone));
              }}
            />
          </Grid>
          {isValidPhone ? null : (
            <Grid p="0 0 1em 0" item xs={12}>
              <Alert severity="error">Invalid Phone No.</Alert>
            </Grid>
          )}
          <Grid p="2em 0 1em 0" item xs={12}>
            <TextField
              value={message}
              label="Message"
              multiline
              rows={4}
              placeholder="Type your message here"
              variant="outlined"
              onChange={(e) => {
                setMessage(e.target.value);
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
    </Box>
  );
}

export default Contact;

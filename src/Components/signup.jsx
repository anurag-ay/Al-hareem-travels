import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Box,
  Avatar,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Backdrop,
  Snackbar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [phone, setphone] = useState("");
  const [isValidPhoneNo, setisValidPhoneNO] = useState(true);

  const [backDropOpen, setBackDropOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [resMessage, setResMessage] = useState("");
  const [resSuccess, setResSucess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBackDropOpen(true);

    const formData = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };

    try {
      const res = await axios.post("/signup", formData);

      if (res.status === 200) {
        setBackDropOpen(false);
        setResSucess(true);
        setOpenSnackbar(true);
        setResMessage("User Registered Successfully");
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassoword("");
      setphone("");
      navigate("/signin");
    } catch (err) {
      setResMessage(err?.response?.data);
      setResSucess(false);
      setBackDropOpen(false);
      setOpenSnackbar(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpenSnackbar(false);
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            marginBottom: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  value={firstName}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiTelInput
                  value={phone}
                  required
                  label="Phone"
                  defaultCountry="IN"
                  fullWidth
                  variant="outlined"
                  sx={{ color: "#666674" }}
                  onChange={(newPhone) => {
                    setphone(newPhone);
                    setisValidPhoneNO(matchIsValidTel(newPhone));
                  }}
                />
              </Grid>
              {isValidPhoneNo ? null : (
                <Grid p="0 0 1em 0" item xs={12}>
                  <Alert severity="error">Invalid Phone No.</Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPassoword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

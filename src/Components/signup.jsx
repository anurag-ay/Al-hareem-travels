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
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [phone, setphone] = useState("");
  const [isValidPhoneNo, setisValidPhoneNO] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
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
      if (err?.response) setResMessage(err?.response?.data);
      else setResMessage(err?.message);
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

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            marginTop: 2,
            marginBottom: 2,
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
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Password *</InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                    fullWidth
                    value={password}
                    name="password"
                    label="Password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      setPassoword(e.target.value);
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Confirm Password *</InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                    fullWidth
                    value={confirmPassword}
                    name="confirm password"
                    label="Confirm Password"
                    id="confirm password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      setConfirmPassoword(e.target.value);
                    }}
                  />
                </FormControl>
              </Grid>

              {confirmPassword ? (
                password === confirmPassword ? null : (
                  <Grid p="0 0 1em 0" item xs={12}>
                    <Alert severity="error">Password Should Match</Alert>
                  </Grid>
                )
              ) : null}
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
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !password ||
                !confirmPassword ||
                !phone ||
                !(confirmPassword === password)
              }
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

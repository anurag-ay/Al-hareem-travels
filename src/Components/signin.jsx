import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Grid,
  Box,
  Avatar,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Backdrop,
  Snackbar,
  Alert,
  CircularProgress,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  let token = undefined;

  const [backDropOpen, setBackDropOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [resMessage, setResMessage] = useState("");
  const [resSuccess, setResSucess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };

    try {
      const res = await axios.post("/signin", formData);

      if (res.status === 200) {
        setBackDropOpen(false);
        setResSucess(true);
        setOpenSnackbar(true);
        setResMessage("User Signed In Successfully");
        token = res.data;
        localStorage.setItem("auth-token", token);
        navigate("/");
      }

      setEmail("");
      setPassword("");
      window.location.reload();
    } catch (err) {
      setResMessage(err.response.data);
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
      <Container component="main" maxWidth="xs">
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

        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            marginBottom: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              label="Email Address"
              value={email}
              id="email"
              margin="normal"
              autoFocus
              autoComplete="email"
              fullWidth
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

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
                label="Password"
                value={password}
                margin="normal"
                required
                fullWidth
                autoComplete="current-password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

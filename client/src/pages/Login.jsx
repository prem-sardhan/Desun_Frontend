import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";


import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useEffect, useState } from "react";
import logIn from "../Redux/auth/action";
const theme = createTheme();



export const Login = () => {
    const [loading, setLoading]= useState(false)
  const response = useSelector((store) => store.authReducer.token);
  const error = useSelector((store) => store.authReducer.error);
  const auth = useSelector((store) => store.authReducer.auth);

  // console.log("one", response.token, error, auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [clicked, setClicked]= useState(false)

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setUserPass(e.target.value);
  };

  const handleSubmitLogin = (e) => {
      e.preventDefault();
      setLoading(true)
      setClicked(true)
    dispatch(logIn({ email: userEmail, password: userPass }));
  };
  //console.log("two", response.token, error, auth);

  useEffect(() => {
      if (response.token && auth && clicked)  {
          setLoading(false)
       
      navigate("/game", { replace: true});
    }
  }, [handleSubmitLogin]);

  //
  return (
      <ThemeProvider theme={theme}>
          <br />
          {loading ?  <CircularProgress/> :null }
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmitLogin}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChangePass}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{border: "2px dotted black", backgroundColor:"orangered"}}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

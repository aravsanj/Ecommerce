import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Box, createTheme, ThemeProvider } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { signIn } from "../../redux/actions/signInActions";

export const SignIn = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#febd69",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.signIn.token);
  const error = useSelector((state) => state.signIn.error);
  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);

  if (token) {
    window.localStorage.setItem("token", token);
    navigate("/");
  }

  if (isLoggedIn) {
    navigate("/");
  }

  useEffect(() => {
    if (error) {
      setLoading(false);
      setErr(true);
    }
  }, [error]);

  function logIn() {
    if (user.username != "" && user.password != "") {
      dispatch(signIn(user));
      setLoading(true);
    } else {
      setErr(true);
    }
  }

  function handleInput(value) {
    setUser({ username: value.username, password: value.password });
    setErr(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "150px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "350px",
          }}
        >
          <TextField
            error={err}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) =>
              handleInput({ username: e.target.value, password: user.password })
            }
            required
          />

          <TextField
            error={err}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) =>
              handleInput({ username: user.username, password: e.target.value })
            }
            required
          />

          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={() => logIn()}
          >
            Sign in
          </LoadingButton>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginBottom: 10 }}
          >
            <span>Username: mor_2314</span>
            <span>Password: 83r5^_</span>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

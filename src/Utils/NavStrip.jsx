import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userFetch } from "../redux/actions/signInActions";
import { PriceFilter } from "./PriceFilter";
import { useLocation } from "react-router-dom";

export const NavStrip = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);

  useEffect(() => {
    dispatch(userFetch());
  }, [isLoggedIn]);

  const profile = useSelector((state) => state.signIn.user);
  const firstName = profile.name.firstname.toUpperCase();

  let name;

  if (isLoggedIn) {
    name = firstName;
  } else {
    name = "Guest";
  }

  return (
    <Box
      sx={{
        backgroundColor: "#232f3e",
        height: "39px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{ marginLeft: { xs: "20px", md: "30px" }, opacity: "0.7" }}
        variant="body2"
      >
        Welcome, {name}
      </Typography>
      <Box sx={{ marginRight: "10px" }}>
        {location.pathname == "/" && <PriceFilter />}
      </Box>
    </Box>
  );
};

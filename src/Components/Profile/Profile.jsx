import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  Container,
  Box,
  Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userFetch } from "../../redux/actions/signInActions";
import { Loader } from "../../Utils/Loader";

export const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userFetch());
    }
  }, []);

  const profile = useSelector((state) => state.signIn.user);
  const firstName = profile.name.firstname.toUpperCase();
  const lastName = profile.name.lastname.toUpperCase();
  const city = profile.address.city;
  const street = profile.address.street;
  const number = profile.address.number;
  const zip = profile.address.zipcode;
  const lat = profile.address.geolocation.lat;
  const long = profile.address.geolocation.long;
  const phone = profile.phone;
  const email = profile.email;
  const username = profile.username;

  const cartItems = useSelector((state) => state.cart.cartProducts);

  let totalItems;
  const reducer = (prev, current) => prev + current;

  if (cartItems.length != 0) {
    let qty = cartItems.map((item) => item.qty);
    totalItems = qty.reduce(reducer);
  } else {
    totalItems = 0;
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ padding: "10px", marginBottom: "20px" }}>
        Your profile
      </Typography>
      {firstName ? (
        <>
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              height: "100%",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              sx={{ flexDirection: "column", flexWrap: "nowrap" }}
              spacing={2}
            >
              <Grid item xs={12}>
                <Item elevation={0}>
                  <Typography variant="button">Personal details</Typography>
                </Item>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Item elevation={0}>{`${firstName} ${lastName}`}</Item>
              </Grid>

              <Grid item xs={12}>
                <Item elevation={0}>{email}</Item>
              </Grid>

              <Grid item xs={12}>
                <Item elevation={0}>{phone}</Item>
              </Grid>

              <Grid item xs={12}>
                <Item elevation={0}>{username}</Item>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item elevation={0}>
                  <Typography variant="button">Address</Typography>
                </Item>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Item elevation={0}>{`${number}, ${street}`}</Item>
              </Grid>

              <Grid item xs={12}>
                <Item elevation={0}>{city}</Item>
              </Grid>

              <Grid item xs={12}>
                <Item elevation={0}>{zip}</Item>
              </Grid>

              <Grid item xs={12}>
                <Item elevation={0}>{`${lat}, ${long}`}</Item>
              </Grid>
            </Grid>
          </Box>
          <Typography sx={{ margin: "100px 0px", marginBottom: "30px" }}>
            You currently have <b>{totalItems}</b> items in{" "}
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "#FF9900" }}
            >
              cart
            </Link>
            .
          </Typography>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

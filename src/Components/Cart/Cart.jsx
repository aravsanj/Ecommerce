import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import { CartItem } from "../../Utils/CartItem";
import { useSelector } from "react-redux";

export function Cart() {
  const [cartUpdate, setCartUpdate] = useState(false);
  const cartUpdated = useSelector((state) => state.cart);

  useEffect(() => {
    if (cartUpdate == false) {
      setCartUpdate(true);
    } else {
      setCartUpdate(false);
    }
  }, [cartUpdated]);

  let cartItems = [];

  if (window.localStorage.getItem("cartItems")) {
    cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
  }

  const totalPriceEachItem = cartItems.map((item) => item.price * item.qty);
  const reducer = (prev, current) => prev + current;

  let roundedTotalPrice = 0;
  if (totalPriceEachItem.length > 0) {
    const totalPrice = totalPriceEachItem.reduce(reducer);
    roundedTotalPrice = Math.round(totalPrice * 100) / 100;
  }

  return (
    <>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", padding: "10px", marginBottom: "20px" }}
        >
          Your cart
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cartItems.map((cartItem, idx) => (
            <Grid item xs={4} sm={4} md={3} key={idx}>
              <CartItem product={cartItem} />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ padding: "10px" }} />
        <Box sx={{ padding: "20px 0" }}>
          <Typography variant="h4" color="text.primary">
            ${roundedTotalPrice}
          </Typography>
        </Box>
      </Container>
    </>
  );
}

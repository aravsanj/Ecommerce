import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  reduceProductFromCart,
  removeProductFromCart,
} from "../redux/actions/cartActions";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartProducts);
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart() {
    const exists = cartItems.find((item) => item.id == product.id);

    if (exists) {
      dispatch(addProductToCart([{ ...product, qty: exists.qty + 1 }]));
    } else {
      dispatch(addProductToCart([{ ...product, qty: 1 }]));
    }
  }

  function cartProductChange() {
    const exists = cartItems.find((item) => item.id == product.id);
    if (exists.qty > 1) {
      dispatch(reduceProductFromCart([{ ...product, qty: exists.qty - 1 }]));
    } else {
      dispatch(removeProductFromCart([product]));
    }
  }

  const totalPrice = product.price * product.qty;
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

  return (
    <>
      <Card
        sx={{
          maxWidth: 320,
          padding: 2,
          backgroundColor: "transparent",
          mt: 2,
          ml: 2,
          margin: "auto ",
          border: "1px solid rgba(0, 0, 0, 0.4)",
        }}
        elevation={0}
      >
        <Box>
          <Box>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardMedia
                component="img"
                height="200px"
                width="200px"
                sx={{ objectFit: "contain" }}
                image={product.image}
              />
            </Link>
          </Box>
          <CardContent
            sx={{
              height: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="overline" component="h2">
              {product.title}
            </Typography>
            <Box>
              <Typography color="text.primary">{`$${product.price} x ${product.qty} = $${roundedTotalPrice}`}</Typography>
              <Box
                sx={{
                  margin: "10px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  sx={{ marginRight: "5px", padding: 0 }}
                  onClick={() => cartProductChange()}
                >
                  -
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ padding: 0 }}
                  onClick={() => addToCart()}
                >
                  +
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

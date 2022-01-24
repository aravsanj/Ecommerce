import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Rating,
  Button,
  Container,
  Chip,
  Tooltip,
} from "@mui/material";
import {
  singleProductFetch,
  removeProduct,
} from "../../redux/actions/productActions";
import { Loader } from "../../Utils/Loader";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../redux/actions/cartActions";

export const ProductPage = () => {
  const [inCart, setInCart] = useState(false);

  let { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProductFetch(id));
    return dispatch(removeProduct());
  }, []);

  const product = useSelector((state) => state.product.single);
  const cartItems = useSelector((state) => state.cart.cartProducts);
  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);

  const exists = cartItems.filter((item) => item.id == product.id);

  useEffect(() => {
    if (isLoggedIn && exists.length > 0) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  });

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart() {
    const exists = cartItems.find((item) => item.id == product.id);

    if (window.localStorage.getItem("token")) {
      if (exists) {
        dispatch(addProductToCart([{ ...product, qty: exists.qty + 1 }]));
      } else {
        dispatch(addProductToCart([{ ...product, qty: 1 }]));
      }
    } else {
      navigate("/signin");
    }
  }

  return (
    <>
      {product.id ? (
        <Box sx={{ flexGrow: 1, marginTop: 4, padding: 1 }}>
          <Container>
            <Grid
              container
              spacing={2}
              columns={16}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Grid item sx={16} md={8}>
                <Paper elevation={0}>
                  <Box
                    sx={{
                      width: "350px",
                      height: "350px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Paper>
              </Grid>
              <Grid item sx={16} sm={8}>
                <Paper elevation={0}>
                  <Typography variant="h5" component="h1">
                    {product.title}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Rating
                      name="simple-controlled"
                      value={product.rating.rate}
                    />
                    <Typography color="primary">
                      {product.rating.count}
                    </Typography>
                  </Box>
                </Paper>
                <Typography variant="h6" color="text.primary">
                  {`$${product.price}`}
                </Typography>
                <Typography color="text.primary">
                  {product.description}
                </Typography>
                <Button
                  variant="text"
                  onClick={() => navigate(`/category/${product.category}`)}
                >
                  {product.category}
                </Button>
                <Paper elevation={0}>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => addToCart()}
                  >
                    {inCart ? "+1" : "Add to cart"}
                  </Button>

                  {inCart && (
                    <>
                      <Tooltip title="Product already in cart.">
                        <Chip
                          label="See cart"
                          variant="outlined"
                          onClick={() => navigate("/cart")}
                          sx={{ marginLeft: "10px" }}
                        />
                      </Tooltip>
                      <Tooltip title="All products will be deleted regardless of quanity. To change quantity, visit cart.">
                        <Chip
                          onClick={() =>
                            dispatch(removeProductFromCart([product]))
                          }
                          label="Remove"
                          variant="outlined"
                          sx={{ marginLeft: "10px" }}
                        />
                      </Tooltip>
                    </>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
};

import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, ButtonBase, Badge } from "@mui/material";
import { CatMenu } from "../../Utils/CatMenu";
import { ProfMenu } from "../../Utils/ProfMenu";
import { NavStrip } from "../../Utils/NavStrip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavDrawer } from "../../Utils/NavDrawer";

export const Navbar = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartProducts);
  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);

  const reducer = (prev, current) => prev + current;

  let totalItems;
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      totalItems = 0;
    } else if (cartItems.length != 0) {
      let qty = cartItems.map((item) => item.qty);
      totalItems = qty.reduce(reducer);
    }

    setCount(totalItems);
  }, [cartItems, isLoggedIn]);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        color="primary"
        sx={{ height: "70px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto 0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
              <NavDrawer />
            </Box>
            <ButtonBase
              sx={{ marginLeft: { md: "30px" } }}
              onClick={() => navigate("/")}
            >
              <img
                src="/images/logo.png"
                alt="logo"
                width="112px"
                height="auto"
              />
            </ButtonBase>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginRight: "30px" }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <CatMenu />
              {isLoggedIn ? (
                <ProfMenu />
              ) : (
                <Button variant="outline" onClick={() => navigate("/signin")}>
                  sign in
                </Button>
              )}
            </Box>
            <ButtonBase onClick={() => navigate("/cart")}>
              <Badge badgeContent={count} color="error">
                <ShoppingCartIcon />
              </Badge>
            </ButtonBase>
          </Box>
        </Box>
      </AppBar>
      <NavStrip />
    </>
  );
};

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, Button, List, Divider } from "@mui/material";
import { CatMenuDrawer } from "../Mobile/CatMenuDrawer";
import { ProfMenuDrawer } from "../Mobile/ProfMenuDrawer";
import { useSelector } from "react-redux";

export function NavDrawer() {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const [state, setState] = useState({
    left: false,
  });

  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setLogged(true);
    } else if (isLoggedIn == false) {
      setLogged(false);
    }
  }, [isLoggedIn]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <CatMenuDrawer />
        <Divider />
        {isLoggedIn ? (
          <ProfMenuDrawer />
        ) : (
          <Button variant="outline" onClick={() => navigate("/signin")}>
            sign in
          </Button>
        )}
      </List>
    </Box>
  );
  const anchor = "left";

  return (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>
        <MenuIcon color="secondary" />
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  );
}

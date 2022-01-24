import React from "react";
import { List, ListItem, ListItemButton, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/actions/signInActions";

export const ProfMenuDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(signOut());
    navigate("/");
  };

  return (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ display: "block" }}
            onClick={() => navigate("/profile")}
          >
            <Typography variant="button"> view profile</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ display: "block" }} onClick={() => logout()}>
            <Typography variant="button"> sign out</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

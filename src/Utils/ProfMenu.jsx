import React, { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/actions/signInActions";
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function ProfMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const viewProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const logout = () => {
    setAnchorEl(null);
    window.localStorage.removeItem("token");
    dispatch(signOut());
    navigate("/");
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="success"
      >
        <AccountCircleIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={viewProfile}>
          <Typography variant="button"> view profile</Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Typography variant="button"> sign out </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Menu, MenuItem } from "@mui/material";
import { allCategoriesFetch } from "../redux/actions/categoryActions";
import { useNavigate } from "react-router-dom";

export function CatMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allCategoriesFetch());
  }, []);

  const categories = useSelector((state) => state.category.all);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="primary"
      >
        Categories
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
        {categories.map((category, idx) => (
          <MenuItem onClick={() => navigate(`/category/${category}`)} key={idx}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

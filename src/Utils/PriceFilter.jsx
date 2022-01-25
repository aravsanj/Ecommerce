import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  above200,
  all,
  from100to200,
  from25to50,
  from50to100,
  upTo25,
} from "../redux/actions/fitlerActions";

export function PriceFilter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <FilterListIcon />
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
        <MenuItem onClick={() => dispatch(upTo25())}>Up to $25</MenuItem>
        <MenuItem onClick={() => dispatch(from25to50())}>$25 to $50</MenuItem>
        <MenuItem onClick={() => dispatch(from50to100())}>$50 to $100</MenuItem>
        <MenuItem onClick={() => dispatch(from100to200())}>
          $100 to $200
        </MenuItem>
        <MenuItem onClick={() => dispatch(above200())}>$200 & above</MenuItem>
        <MenuItem onClick={() => dispatch(all())}>All</MenuItem>
      </Menu>
    </>
  );
}

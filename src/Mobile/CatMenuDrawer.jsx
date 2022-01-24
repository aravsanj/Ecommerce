import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CatMenuDrawer = () => {
  const navigate = useNavigate();

  const categories = useSelector((state) => state.category.all);

  return (
    <Box sx={{ width: "100%" }}>
      <List>
        <ListItem>
          <Typography variant="button">Categories</Typography>
        </ListItem>
        {categories.map((category, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton onClick={() => navigate(`/category/${category}`)}>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

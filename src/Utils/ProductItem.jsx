import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 320,
        mt: 2,
        ml: 2,
        backgroundColor: "transparent",
        margin: "auto ",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        height="300px"
        width="100%"
        sx={{ objectFit: "contain", cursor: "pointer" }}
        image={product.image}
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.title}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Rating name="simple-controlled" value={product.rating.rate} />
          <Typography color="primary">{product.rating.count}</Typography>
        </Box>

        <Typography variant="h6" color="text.primary">
          {`$${product.price}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

import React from "react";
import { ProductItem } from "../../Utils/ProductItem";
import { Container, Grid } from "@mui/material";

export const AllProducts = ({ products }) => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, idx) => (
            <Grid item xs={4} sm={4} md={3} key={idx}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

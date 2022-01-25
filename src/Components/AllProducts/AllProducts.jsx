import React, { useState } from "react";
import { ProductItem } from "../../Utils/ProductItem";
import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Loader } from "../../Utils/Loader";
import { Search } from "../../Utils/Search";
import { NoSearchResults } from "../../Utils/NoSearchResults";

export const AllProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterPrice = useSelector((state) => state.filter);
  const filteredProducts = products.filter(
    (product) =>
      product.price >= filterPrice.low && product.price <= filterPrice.high
  );
  const searchedProducts = filteredProducts.filter((val) => {
    if (searchTerm == "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });

  console.log(searchedProducts);

  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <Container sx={{ minHeight: "100vh" }}>
        {searchedProducts.length !== 0 ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {searchedProducts.map((product, idx) => (
              <Grid item xs={4} sm={4} md={3} key={idx}>
                <ProductItem product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <NoSearchResults searchTerm={searchTerm} />
        )}
      </Container>
    </>
  );
};

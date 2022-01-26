import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleCategoryFetch } from "../../redux/actions/categoryActions";
import { ProductItem } from "../../Utils/ProductItem";
import { Grid, Box } from "@mui/material";
import { Loader } from "../../Utils/Loader";
import { removeCat } from "../../redux/actions/categoryActions";

export const CategoryPage = () => {
  let { cat } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleCategoryFetch(cat));
    return dispatch(removeCat());
  }, [cat]);

  const categoryProds = useSelector((state) => state.category.single);

  return (
    <Box sx={{ marginTop: "25px" }}>
      {categoryProds ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {categoryProds.map((product, idx) => (
            <Grid item xs={4} sm={4} md={3} key={idx}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

import React, { useEffect } from "react";
import { AllProducts } from "../AllProducts/AllProducts";
import { Grid } from "@mui/material";
import { Header } from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { allProductsFetch } from "../../redux/actions/productActions";
import { Loader } from "../../Utils/Loader";

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProductsFetch());
  }, []);

  const loaded = useSelector((state) => state.product.all);

  return (
    <>
      <Header />
      <Grid
        container
        spacing={3}
        columns={16}
        sx={{ padding: 2, paddingRight: 5 }}
      >
        <Grid item xs={16} md={16}>
          {loaded ? <AllProducts products={loaded} /> : <Loader />}
        </Grid>
      </Grid>
    </>
  );
};

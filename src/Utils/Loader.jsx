import React from "react";
import { Box } from "@mui/material";
import { Bars } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Bars color="#232f3e" height={80} width={80} />
    </Box>
  );
};

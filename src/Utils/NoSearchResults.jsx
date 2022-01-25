import React from "react";
import { Typography, Box } from "@mui/material";

export const NoSearchResults = ({ searchTerm }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h1">:(</Typography>
      <Typography variant="h4" color="text.secondary">
        Sorry, we couldn't find any results for "{searchTerm}"
      </Typography>
    </Box>
  );
};

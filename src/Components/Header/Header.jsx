import React from "react";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        height: "400px",
        width: "100%",
      }}
    >
      <img
        src="/images/background.jpg"
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          opacity: 1,
        }}
      />
    </Box>
  );
};

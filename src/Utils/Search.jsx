import React from "react";
import { Box, Input, createTheme, ThemeProvider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search = ({ setSearchTerm }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#febd69",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  function search(term) {
    setSearchTerm(term);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBlock: "50px",
          marginBottom: "100px",
        }}
      >
        <Input
          type="search"
          placeholder={`try "shirt"`}
          sx={{ width: "300px" }}
          onChange={(e) => search(e.target.value)}
        />
        <SearchIcon
          sx={{
            marginLeft: "-25px",
            color: "gray",
            opacity: "0.6",
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./Components/Navbar/Navbar";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainPage } from "./Components/MainPage/MainPage";
import { CategoryPage } from "./Components/CategoryPage/CategoryPage";
import { SignIn } from "./Components/SignIn/SignIn";
import { Profile } from "./Components/Profile/Profile";
import { Cart } from "./Components/Cart/Cart";
import { createTheme, ThemeProvider } from "@mui/material";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector } from "react-redux";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#131a22",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  const isLoggedIn = useSelector((state) => state.signIn.isLoggedIn);

  return (
    <>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/product">
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="/category">
            <Route path=":cat" element={<CategoryPage />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          {isLoggedIn && <Route path="/profile" element={<Profile />} />}
          {isLoggedIn && <Route path="/cart" element={<Cart />} />}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/profile" : "/signin"} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

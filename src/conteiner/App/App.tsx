import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { StyledEngineProvider } from "@mui/material/styles";
import { count } from "console";
import { omit } from "lodash";
import { useAppDispatch } from "redux/hooks";
import { fetchProducts } from "redux/productsReducer";

// @ts-ignore

const App = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
      <Main />
      {/* <Footer /> */}
    </StyledEngineProvider>
  );
};

export default App;

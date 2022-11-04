import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../Header/Header";
// import Header from "conteiner/Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import { StyledEngineProvider } from "@mui/material/styles";
import { count } from "console";

type Props = {};

type AppProps = {
  [id: number]: number
};
// @ts-ignore

const App = (props: Props) => {
  const [productsInCart, setProductsInCart] = useState<AppProps>({
    1: 5,
    2: 5,
  });

const addProductToCart = (id: number, count: number) => {
  setProductsInCart((prevState: AppProps) => ({
    ...prevState,
    [id]: (prevState[id] || 0) + count,
  }));
};


  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <Main addProductToCart={addProductToCart} />
      <Footer />
    </StyledEngineProvider>
  );
};

export default App;

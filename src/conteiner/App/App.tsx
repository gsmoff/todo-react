import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { StyledEngineProvider } from "@mui/material/styles";
import { count } from "console";
// import { omit } from "lodash";

type Props = {};

type AppProps = {
  [id: number]: number;
};
// @ts-ignore

const App = (props: Props) => {
  const [productsInCart, setProductsInCart] = useState<AppProps>({
    1: 2,
    2: 3,
  });

  const addProductToCart = (id: number, count: number) => {
    setProductsInCart((prevState: AppProps) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }));
  };

  const removeProductFromCart = (id: number) => {
    setProductsInCart((prevState: AppProps) =>
      // omit(prevState, id))
      {
        let prevProductsInCart = { ...prevState };
        delete prevProductsInCart[id];
        return prevProductsInCart;
      }
    );
  };

const changeProductQuantity = (id: number, count: number) => {
  setProductsInCart((prevState: AppProps) => ({
    ...prevState,
    [id]: count,
  }));
};


  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <button onClick={() => removeProductFromCart(1)}>Delete</button>
      <Main
        addProductToCart={addProductToCart}
        productsInCart={productsInCart}
        removeProductFromCart={removeProductFromCart}
        changeProductQuantity={changeProductQuantity}
      />
      <Footer />
    </StyledEngineProvider>
  );
};

export default App;

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../Header/Header";
// import Header from "conteiner/Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import { StyledEngineProvider } from "@mui/material/styles";
import { count } from "console";

type Props = {};

type CartData = {
  totalCount: number;
  totalPrice: number;
};
// @ts-ignore

const App = (props: Props) => {
  const [cartData, setCartData] = useState<CartData>({
    totalCount: 0,
    totalPrice: 0,
  });

  const addProductToCart = (count: number, price: number) => {
    setCartData((prevState: CartData) => ({
      totalCount: prevState.totalCount + count,
      totalPrice: prevState.totalPrice + count * price,
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header cartData={cartData} />
      {/* <button onClick={() => addProductToCart(1, 1000)}>Add to cart</button> */}
      <Main addProductToCart={addProductToCart} />
      <Footer />
    </StyledEngineProvider>
  );
};

export default App;

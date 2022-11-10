import { Container } from "@mui/system";
import Home from "../../pages/Home/Home";
import React from "react";
import CartPage from "pages/Cart/CartPage";
import AboutPage from "pages/About/AboutPage";
import ShippingPage from "pages/Shipping/ShippingPage";
import PaymentPage from "pages/Payment/PaymentPage";
import { Routes, Route } from "react-router-dom";

type Props = {
  addProductToCart: (id: number, count: number) => void;
  productsInCart: {
    [id: number]: number;
  };
  removeProductFromCart: (id: number) => void;
  changeProductQuantity: (id: number, count:number) => void;
};

const Main = ({
  addProductToCart,
  productsInCart,
  removeProductFromCart,
  changeProductQuantity,
}: Props) => {
  return (
    <main>
      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/"
            element={<Home addProductToCart={addProductToCart} />}
          />
          <Route
            path="cart"
            element={
              <CartPage
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
              />
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="payment" element={<PaymentPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default Main;

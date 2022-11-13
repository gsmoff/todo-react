import Productslist from "components/Products/Productslist";
import Reviews from "components/Reviews/Reviews";
import React from "react";

type Props = { addProductToCart: (id: number, count: number) => void };

const Home = ({ addProductToCart }: Props) => {
  return (
    <>
      <Productslist addProductToCart={addProductToCart} />
      <Reviews/>
    </>
  );
};

export default Home;

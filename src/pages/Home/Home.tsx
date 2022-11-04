import Productslist from "components/Products/Productslist";
import React from "react";

type Props = { addProductToCart: (id: number, count: number) => void };

const Home = ({ addProductToCart }: Props) => {
  return (
    <>
      <Productslist addProductToCart={addProductToCart} />
    </>
  );
};

export default Home;

import { Container } from "@mui/system";
import Home from "../../pages/Home/Home";
import React from "react";

type Props = { addProductToCart: (id: number, count: number) => void };

const Main = ({ addProductToCart }: Props) => {
  return (
    <main>
      <Container maxWidth="lg">
        <Home addProductToCart={addProductToCart} />
      </Container>
    </main>
  );
};

export default Main;

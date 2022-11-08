import React from "react";
import productsArray, {
  getProductsObject,
  Product,
} from "components/Products/productsArray";
import CartTotal from "./CartTotal";
import CartProductList from "./CartProductList";


type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [key: number]: Product;
  };
};

const CartHeader = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      <CartProductList productsInCart={productsInCart}/>
      <CartTotal productsInCart={productsInCart}/>
    </div>
  );
};

export default CartHeader;

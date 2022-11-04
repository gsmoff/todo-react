import React from "react";
import productsArray,
{ getProductsObject, Product,} from 'components/Products/productsArray'

type Props = {
  productsInCart: {
    [id: number]: number
  },
  productsObject?: {
  [key: number]:Product
}
}

const CartHeader = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      {Object.keys(productsInCart).map((productId) => (
        <div key={productId}>
          {productsObject[parseInt(productId)].name}:{" "}
          {productsInCart[parseInt(productId)]}
        </div>
      ))}
    </div>
  );
};


export default CartHeader;

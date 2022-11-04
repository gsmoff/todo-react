import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
// import classes from "../Products/ProductsListItem.module.сіі";
import "../Products/ProductsListItem.scss";
import React, { useState } from "react";
import { green } from "@mui/material/colors";

type Props = {
  id: number;
  name: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
  image: string;
  addProductToCart: (id: number, count: number) => void;
};

const ProductsListItem = ({
  id,
  name,
  description,
  type,
  capacity,
  price,
  image,
  addProductToCart,
}: Props) => {
  const [count, setCount] = useState<number>(1);

  const [color, setColor] = useState<string>("green");

  const onIncrementClick = () => setCount((prevState: number) => prevState + 1);

  const onDecrementClick = () => setCount((prevState: number) => prevState - 1);

  const changeColor = () =>
    setColor((prevState: string) => (prevState === "green" ? "red" : "green"));

  return (
    <Card className="product">
      <CardContent>
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
        <h4>{name}</h4>
        <p className="product-description">{description}</p>
        <div className="product-features">
          <span>Type: </span>
          {type}
        </div>
        <div className="product-features">
          <span>Capacity:</span> {capacity} Gb
        </div>
        <div className="product-price">Price: {price} $</div>

        <div>
          <p>Color:{color}</p>
          <button onClick={changeColor}>Change color</button>
        </div>

        <div className="product-quantity">
          <Button
            variant="contained"
            size="small"
            onClick={onDecrementClick}
            disabled={count <= 1}
          >
            -
          </Button>
          <TextField size="small" value={count} variant="outlined" />
          <Button
            variant="contained"
            size="small"
            onClick={() => setCount(count + 1)}

            disabled={count >= 10}
          >
            +
          </Button>
        </div>
      </CardContent>
      <CardActions className="btn-wrap">
        <Button
          variant="outlined"
          onClick={() => addProductToCart(count, price)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

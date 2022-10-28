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
  name: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
  image: string;
};

const ProductsListItem = ({
  name,
  description,
  type,
  capacity,
  price,
  image,
}: Props) => {
  const [count, setCount] = useState<number>(1);

  const [color, setColor] = useState<string>('green');

  const onIncrementClick = () =>
    setCount((prevState: number) => prevState + 1)
  
  const onDecrementClick = () =>
    setCount((prevState: number) => prevState - 1)

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
          <p>Color:green</p>
          <button>Change color</button>
        </div>

        <div className="product-quantity">
          <Button variant="contained" size="small" onClick={onDecrementClick}>
            -
          </Button>
          <TextField size="small" value={count} variant="outlined" />
          <Button
            variant="contained"
            size="small"
            // onClick={() => setCount(count + 1)}
            onClick={onIncrementClick}
          >
            +
          </Button>
        </div>
      </CardContent>
      <CardActions className="btn-wrap">
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

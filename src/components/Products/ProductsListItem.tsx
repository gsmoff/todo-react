import { Card, CardContent, CardActions, Button } from "@mui/material";
// import classes from "../Products/ProductsListItem.module.сіі";
import "../Products/ProductsListItem.scss";
import React from "react";

type Props = {
  name: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
};

const ProductsListItem = ({
  name,
  description,
  type,
  capacity,
  price
}: Props) => {
  return (
    <Card className="product">
      <CardContent>
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
      </CardContent>
      <CardActions className="btn-wrap">
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

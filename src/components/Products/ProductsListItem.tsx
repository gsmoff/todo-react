import { Card, CardContent, CardActions, Button } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
};

const ProductsListItem = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <div>{props.type}</div>
        <div>{props.capacity}</div>
        <div>{props.price}</div>
      </CardContent>
      <CardActions>
        <Button>Add to crt</Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

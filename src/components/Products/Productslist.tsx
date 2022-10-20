import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductsListItem from "components/Products/ProductsListItem";
import productsArray from "components/Products/productsArray";

type ProductProps = {
  name: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
};
type Props = {};

const Productslist = (props: Props) => {
  return (
    <>
      <Typography
        align="center"
        variant="h4"
        // style={{
        // margin: '25px 0',
        // textTransform: 'uppercase',
        // }}
        sx={{
          margin: "25px 0",
          textTransform: "uppercase",
        }}
      >
        ProductList
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {productsArray.map(
          ({ name, description, type, capacity, price, }: ProductProps) => (
            <Grid item xs={12} sm={6} md={4}>
              <ProductsListItem
                name={name}
                description={description}
                type={type}
                capacity={capacity}
                price={price}
              />
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default Productslist;

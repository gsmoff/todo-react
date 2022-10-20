import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductsListItem from "components/Products/ProductsListItem";
import productsArray from "components/Products/productsArray";
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
        {productsArray.map((product) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductsListItem
              name={product.name}
              description={product.description}
              type={product.type}
              capacity={product.capacity}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Productslist;

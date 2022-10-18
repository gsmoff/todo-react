import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductsListItem from "./ProductsListItem";

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
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            name="iPhone X"
            description="This is iphone X"
            type="phone"
            capacity={64}
            price={500}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            name="iPhone XS"
            description="This is iphone XS"
            type="phone"
            capacity={128}
            price={1000}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            name="iPhone 12 Pro"
            description="This is iPhone 12 Pro"
            type="phone"
            capacity={512}
            price={800}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Productslist;

import React from "react";
import { Typography, Grid, Box, CircularProgress, } from "@mui/material";
import ProductCards from "../ProductCards/ProductCards";
import { useQuery } from "react-query";
import { fetchProducts } from "../Services";
const ProductList = () => {

  const { data, isLoading, } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });


  return (
    <Grid container spacing={2}  alignItems='baseline'>
      { isLoading ? <Grid item  >
      <CircularProgress />
    </Grid> : <>
       
      {data?.posts?.map((product) => (
        <Grid key={product.id} item xs={12} md={3} sm={6} lg={3}>
            <ProductCards data={product} />
        </Grid>
      ))} </> }
    </Grid>
  );
};

export default ProductList;

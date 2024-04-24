import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, CircularProgress, Button, } from "@mui/material";
import ProductCards from "../ProductCards/ProductCards";
import { useQuery } from "react-query";
import { fetchProducts } from "../Services";
import DialogBox from "../Dialoag/DialogBox";
import ProductForm from "../ProductForm/ProductForm";
const ProductList = () => {

  const [dialogInfo, SetDialogInfo] = useState({ component: null, title: '' })
  const [dialogProps, setDialogProps] = useState({
    open: false,
    maxWidth: 'md',
    onClose: () => setDialogProps({ ...dialogProps, open: false })
  })



  const { data, isLoading, } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [productList, setProductList] = useState(data?.posts)
  // console.log(productList)


  useEffect(() => {
    setProductList(data?.posts)
  }, [data])

  const addProduct = () => {
    console.log("add product");
    SetDialogInfo({ component: <ProductForm productList={productList} setProductList={setProductList} dialogProps={dialogProps} />, title: "Add Product" })
    setDialogProps({ ...dialogProps, open: true })


  }


  return (
    <Grid container spacing={2} alignItems='baseline'>
      <Grid container justifyContent='space-between' mt={3}>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={addProduct}> Add Products </Button>
        </Grid>
      </Grid>
      <DialogBox dialogProps={dialogProps} content={dialogInfo} />

      {isLoading ? <Grid item  >
        <CircularProgress />
      </Grid> : <>

        {productList?.map((product) => (
          <Grid key={product.id} item xs={12} md={3} sm={6} lg={3}>
            <ProductCards data={product} />
          </Grid>
        ))} </>}
    </Grid>
  );
};

export default ProductList;

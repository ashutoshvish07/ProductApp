import { Button, Container, Grid, Typography } from "@mui/material";
import ProductList from "./Components/ProductList/ProductList";

import { QueryClient, QueryClientProvider } from 'react-query';
import ProductForm from "./Components/ProductForm/ProductForm";
import { useState } from "react";
import DialogBox from "./Components/Dialoag/DialogBox";
const queryClient = new QueryClient();

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const [dialogInfo, SetDialogInfo] = useState({ component: null, title: '' })
  const [dialogProps, setDialogProps] = useState({
    open: false,
    maxWidth: 'md',
    onClose: () => setDialogProps({ ...dialogProps, open: false })
  })


  const addProduct = () =>{
    console.log("add product");
    SetDialogInfo({component: <ProductForm  dialogProps={dialogProps}/>, title: "Add Product" })
    setDialogProps({ ...dialogProps, open: true })


  }

  return (
    <QueryClientProvider client={queryClient}>
              <ToastContainer />
      <Container >
        <Grid container justifyContent='space-between'>
           <Grid item>
             <Typography variant="h4" component="h1" gutterBottom>
               Products
             </Typography>
           </Grid>
           <Grid item>
             <Button variant="outlined" onClick={addProduct}> Add Products </Button>
           </Grid>
        </Grid>
         <DialogBox dialogProps={dialogProps} content={dialogInfo}/>
        <ProductList />
      </Container>
    </QueryClientProvider>
  );
}

export default App

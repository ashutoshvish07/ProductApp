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


  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Container >

        <ProductList />
      </Container>
    </QueryClientProvider>
  );
}

export default App

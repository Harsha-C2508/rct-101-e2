import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Grid, GridItem } from '@chakra-ui/react'
const Products = () => {

  return (
    <>
    
      <AddProduct/>
      <Grid><Product/></Grid>
       <Pagination></Pagination>
    
    </>
  );
};

export default Products;

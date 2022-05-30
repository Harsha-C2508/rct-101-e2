import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
       <AddProduct/>
      <Grid><Product></Product></Grid>
       <Pagination></Pagination>
      <h1>Products</h1>
    </Flex>
  );
};

export default Products;

import React from "react";
import { Stack } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from "react";
const Product = () => {
  const [todos,setTodos] = useState([]);
  const [newTodo,setNewTodo]= useState("")
  const saveInfo=()=>{
    fetch("http://localhost:8080/products",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        title:newTodo,
        category:newTodo,
        gender:newTodo,
        price:newTodo
      })
    })
    .then((r)=>r.json())
    .then((d)=>{
      setNewTodo("");
    });
  }
  return (
    <>
    {todos.map((todo)=>(
    <Stack data-cy="product" key={todo.id}>
      <Image data-cy="product-image" />
      <Text data-cy="product-category">{todo.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{todo.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{todo.title}</Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
    ))}
    </>
  );
};

export default Product;

import React from "react";
import { CloseIcon } from '@chakra-ui/icons'
import { border, Button, useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalBody,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react'


const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
     <Button my={4} data-cy="add-product-button" colorScheme='teal' size='xs' marginLeft={200} onClick={onOpen}>Add New Product</Button> 
      <Modal isOpen={isOpen} onClose={onClose} border='black' >
      <CloseIcon onClick={onClose} marginLeft={700}/>
        <ModalBody pb={6}>
          <large>Title</large>
          <br />
          <Input data-cy="add-product-title" placeholder="Title" width={500}/>
          <br />
          <large>Category</large>
          <Select data-cy="add-product-category"  width={500}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <large>Gender</large>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <large>Price</large>
          <br />
          <Input data-cy="add-product-price" placeholder="Rs.Price" width={500}/>
          <br />
          <Button data-cy="add-product-submit-button" marginLeft={700}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;

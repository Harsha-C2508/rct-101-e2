import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
import { useState } from "react";
const Pagination = ({props}) => {
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">prev</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">next</Button>
      <Button data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
  );
};

export default Pagination;

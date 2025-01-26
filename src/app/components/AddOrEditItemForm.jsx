import { TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import items, { itemCategory } from "../items";
import {MenuItem} from "@mui/material";

import {Stack} from "@mui/material";

 
const AddOrEditItemForm = ({ onAddOrEditItem, itemData}) => {
  const [formData, setFormData] = useState( itemData?.current || {
    name: "",
    quantity: 0,
    category: "",
    price: 0,
  });

  const handleChange = (event) => {
    setFormData((prev) => {
      prev[event.target.name] = event.target.value
      return {...prev}
    })
  }

  return (
    <Stack gap={3} padding={2}>
      <TextField
        name="name"
        value={formData?.name}
        label="Name"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        select
        label="Category"
        helperText="Please select the item category"
        variant="outlined"
        name='category'
        value = {formData?.category}
        onChange={handleChange}

      >
        {itemCategory?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        name="quantity"
        value={formData?.quantity}
        label="Quantity"
        onChange={handleChange}
        variant="outlined"
        type="number"

      />

      <TextField
        name="price"
        value={formData?.price}
        onChange={handleChange}
        label="Price"
        variant="outlined"
        type="number"

      />
    </Stack>
    
  );
};

export default AddOrEditItemForm;

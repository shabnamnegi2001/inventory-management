import { TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import items, { itemCategory } from "../items";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { FormHelperText } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
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
    <>
      <TextField
        name="name"
        defaultValue={itemData?.current?.name}
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
        defaultValue={itemData?.current?.category}
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
        defaultValue={itemData?.current?.quantity}
        value={formData?.quantity}
        label="Quantity"
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        name="price"
        defaultValue={itemData?.current?.price}
        value={formData?.price}
        onChange={handleChange}
        label="Price"
        variant="outlined"
      />
    </>
    
  );
};

export default AddOrEditItemForm;

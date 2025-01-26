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

 
const AddItemForm = ({ onAddItem }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   quantity: 0,
  //   category: "",
  //   price: 0,
  // });

  return (
    <>
      <TextField
        name="name"
        // value={formData?.name}
        label="Name"
        variant="outlined"
      />
      <TextField
        select
        label="Category"
        helperText="Please select the item category"
        variant="outlined"
        name='category'
        // value = {formData?.category}
      >
        {itemCategory?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        name="quantity"
        // value={formData?.quantity}
        label="Quantity"
        variant="outlined"
      />

      <TextField
        name="price"
        // value={formData?.price}
        label="Price"
        variant="outlined"
      />
    </>
    
  );
};

export default AddItemForm;

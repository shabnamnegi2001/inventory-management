import React from "react"
import { useState, useEffect } from 'react';
import items from '../items';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddOrEditItemForm from './AddOrEditItemForm';

const FormDialog = ( { 
    open,
    handleClose,
    onAddOrEditItem,
    itemData,
    type = 'add'
}) => {

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            const formJson = Object.fromEntries(formData.entries());
            console.log('itemData', itemData)
            onAddOrEditItem({
                ...itemData?.current,
              'name' : formJson.name,
              'category' : formJson.category,
              'quantity' : formJson.quantity,
              'price' : formJson.price
            })
            handleClose();
          },
        }}
      >
        <DialogTitle style={{fontWeight: 'bold'}}>
            { type == 'add' ? 'Add New Item' : 'Edit Item'}
        </DialogTitle>
        <DialogContent>
          <AddOrEditItemForm onAddOrEditItem = {onAddOrEditItem} itemData={itemData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >{ type=='add' ? "Add" : 'Update'}</Button>
        </DialogActions>
      </Dialog>
    )

}

export default FormDialog
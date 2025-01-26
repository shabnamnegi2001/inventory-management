"use client"
import React from 'react';
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
import { useState, useEffect } from 'react';
import { itemCategory } from '../items';
import FormDialog from './FormDialog';

function MenuBar(
  { data, setFilteredData, addItem, onAddOrEditItem }) {

  const [categoryFilter, setCategoryFilter] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    let filteredData = [...data];

    if (categoryFilter.length) {
      filteredData = filteredData.filter((val) => {
        return categoryFilter.includes(val.category)
      })
    }
    setFilteredData(filteredData);

  }, [categoryFilter]);

  return (
    <div className='flex flex-row justify-between w-[100%] '  >
      <div>

      <div className='rounded-md maxh-[30px]  h-[20px] align-center justify-center'>
        <Accordion  >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Category
          </AccordionSummary>
          <AccordionDetails
            sx={{ padding: '0px' }}
          >
            <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense>
              {itemCategory.map((value) => {

                const labelId = `checkbox-list-label-${value}`;

                return (

                  <ListItem
                    key={value}
                  >
                    <ListItemButton
                      onClick={() => {
                        const currentIndex = categoryFilter.indexOf(value);
                        const newCategoryFilter = [...categoryFilter];
                        if (currentIndex === -1) {
                          newCategoryFilter.push(value);
                        }
                        else {
                          newCategoryFilter.splice(currentIndex, 1)
                        }
                        setCategoryFilter([...newCategoryFilter]);
                      }}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={categoryFilter.includes(value)}
                          tabIndex={-1}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>

          </AccordionDetails>
        </Accordion>
      </div>
      </div>
      <div className='rounded-md bg-white p-3 mr-6 h-[3rem] flex justify-center align-center hover:cursor-pointer hover:bg-blue-700'>
        <React.Fragment>
          <Button className='text-black text-base hover:text-white ' onClick={handleClickOpen}>
            Add New Item
          </Button>
          <FormDialog
            open={open}
            handleClose={handleClose}
            onAddOrEditItem={onAddOrEditItem}
          />
        </React.Fragment>
      </div>
    </div>
  )
}

export default MenuBar;


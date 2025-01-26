"use client"
import React, { useMemo } from 'react';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import FormDialog from './FormDialog';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Typography } from '@mui/material';

function MenuBar(
  { onAddOrEditItem }) {

  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='flex flex-column justify-between  w-[100%] '  >
          <Typography variant="h4" sx={{ color: "black" }}> Inventory Records</Typography>
          {
            width > 600 ?  
           ( <div className='rounded-md p-3 bg-blue-600 h-[2.4rem] flex justify-center align-center cursor-pointer hover:bg-blue-700'>
              <React.Fragment>

              <Button sx = {{color : 'white'}}  onClick={handleClickOpen}>
              Add Item
            </Button>
            </React.Fragment>

            </div>)
          : 
          <AddCircleOutlineOutlinedIcon className=' cursor-pointer text-blue-600 hover:text-blue-700 ' onClick = {handleClickOpen} />

          }
          <FormDialog
            open={open}
            handleClose={handleClose}
            onAddOrEditItem={onAddOrEditItem}
          />
    </div>
  )
}

export default MenuBar;


'use client';

import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import MenuBar from './components/MenuBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';
import items from './items';


export default function Home() {

  
  const [data, setData] = useState(items)
  const [filteredData, setFilteredData] = useState(data);

  const onAddItem = (data) =>{
    
    setData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        ...data
      }
    ])
  }
  const deleteItem = (item) => {
    const index =  data.indexOf(item);
    if (index !== -1) {
     const newData = [...data]
      newData.splice(index, 1); 
      setData(newData)
    }
   }

   const onEditItem = (data) =>{


   }

  React.useEffect(() => {
    setFilteredData(data)
  }, [data])


  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl" sx={{width:"100vw", minHeight:"100vh", bgcolor:"#252525" , color:'white'}}>
      <Box sx={{boxSizing:'border-box', padding:5, display: 'flex', flexDirection:'column', gap: 5, }}>
        <Typography variant="h3" sx={{ color: "text.dark" }}> Inventory Management</Typography>
        <Box sx={{display: 'flex', flexDirection:'column', gap: 5}}>
        <MenuBar data={data} setFilteredData={setFilteredData}
           onAddItem = {onAddItem}
           onEditItem = {onEditItem}
        />
        <ItemListContainer filteredData={filteredData} deleteItem={deleteItem} />
        </Box>
    </Box>
    </Container>
  </React.Fragment>
  );
}

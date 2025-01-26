'use client';

import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import FilterMenuBar from './components/FilterMenuBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';
import items from './items';


export default function Home() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');


  const addItem = () => {

    const newItem = {
      id: uuidv4(),
      name: name,  
      category: category, 
      quantity: quantity, 
      price: price, 
  };
    setFilteredProperty((prevItems) => [...prevItems, newItem]);
  }

  const [filteredProperty, setFilteredProperty] = useState(items);

  React.useEffect(() => {
    console.log(filteredProperty);
  }, [filteredProperty])

  const handleInputChange = (field, value) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      [field]: value
    }));
  };

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl" sx={{width:"100vw", minHeight:"100vh", bgcolor:"#252525" , color:'white'}}>
      <Box sx={{boxSizing:'border-box', padding:5, display: 'flex', flexDirection:'column', gap: 5, }}>
        <Typography variant="h3" sx={{ color: "text.dark" }}> Inventory Management</Typography>
        <Box sx={{display: 'flex', flexDirection:'column', gap: 5}}>
        <FilterMenuBar filteredProperty={filteredProperty} setFilteredProperty={setFilteredProperty} addItem={addItem}
        name={name} setName={setName} category={category} setCategory={setCategory} 
        quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice}
        handleInputChange={handleInputChange}
        />
        <ItemListContainer filteredProperty={filteredProperty}/>
        </Box>
    </Box>
    </Container>
  </React.Fragment>
  );
}

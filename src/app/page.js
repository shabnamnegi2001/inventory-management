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

  const onAddOrEditItem = (item) => { 
    console.log(item)

    if (item.hasOwnProperty('id')) {
      // edit item
      const temp_data = [...data]
      let item_location = temp_data.findIndex((value) => value['id'] == item['id'])
      if (item_location != -1) {
        temp_data[item_location] = item
        setData(temp_data)
      }
    }
    else {
      // add item
      setData((prev) => [
        ...prev,
        {
          id: uuidv4(),
          ...item
        }
      ])
    }

  }
  const deleteItem = (item) => {
    const index = data.indexOf(item);
    if (index !== -1) {
      const newData = [...data]
      newData.splice(index, 1);
      setData(newData)
    }
  }

  const onEditItem = (data) => {


  }

  React.useEffect(() => {
    setFilteredData(data)
  }, [data])


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ width: "100vw", minHeight: "100vh", color: 'white' }}>
        <Box sx={{ boxSizing: 'border-box', padding: 5, display: 'flex', flexDirection: 'column', gap: 5, }}>
          <Typography variant="h3" sx={{ color: "text.dark" }}> Inventory Management</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <MenuBar data={data} setFilteredData={setFilteredData}
              onAddOrEditItem={onAddOrEditItem}
              onEditItem={onEditItem}
            />
            <ItemListContainer filteredData={filteredData} deleteItem={deleteItem} onAddOrEditItem={onAddOrEditItem} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

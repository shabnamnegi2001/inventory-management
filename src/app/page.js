'use client';

import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuBar from './components/MenuBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';
import items from './items';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function Home() {

  const [mode, setMode] = useState(window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  
  const darkTheme =  createTheme({
      palette: {
        mode: mode,
      },
    }
  );

  React.useEffect(()=>{

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setMode(event.matches ? "dark" : "light")
  });
  return () => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', event => {
      setMode(event.matches ? "dark" : "light")

  })
  }
  })
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


  React.useEffect(() => {
    setFilteredData(data)
  }, [data])


  return (
    <React.Fragment>
       <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ width: "100vw", height : '100vh'}}>
        <Box className="flex flex-col justify-center content-center h-[100%] ">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <MenuBar 
              data={data} 
              setFilteredData={setFilteredData}
              onAddOrEditItem={onAddOrEditItem}
            />
            <ItemListContainer 
              items={data}
              filteredData={filteredData} 
              deleteItem={deleteItem} 
              onAddOrEditItem={onAddOrEditItem} 
              setFilteredData = {setFilteredData}
            />
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

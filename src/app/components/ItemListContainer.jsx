import React from 'react';
import items from '../items';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ItemListContainer({filteredProperty}) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead  sx={{ backgroundColor: 'black'}}>
          <TableRow>
            <TableCell className='font-extrabold text-white'>ITEM NAME</TableCell>
            <TableCell align="right" className='font-extrabold text-white'>CATEGORY</TableCell>
            <TableCell align="right" className='font-extrabold text-white'>QUANTITY</TableCell>
            <TableCell align="right" className='font-extrabold text-white'>PRICE</TableCell>
            <TableCell align="right" className='font-extrabold text-white'>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProperty.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='font-extrabold'>
                {item.name}
              </TableCell>
              <TableCell align="right" className='font-semibold'>{item.category}</TableCell>
              <TableCell align="right" className='font-semibold'>{item.quantity}</TableCell>
              <TableCell align="right" className='font-semibold'>{item.price}</TableCell>
              <TableCell align="right" className='font-semibold'>
                <button
                 className='mr-4 text-blue-700'>Edit</button >
                <button className='text-red-700'>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

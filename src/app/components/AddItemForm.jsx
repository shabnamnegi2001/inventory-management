import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import items from '../items';

const AddItemForm = ({name, category, quantity, price, setName, setCategory, setPrice, setQuantity}) => {

  return (
    <div className='flex flex-col w-full gap-3'>
    <div>
        <p className='font-bold'>Item Name</p>
        <input className='border-[1px] border-slate-150 p-1'
        value={name} onChange={(e) => setName(e.target.value)}
        type='text' name='name' placeholder='Enter item name'/>
    </div>

    <div>
    <p className='font-bold'>select category:</p>
    {["Electronics", "Furniture", "Stationery" ].map((val, index) => {
      return (
        <div key={`key is ${index}`}>
        <input className='border-[1px] border-slate-150 '
        type="radio" id={`category-${index}`} name='category'
        value={val} onChange={(e) => setCategory(e.target.value)} 
        />
         <label htmlFor={`category-${index}`}>{val}</label>
         </div>
      )
    })}
    </div>
   
    <div>
        <p className='font-bold'>Quantity</p>
        <input className='border-[1px] border-slate-150 p-1'
        type='number' name='quantity' placeholder='Enter quantity'
        value={quantity} onChange={(e) => setQuantity(e.target.value)} 
        />
    </div>
    <div>
        <p className='font-bold'>Price</p>
        <input className='border-[1px] border-slate-150 p-1'
        type='number' name='price' placeholder='Enter price'
        value={price} onChange={(e) => setPrice(e.target.value)} 
        />
    </div>
    </div>
  )
}

export default AddItemForm;

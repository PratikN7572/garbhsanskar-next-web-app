"use client";

import { SearchBarContext } from '@/app/context/searchBarContext';
import React, { useContext } from 'react'

const SearchBar = () => {
  const {dispatch} = useContext(SearchBarContext)
  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch({
      type: 'FILTER_ITEMS',
      payload: query
    })
  };
  return (
    <>
      
      <input type="text" onChange={(e) => handleSearch(e)} className='shadow-base w-full h-10 rounded-md px-3 pb-[0.3rem]' placeholder='search' />  
      </>
  )
}

export default SearchBar

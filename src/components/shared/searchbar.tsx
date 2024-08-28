import { FilterIcon, SearchIcon } from 'lucide-react'
import React, { FocusEventHandler, FormEventHandler, MouseEventHandler } from 'react'

const SearchBar = ({onSearch, onValueChange, onFocus}:{onSearch?:MouseEventHandler,onValueChange?:FormEventHandler, onFocus?:FocusEventHandler}) => {
  return (
    <div className='m-4 flex shadow-sm transition-all'>
        <div className='h-10 w-10 flex items-center justify-center text-blue-700 bg-white hover:bg-gray-100 hover:text-gray-700 transition-all cursor-pointer rounded-l-md'>
            <SearchIcon size={"18px"}/>
        </div>
        <input 
            type="search" 
            name="" 
            id="" 
            className='w-full h-10 p-2 font-poppins font-light focus:outline-none' 
            placeholder='search' 
            onFocus={e=>{onFocus && onFocus(e)}}
            onBlur={e=>{onFocus && onFocus(e)}}/>
        <div className='h-10 w-10 flex items-center justify-center text-blue-700 bg-white hover:bg-gray-100 hover:text-gray-700 transition-all cursor-pointer rounded-r-md'>
            <FilterIcon size={"18px"}/>
        </div>
    </div>
  )
}

export default SearchBar

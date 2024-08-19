import { SearchIcon } from 'lucide-react'
import React, { FocusEventHandler, FormEventHandler, MouseEventHandler } from 'react'

const SearchBar = ({onSearch, onValueChange, onFocus}:{onSearch?:MouseEventHandler,onValueChange?:FormEventHandler, onFocus?:FocusEventHandler}) => {
  return (
    <div className='m-4 flex shadow-sm'>
        <div className='h-8 w-8 flex items-center justify-center text-blue-700 bg-white hover:bg-gray-100 hover:text-gray-700 transition-all cursor-pointer rounded-l-md'>
            <SearchIcon size={"18px"}/>
        </div>
        <input 
            type="search" 
            name="" 
            id="" 
            className='w-full h-8 p-2 rounded-r-md font-poppins font-light focus:outline-none' 
            placeholder='search' 
            onFocus={e=>{onFocus && onFocus(e)}}
            onBlur={e=>{onFocus && onFocus(e)}}/>
    </div>
  )
}

export default SearchBar

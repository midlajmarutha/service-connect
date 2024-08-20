import { BellDotIcon, MenuIcon, UserCircle2Icon } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex p-3 justify-between">
        <div className="flex gap-2 items-center">
          <div className='flex p-1 text-blue-700 hover:bg-blue-100 transition-all rounded-md'>
            <MenuIcon/>
          </div>
          <div className='font-medium text-l font-poppins'>
            <h1>ServiceConnect</h1>
          </div>
        </div>
        <div className='flex gap-1'>
          <div className='flex items-center justify-center text-blue-700 bg-white rounded-full w-8 h-8 text-sm'>
            <UserCircle2Icon size={"20px"}/>
          </div>
          <div className='flex items-center justify-center text-blue-700 bg-white rounded-full w-8 h-8 text-sm'>
            <BellDotIcon size={"20px"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

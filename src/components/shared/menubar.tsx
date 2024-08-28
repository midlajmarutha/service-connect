import React, {useState } from 'react'
import { Link } from 'react-router-dom';

export type Menu = {
    menu:string;
    path:string;
    component:React.ReactElement;
    icon:React.ReactElement;
}

const MenuBar = ({menuList, defaultSelected}:{menuList:Menu[], defaultSelected:Menu}) => {
    const [selectedMenu, setSelectedMenu] = useState(defaultSelected)

    return (
        <div className='flex justify-center'>
        <div className='w-2/3 flex fixed bottom-4 gap-2 p-1 rounded-full bg-white shadow-md justify-between'>
            {
                menuList.map((menu,index)=>{
                    return(
                        <Link 
                            to={menu.path}
                            className={`p-2 rounded-full transition-all ${selectedMenu.menu === menu.menu ? "text-blue-700 bg-blue-100": "hover:bg-gray-100 hover:text-gray-700"}`}
                            onClick={()=>{setSelectedMenu(menu)}}
                            key={index}>
                            {menu.icon}
                        </Link>
                    )
                })
            }
        </div>
        </div>
    )
}

export default MenuBar

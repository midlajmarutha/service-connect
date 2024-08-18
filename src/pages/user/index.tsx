import { CircleUserRoundIcon, HistoryIcon, HomeIcon, LucideIcon, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import HomePage from "./components/homepage/homepage";
import HistoryPage from "./components/historypage/historypage";
import NewBookingPage from "./components/newbookingpage/newbookingpage";
import ProfilePage from "./components/profilepage/profilepage";
import MenuBar, { Menu } from "./components/menubar";


const menu:Menu[] = [
    {
        menu:"home",
        path:"/",
        component:<HomePage/>,
        icon:<HomeIcon/>
    },
    {
        menu:"history",
        path:"/history",
        component:<HistoryPage/>,
        icon:<HistoryIcon/>
    },
    {
        menu:"new",
        path:"/new",
        component: <NewBookingPage/>,
        icon:<PlusCircleIcon/>
    },
    {
        menu:"profile",
        path:"/profile",
        component: <ProfilePage/>,
        icon:<CircleUserRoundIcon/>
    }
]
const Home = ()=>{
    const [selectedMenu, setSelectedMenu] = useState()
    return(
        <div>
            
            <MenuBar menuList={menu} defaultSelected="home" onChange={setSelectedMenu}/>
        </div>
    )
}

export default Home;
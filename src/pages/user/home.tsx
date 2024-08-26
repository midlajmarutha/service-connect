import { CircleUserRoundIcon, HistoryIcon, HomeIcon, LucideIcon, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import HomePage from "./pages/homepage/homepage";
import HistoryPage from "./pages/historypage/historypage";
import NewBookingPage from "./pages/newbookingpage/newbookingpage";
import ProfilePage from "./pages/profilepage/profilepage";
import MenuBar, { Menu } from "../../shared/components/menubar";


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
    const [selectedMenu, setSelectedMenu] = useState<Menu>()
    return(
        <div className="bg-slate-100 h-screen">
            {selectedMenu?.component}
            <MenuBar menuList={menu} defaultSelected={menu[0]} onChange={setSelectedMenu}/>
        </div>
    )
}

export default Home;
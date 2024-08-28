import { CircleUserRoundIcon, HistoryIcon, HomeIcon, LucideIcon, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import HomePage from "./homepage/homepage";
import HistoryPage from "./historypage/historypage";
import NewBookingPage from "./newbookingpage/newbookingpage";
import ProfilePage from "./profilepage/profilepage";
import MenuBar, { Menu } from "../../components/shared/menubar";
import { Outlet, useLocation } from "react-router-dom";


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
const Layout = ()=>{
    const { pathname } = useLocation();
    const defaultMenu = menu.find(item=>(item.path == pathname))
    return(
        <div className="bg-slate-100 h-screen">
            <Outlet/>
            <MenuBar menuList={menu} defaultSelected={defaultMenu ? defaultMenu : menu[0]} />
        </div>
    )
}

export default Layout;
import { CircleUserRoundIcon, HistoryIcon, HomeIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";

const menu = [
    {
        menu:"home",
        path:"/",
        component:<Home/>,
        icon:<HomeIcon/>
    },
    {
        menu:"history",
        path:"/history",
        component:<History/>,
        icon:<HistoryIcon/>
    },
    {
        menu:"new",
        path:"/new",
        component: <New/>
        icon:<PlusCircleIcon/>
    },
    {
        menu:"profile",
        path:"/profile",
        component: <Profile/>
        icon:<CircleUserRoundIcon/>
    }
]

const Home = ()=>{
    const [selectedMenu, setSelectedMenu] = useState<"home"| "history"| "new"| "profile"> ("home")
    return(
        <div>Home Page</div>
    )
}

export default Home;
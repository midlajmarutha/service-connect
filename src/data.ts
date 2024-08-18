import { JobInfo, ServiceProvider } from "./types/types";

export const servicePoviders:ServiceProvider[] = [
    {
        username: "James",
        email: "james@gmail.com",
        mobile: "+917809478308",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Plumbing", "Electrical"]
    },
    {
        username: "Hari",
        email: "Hari@gmail.com",
        mobile: "+917842478308",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Automobile Mechanic"]
    },
    {
        username: "Adhil",
        email: "adhil@gmail.com",
        mobile: "+917805471388",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Realtor"]
    },
    {
        username: "Suresh",
        email: "suresh@gmail.com",
        mobile: "+917209878308",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Construction"]
    }
]

const jobs:JobInfo[] = [
    {
        service:"Plumbing",
        price:"250/h",
        provider:servicePoviders[0],
        location:"Malappuram"
    },
    {
        service:"Electric device repairing",
        price:"200/h",
        provider:servicePoviders[3],
        location:"Kochi"
    },
    {
        service:"Software Development",
        price:"350/h",
        provider:servicePoviders[2],
        location:"Kottayam"
    },
    {
        service:"Plumbing",
        price:"250/h",
        provider:servicePoviders[1],
        location:"Thiruvanandapuram"
    },
    {
        service:"Car Washing",
        price:"250",
        provider:servicePoviders[2],
        location:"Palakkadu"
    }
]
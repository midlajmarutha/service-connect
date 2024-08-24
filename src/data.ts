import { ServiceInfo, ServiceHistory, ServiceProvider } from "./types/types";

export const servicePoviders:ServiceProvider[] = [
    {
        username: "James",
        id:"1",
        email: "james@gmail.com",
        mobile: "+917809478308",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Plumbing", "Electrical"]
    },
    {
        username: "Hari",
        id:"2",
        email: "Hari@gmail.com",
        mobile: "+917842478308",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Automobile Mechanic"]
    },
    {
        username: "Adhil",
        id:"3",
        email: "adhil@gmail.com",
        mobile: "+917805471388",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Realtor"]
    },
    {
        username: "Suresh",
        id:"4",
        email: "suresh@gmail.com",
        mobile: "+917209878308",
        country: "India",
        state: "Kerala",
        location: "",
        services: ["Construction"]
    }
]

export const services:ServiceInfo[] = [
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

export const servicehistory:ServiceHistory[] = [
    {
        service: services[1],
        date:"11/08/2024",
        provider: servicePoviders[2],
        time:"10:00 AM",
        status:"Pending"
    },
    {
        service: services[3],
        date:"11/08/2024",
        provider: servicePoviders[1],
        time:"10:00 AM",
        status:"Approved"
    },
    {
        service: services[1],
        date:"11/08/2024",
        provider: servicePoviders[2],
        time:"10:00 AM",
        status:"Pending"
    },
    {
        service: services[1],
        date:"11/08/2024",
        provider: servicePoviders[3],
        time:"10:00 AM",
        status:"Approved"
    },
    {
        service: services[2],
        date:"11/08/2024",
        provider: servicePoviders[2],
        time:"10:00 AM",
        status:"Requested"
    },
    {
        service: services[3],
        date:"11/08/2024",
        provider: servicePoviders[1],
        time:"10:00 AM",
        status:"Approved"
    },
    {
        service: services[2],
        date:"11/08/2024",
        provider: servicePoviders[1],
        time:"10:00 AM",
        status:"Pending"
    }
]
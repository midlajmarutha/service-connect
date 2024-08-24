export type User = {
    username:string;
    email:string;
}

export type ServiceProvider = {
    username:string;
    id:string;
    email:string;
    mobile:string;
    country:string;
    state:string;
    location:string;
    services:string[];
    imageurl?:string;
}

export type ServiceInfo = {
    service:string;
    price:string;
    provider:ServiceProvider;
    location:string;
}

export type ServiceHistory = {
    service: ServiceInfo,
    date: string,
    provider: ServiceProvider,
    time: string,
    status: "Requested" | "Approved" | "Pending"
}
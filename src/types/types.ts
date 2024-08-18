export type User = {
    username:string;
    email:string;
}

export type ServiceProvider = {
    username:string;
    email:string;
    mobile:string;
    country:string;
    state:string;
    location:string;
    services:string[];
    imageurl?:string;
}
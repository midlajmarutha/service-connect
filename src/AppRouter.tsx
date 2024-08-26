import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/user/home';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import ServiceProvider from './pages/user/pages/serviceprovider';
import NewBookingPage from './pages/user/pages/newbookingpage/newbookingpage';


function AppRouter(){
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"auth/signin",
      element:<Signin/>
    },
    {
      path:"auth/signup",
      element:<Signup/>
    },
    {
      path:"provider/:id",
      element:<ServiceProvider/>
    },
    {
      path:"booking/:id",
      element:<NewBookingPage/>
    }
  ])
  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default AppRouter;
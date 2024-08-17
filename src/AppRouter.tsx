import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/home';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';

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
    }
  ])
  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default AppRouter;
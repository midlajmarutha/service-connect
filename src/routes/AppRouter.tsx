import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from '../pages/user/home';
import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';
import ServiceProvider from '../pages/user/serviceprovider';
import NewBookingPage from '../pages/user/newbookingpage/newbookingpage';
import PaymentPage from '@/pages/user/paymentpage/paymentpage';
import AddCard from '@/pages/user/paymentpage/addcard-page';
import ErrorPage from '@/components/shared/error-page';


function AppRouter(){
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      errorElement:<ErrorPage/>
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
    },
    {
      path:"payment",
      element:<PaymentPage/>,
    },
    {
      path:"/payment/addcrd",
      element:<AddCard/>
    }
  ])
  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default AppRouter;
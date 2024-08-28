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
import ReciptPage from '@/pages/user/paymentpage/recipt';
import ProviderDashboard from '@/pages/service-provider/dashboad/provider-dashboard';


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
      path:"/payment/addcard",
      element:<AddCard/>
    },
    {
      path:"payment/recipt",
      element:<ReciptPage/>
    },
    {
      path:"provider",
      element:<ProviderDashboard/>
    }
  ])
  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default AppRouter;
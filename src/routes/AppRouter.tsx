import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';
import ServiceProvider from '../pages/user/serviceprovider';
import NewBookingPage from '../pages/user/newbookingpage/newbookingpage';
import PaymentPage from '@/pages/user/paymentpage/paymentpage';
import AddCard from '@/pages/user/paymentpage/addcard-page';
import ErrorPage from '@/components/shared/error-page';
import ReciptPage from '@/pages/user/paymentpage/recipt';
import ProviderDashboard from '@/pages/service-provider/dashboad/provider-dashboard';
import Layout from '../pages/user/layout';
import HomePage from '@/pages/user/homepage/homepage';
import HistoryPage from '@/pages/user/historypage/historypage';
import ProfilePage from '@/pages/user/profilepage/profilepage';


function AppRouter(){
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:"/history",
          element:<HistoryPage/>
        },
        {
          path:"/new",
          element:<NewBookingPage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
      ]
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
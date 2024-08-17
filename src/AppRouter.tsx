import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

function AppRouter(){
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    
  ])
  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default AppRouter;
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Button } from '../ui/button';
type Error = {
  status:string;
  statusText:string;
  internal:boolean;
  data:string;
  error:any
}
const ErrorPage = () => {
    const error:Error = useRouteError() as Error
  return (
    <div className='flex flex-col gap-1 w-full min-h-screen justify-center items-center font-poppins'>

      <h1 className='font-bold text-5xl'>Dang it..</h1>
      <div className='relative px-1 h-auto before:content-[""] before:w-[2px] before:h-full before:bg-gray-600 before:absolute before:right-0 before:top-0 before:bottom-0 before:animate-caret-blink'>
        <h1 className='font-bold text-5xl'>{error.status}</h1>
      </div>
      <article className='font-semibold'>{error.statusText}</article>
      <article className='text-sm '>{error.data}</article>
      <Link to="/"><Button>Go back to home</Button></Link>
    </div>
  )
}

export default ErrorPage

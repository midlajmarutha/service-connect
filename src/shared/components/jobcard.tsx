import { JobInfo } from '@/types/types'
import React from 'react'

const JobCard = ({info}:{info:JobInfo}) => {
  return (
    <div className='flex flex-col min-w-48 w-48 rounded-md font-poppins bg-white'>
      <div className='h-24 bg-slate-500 rounded-t-md'>

      </div>
      <div className='flex flex-col gap-1 p-2'>
        <div className='text-xs text-blue-700'>
          {info.service}
        </div>
        <div>
          {info.service}
        </div>
        <div className='flex gap-1 text-xs'>
          <span className='text-yellow-600'>
            {info.price}
          </span>
          <span>
            {info.location}
          </span>
        </div>
      </div>
    </div>
  )
}

export default JobCard

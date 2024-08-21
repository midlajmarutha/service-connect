import { ServiceHistory } from '@/types/types'
import clsx from 'clsx'
import React from 'react'

const HistoryCard = ({item}:{item:ServiceHistory}) => {
  return (
    <div className={clsx('flex flex-col gap-1 p-2 bg-white rounded-md border-l-4 font-poppins',item.status === "Approved" ? "border-green-700" : item.status !== "Pending" && "border-red-600")}>
      <div className='text-sm text-blue-700'>
        {item.service.service}
      </div>
      <div>
        {item.provider.username}
      </div>
      <div className='flex gap-1'>
        <div>
          {item.date}
        </div>
        <div>
          {item.time}
        </div>
      </div>
    </div>
  )
}

export default HistoryCard

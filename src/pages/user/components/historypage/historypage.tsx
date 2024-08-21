import { servicehistory } from '@/data'
import React from 'react'
import HistoryCard from './components/history-card'

const HistoryPage = () => {
  return (
    <div className='p-4 flex flex-col gap-2'>
        {
          servicehistory.map((history,index)=>{
            return (
              <HistoryCard item={history} key={index}/>
            )
          })
        }
    </div>
  )
}

export default HistoryPage

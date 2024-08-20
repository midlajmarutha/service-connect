import { servicehistory } from '@/data'
import React from 'react'
import HistoryCard from './components/history-card'

const HistoryPage = () => {
  return (
    <div>
        {
          servicehistory.map((history,index)=>{
            return (
              <HistoryCard item={history}/>
            )
          })
        }
    </div>
  )
}

export default HistoryPage

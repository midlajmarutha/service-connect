import { ServiceHistory } from '@/types/types'
import React from 'react'

const HistoryCard = ({item}:{item:ServiceHistory}) => {
  return (
    <div className='flex'>
        {item.service.service}
    </div>
  )
}

export default HistoryCard

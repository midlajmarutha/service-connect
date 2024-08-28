import Header from '@/components/shared/header'
import SearchBar from '@/components/shared/searchbar'
import LineChart from '@/components/specific/service-provider/dashboard/charts/LineChart'
import React from 'react'


const ProviderDashboard = () => {
  return (
    <div className='bg-slate-100 min-h-screen w-full'>
      <Header/>
      <SearchBar/>
      <div className='p-4 w-full'>
        <LineChart/>
      </div>
    </div>
  )
}

export default ProviderDashboard

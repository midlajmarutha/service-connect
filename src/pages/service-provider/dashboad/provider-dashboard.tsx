import Header from '@/components/shared/header'
import SearchBar from '@/components/shared/searchbar'
import LineChart from '@/components/specific/service-provider/dashboard/charts/LineChart'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useSearchParams } from 'react-router-dom'


const ProviderDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("tab"))
  return (
    <div className='bg-slate-100 min-h-screen w-full'>
      <Header/>
      <SearchBar/>
      <div className='p-4 w-full'>
        <LineChart/>
      </div>
      <Button onClick={()=>{setSearchParams({"tab":"analytics"})}}>asf</Button>
      {searchParams.get("tab")}
    </div>
  )
}

export default ProviderDashboard

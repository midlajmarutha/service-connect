import { MenuIcon } from 'lucide-react'
import AdBanner from './components/AdBanner'
import JobCard from '@/shared/components/jobcard'
import { jobs } from '@/data'
import SearchBar from '@/shared/components/searchbar'

const HomePage = () => {
  return (
    <div>
      <div className="flex gap-2 p-3 items-center">
        <div className='flex p-1 text-blue-700 hover:bg-blue-100 transition-all rounded-md'>
          <MenuIcon/>
        </div>
        <div className='font-medium text-l font-poppins'>
          <h1>ServiceConnect</h1>
        </div>
      </div>
      <SearchBar/>
      <AdBanner/>
      <div className='m-4'>
        <div className='font-poppins font-bold'>
          Top services
        </div>
        <div className="flex gap-1 overflow-x-scroll">
          {
            jobs.map((info,index)=>{
              return(
                <JobCard info={info} key={index}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage

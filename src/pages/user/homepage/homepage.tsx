import AdBanner from './components/AdBanner'
import { services } from '@/data'
import SearchBar from '@/components/shared/searchbar'
import { FocusEvent, useState } from 'react'
import Header from '@/components/shared/header'
import ServiceCard from '@/components/shared/servicecard'

const HomePage = () => {
  const [searchFocus, setSearchFocus] = useState<boolean>(false)
  function searchbarFocus(event:FocusEvent){
    console.log(event.type)
    switch (event.type){
      case "focus":
        setSearchFocus(true)
        break;
      case "blur":
        setSearchFocus(false)
        break;
    }
  }
  return (
    <div>
      {
        !searchFocus && <Header/>
      }
      <SearchBar onFocus={searchbarFocus}/>
      {
        !searchFocus &&
        <>
        <AdBanner/>
        <div className='m-4'>
          <div className='font-poppins font-bold'>
            Top services
          </div>
          <div className="flex gap-1 overflow-x-scroll">
            {
              services.map((info,index)=>{
                return(
                  <ServiceCard info={info} key={index}/>
                )
              })
            }
          </div>
        </div>
        </>
      }
    </div>
  )
}

export default HomePage

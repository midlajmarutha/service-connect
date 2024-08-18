import { MenuIcon } from 'lucide-react'
import AdBanner from './components/AdBanner'

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
      <AdBanner/>
    </div>
  )
}

export default HomePage

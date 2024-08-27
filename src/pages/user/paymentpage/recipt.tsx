import PageHeader from '@/components/shared/page-header'
import { Button } from '@/components/ui/button'
import { BadgeCheck, DownloadIcon, PenIcon, Share2Icon } from 'lucide-react'
import React from 'react'

const ReciptPage = () => {
  return (
    <div className='flex flex-col p-3 font-poppins container'>
      <PageHeader pageTitle='E-Recipt'/>
      <div className='mt-16 flex flex-col items-center'>
        <div className='flex gap-1'>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-2 bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-3 bg-black'></span>
            <span className='h-16 w-[2px] bg-black'></span>
            <span className='h-16 w-[3px] bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-2 bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-[5px] bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-2 bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-3 bg-black'></span>
            <span className='h-16 w-1 bg-black'></span>
            <span className='h-16 w-[2px] bg-black'></span>
        </div>
        <div className='text-xs'>S321 2LL1 4219031001CJE12KV</div>
        <div className="flex flex-col w-full mt-14">
        <div className="flex px-8 w-full justify-between">
            <div>
                Name
            </div>
            <div>
                James Campell
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                Email
            </div>
            <div>
                jamescampell@gmail.com
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                Amount
            </div>
            <div>
                RS.500
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                Transaction Method
            </div>
            <div>
                Net Banking
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                Bank Name
            </div>
            <div>
                HDFC Bank
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                IFCE CODE
            </div>
            <div>
                HDFCML6096
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                A/C Number
            </div>
            <div>
                4572 3283 2937 2485
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                Trasaction ID
            </div>
            <div>
                SWL279340042KD
            </div>
        </div>
        <div className="flex px-8 w-full justify-between">
            <div>
                Status
            </div>
            <div className='flex gap-1'>
                <span>paid</span>
                <BadgeCheck fill='#00ff8c' stroke='white'/>
            </div>
        </div>
        </div>
        <div className='mt-8'>
            <Button variant={"outline"}><Share2Icon/></Button>
            <Button variant={"outline"}><PenIcon/></Button>
            <Button variant={"outline"}><DownloadIcon/></Button>
        </div>
      </div>
    </div>
  )
}

export default ReciptPage

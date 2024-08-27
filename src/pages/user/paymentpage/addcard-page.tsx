import PageHeader from '@/components/shared/page-header'
import React from 'react'

const AddCard = () => {
  return (
    <main>
      <div className="flex flex-col p-3 font-poppins">
        <div>
          <PageHeader pageTitle='Add card'/>
        </div>
        <div className='w-full max-w-lg px-9 my-4 '>
          <div className="flex flex-col gap-9 w-full h-60 p-8 font-mono text-gray-300 bg-gray-900 border-l border-t border-l-gray-300 border-t-gray-300 shadow-2xl rounded-xl">
            <div className='h-10 w-14 rounded-md bg-gray-300'></div>
            <div>
              <div>
                895* **** **** 4598
              </div>
              <div>
                JAMES CAMPELL
              </div>
            </div>
            <div className='text-sm'>
              <div>
                valid till 11/05/2027
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddCard

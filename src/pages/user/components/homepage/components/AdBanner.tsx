import React from 'react'

const AdBanner = () => {
  return (
    <div>
      <div className='flex h-48 text-white p-4 bg-gradient-to-t from-blue-600 to-blue-800 m-4 rounded-lg'>
        <div className='flex flex-col justify-center font-poppins text-xl w-1/2'>
          <div>
            Special Offer
          </div>
          <div className='text-4xl font-semibold'>
            25% off
          </div>
          <div className='text-sm'>
            <p>
              special offer only available till January 04
            </p>
          </div>
        </div>
        <div className='flex justify-center p-2'>
          <img className='' src="public/bannerimage.svg" alt="image of painter" />
        </div>
      </div>
    </div>
  )
}

export default AdBanner

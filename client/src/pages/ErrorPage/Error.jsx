import React from 'react';
import {images} from '../../assets/assets'

const Error = () => {
  return (
    <section className='py-8 mt-[7rem]'>
      <div className="content flex w-full h-full flex-col items-center justify-between">
        <div className='h-full w-fit relative mb-[2rem] mt-[1rem]'>
          <img className='w-[10rem] absolute top-[-2rem] right-0 left-[50%] translate-x-[-50%]' src={images.fourofourimg} alt="404 img" />
          <img className='md:w-[32rem]' src={images.aloneimg} alt="alone-png" />
        </div>
          <p className='text-gray-700 mb-[1rem]'>Sorry, this page isn't available - it looks missing.</p>
          <button className='bg-primary hover:bg-primaryHover duration-500 py-2 px-4 rounded-md text-white '>Go Home</button>
      </div>
    </section>
  )
}

export default Error
import React from 'react'

const CTA = () => {
  return (
    <div className='flex flex-col mt-10 md:mt-20 w-full py-8 self-center items-center justify-center bg-[#1E50FF] rounded-2xl'>
        <h2 className='text-[30px] leading-[60px] text-center md:text-[30px] lg:text-5xl xl:text-[40px] lg:leading-[80px] font-medium'>
            Create Your Own NFT!
        </h2>
        <p className='text-base text-[#ADB9C7] text-center my-5 md:w-[400px] lg:w-[400px] xl:w-[550px]'>
            We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!
        </p>
        <button className='w-72 rounded-2xl hover:text-lg hover:px-2 hover:py-1 duration-500 bg-white text-[#1E50FF] px-5 py-4 font-semibold text-2xl'>Join Community Now</button>
    </div>
  )
}

export default CTA
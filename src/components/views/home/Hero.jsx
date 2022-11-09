import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import herobird1 from '../../../assets/herobird1.png';
import herobird2 from '../../../assets/herobird2.png';
import herobird3 from '../../../assets/herobird3.png';


const Hero = () => {
  return (
    <div className='p-2 mt-10 md:mt-20 w-[96.5%] px-5'>
        {/*TOP*/}
        <div className='md:flex justify-between items-center'>
            <h1>
                Discover a New Era of <span className='text-[#1E50FF]'>Crypto</span> Currency
            </h1>
            <div>
                <p className='text-base text-[#ADB9C7] text-center my-5 md:w-[400px] md:text-left lg:w-[400px] xl:w-[550px]'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className='flex gap-1 items-center justify-center md:justify-start'>
                    <span className='text-base'>Get Started</span>
                    <BsArrowUpRight size={20}/>
                </div>
            </div>

        </div>
        {/* BOTTOM*/}
        <div className=' my-5 flex flex-col gap-10 md:gap-8 lg:gap-12 xl:gap-32 items-center justify-center md:flex-row md:my-10 xl:pt-10 sm:grid sm:grid-cols-3'>
            <img src={herobird1} alt="" className='h-40 w-64 md:h-52 md:w-64 lg:w-72 lg:h-72 xl:w-80'  />
            <img src={herobird2} alt="" className='h-40 w-64 md:h-52 md:w-64 lg:w-72 lg:h-72 xl:w-80'  />
            <img src={herobird3} alt="" className='h-40 w-64 md:h-52 md:w-64 lg:w-72 lg:h-72 xl:w-80'  />

        </div>
    </div>
  )
}

export default Hero
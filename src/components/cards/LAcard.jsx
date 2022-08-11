import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import fire from '../../assets/fire.png'

const LAcard = (props) => {
  return (
    <div className='border border-[#1E50FF] p-5 max-w-xs rounded-2xl md:w-96 lg:w-72 xl:w-96 flex flex-col items-center justify-center'>
        <div>
            <img src={props.productImg} alt="" className='w-full h-full' />
            <div className='w-min px-2 py-2 relative left-56 bottom-[275px] sm:left-48 md:left-56 md:bottom-[320px] lg:bottom-[90%] lg:left-[195px] xl:bottom-[95%] xl:left-56 z-10 rounded-full bg-slate-50'>
                <AiFillHeart size={24} color='#FF4D6D'/>
            </div>
        </div>

        <div className='w-full pt-5 flex items-center justify-between'>
            <h3 className='text-2xl sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold'>{props.productTitle}</h3>
            <h3 className='text-[#ADB9C7]'>Current Bid</h3>
        </div>

        <div className='w-full pt-5 flex items-center justify-between'>
            <div className='flex gap-1 items-center'>
                <img src={props.avatar} alt="" className='w-10 h-10' />
                <h3 className='text-[#ADB9C7]'>@{props.artist}</h3>
            </div>
            <h3 className='text-2xl sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold'>{props.price} eTH</h3>
        </div>

        <div className='flex pt-5 justify-between w-full items-center'>
            <div className='flex gap-4 items-center'>
                <img src={fire} alt="" className='w-5 h-5' />
                <h3 className='text-xl lg:text-lg xl:text-xl font-semibold'>05:12:07:26</h3>
            </div>
            <button className='rounded-xl px-8 sm:px-7 md:px-12 lg:px-8 xl:px-12 lg:py-1 xl:py-2 py-2 text-3xl sm:text-xl lg:text-2xl font-semibold cursor-pointer bg-[#1E50FF] hover:bg-[#1e50ff]/30 duration-500'>Bid</button>
        </div>
        <div></div>
    </div>
  )
}

export default LAcard
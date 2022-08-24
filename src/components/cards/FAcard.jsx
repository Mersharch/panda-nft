import React from 'react'
import Check from '../../assets/Check.png'
import { FaEthereum } from "react-icons/fa";

const FAcard = ({fImg, fName, fPrice}) => {
  return (
    <div className='px-3 py-5 hover:bg-slate-800 flex flex-col items-center duration-200 hover:border-[#1e50ff] hover:rounded-2xl hover:px-2 justify-center'>
        <div>
            <img src={fImg} alt="" className='w-48 h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-96 xl:h-48' />
            <img src={Check} alt="" className='w-10 h-10 relative left-[140px] bottom-10 md:left-[160px] md:bottom-[50px] lg:bottom-[18%] lg:left-[185px] xl:bottom-[18%] xl:left-28 z-10' />
        </div>

        <h3 className='text-3xl lg:text-2xl xl:text-2xl font-semibold'>{fName}</h3>

        <div className='flex gap-1 items-center pt-3'>
            <FaEthereum/>
            <h3>{fPrice} ETH</h3>
        </div>
        <div></div>
    </div>
  )
}

export default FAcard
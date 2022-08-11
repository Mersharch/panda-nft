import React from 'react'
import { FiMonitor } from "react-icons/fi";

const CnScard = ({main, description}) => {

  return (
    <div className='group odd:bg-[#272D37]  px-2 pt-10 pb-5 max-w-xs rounded-2xl md:w-96 lg:w-72 xl:w-96  gap-10 lg:gap-5 flex flex-col items-center justify-center even:border even:border-white'>
        <div className='rounded-[500%] bg-[#1E50FF] flex items-center justify-center p-5 w-min'>
            <FiMonitor size={24} color='white'/>
        </div>
        <h2 className='text-semibold text-xl md:text-2xl lg:text-3xl'>{main}</h2>
        <p className='text-base text-[#ADB9C7] text-center'>
          {description}
        </p>
    </div>
  )
}

export default CnScard
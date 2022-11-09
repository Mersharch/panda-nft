import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchField = () => {
  return (
    <div className='flex items-center justify-between border border-[#EEF2F6] rounded-lg w-80 lg:w-[48rem] sm:w-96 p-3'>
        <input type="text" name="search" id="search" placeholder='Type your keywords...' className='border-none outline-none bg-transparent text-lg text-[#bec7cf] font-bold w-[95%l sm:w-[90%] lg:w-[94%]' />
        <div className='rounded-full bg-[#1E50FF] p-1 flex items-center justify-center'>
            <BiSearch size={22} />
        </div>
    </div>
)}

export default SearchField
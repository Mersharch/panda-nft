import React from 'react'
import binance from '../assets/binance.png'
import trust from '../assets/trust-wallet.png'
import metamask from '../assets/metamask.png'
import coinbase from '../assets/Coinbase.png'




const Partners = () => {
  return (
    <div className='flex mt-10 md:mt-20 w-full flex-col gap-10 items-center justify-center'>
        <h2 className='text-[30px] leading-[60px] text-center md:text-[30px] lg:text-5xl xl:text-[40px] lg:leading-[80px] font-semibold'>Partners</h2>
        <ul className='grid grid-cols-2 items-center mt-4 justify-around gap-10 self-center md:flex md:gap-20 lg:gap-40'>
            <li>
                <img src={binance} alt="" className='w-32 h-6' />
            </li>

            <li>
                <img src={trust} alt="" className='w-32 h-6' />
            </li>

            <li>
                <img src={metamask} alt="" className='w-32 h-6' />
            </li>

            <li>
                <img src={coinbase} alt="" className='w-32 h-6' />
            </li>
        </ul>
    </div>
  )
}

export default Partners
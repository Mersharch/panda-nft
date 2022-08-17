import React, {useState, useEffect} from 'react'
import LAcard from './cards/LAcard'
import glassStatue from '../assets/glassStatue.png'
import avatar1 from '../assets/avatar.png'
import boneChain from '../assets/boneChain.png'
import sheCat from '../assets/sheCat.png'

const LiveAuction = () => {
  const laProducts = [
    {
      'productImg': `${glassStatue}`,
      'productTitle':'Dao Vinci#0000',
      'avatar': `${avatar1}`,
      'artist':'SalvadorDali',
      'price': 4.89 
    },
    {
      'productImg': `${boneChain}`,
      'productTitle':'Fangster 8668',
      'avatar': `${avatar1}`,
      'artist':'Kurrebe',
      'price': 4.89 
    },
    {
      'productImg': `${sheCat}`,
      'productTitle':'Sherbet 3062',
      'avatar': `${avatar1}`,
      'artist':'Noche',
      'price': 4.89 
    },
  ]

  const [time, setTime] = useState()

  useEffect(() => {
    
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString())
    }, 1000);
    
  }, [])
  
  
  return (
    <div className='mt-10 md:mt-20 w-full flex flex-col items-center justify-center'>
        <div className=' px-8 w-full flex items-center justify-center lg:justify-between'>
            <h2 className='text-[30px] leading-[60px] text-center md:text-[30px] lg:text-5xl xl:text-[40px] lg:leading-[80px] font-semibold'>Live Auctions</h2>
            <button className='border border-[#1E50FF] hover:text-lg duration-500 rounded-xl p-2 cursor-pointer hidden lg:block'>Get Started</button>
        </div>

        {/* CARDS */}
        <div className='flex py-14 flex-col sm:grid sm:grid-cols-2 gap-10 xl:gap-36 md:grid md:grid-cols-2 lg:grid-cols-3'>
          {laProducts.map((product) => {
            return (
            <LAcard
              productImg={product.productImg}
              productTitle={product.productTitle} 
              avatar={product.avatar}
              artist={product.artist}
              price={product.price}
              time={time}
            />)
          })}

        </div>
        <button className='border border-[#1E50FF] hover:text-lg duration-500 text-xl rounded-xl p-2 cursor-pointer lg:hidden'>Get Started</button>
    </div>
  )
}

export default LiveAuction
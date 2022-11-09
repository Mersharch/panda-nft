import React, {useState, useEffect} from 'react'
import LAcard from '../../cards/LAcard'
import glassStatue from '../../../assets/glassStatue.png'
import avatar1 from '../../../assets/avatar.png'
import boneChain from '../../../assets/boneChain.png'
import sheCat from '../../../assets/sheCat.png'

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
            <h2>Live Auctions</h2>
            <button className='hover:text-lg duration-500 hidden lg:block'>Get Started</button>
        </div>

        {/* CARDS */}
        <div className='flex py-14 flex-col  gap-10 xl:gap-36 sm:flex-row sm:flex-wrap items-center justify-center'>
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
        <button className='hover:text-lg duration-500 lg:hidden'>Get Started</button>
    </div>
  )
}

export default LiveAuction
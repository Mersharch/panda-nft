import React from 'react'
import FAcard from './cards/FAcard'
import artist from '../assets/artist.png'
import artist2 from '../assets/artist2.png'
import artist3 from '../assets/artist3.png'
import artist4 from '../assets/artist4.png'
import artist5 from '../assets/artist5.png'
import artist6 from '../assets/artist6.png'

const Featured = () => {

  const fcards = [
    {'fName': 'Crispin Berry', 'fPrice': 214.2, 'fImg': `${artist}`, }, {'fName': 'Wade Warren', 'fPrice': 214.2, 'fImg': `${artist2}`, }, {'fName': 'Robert Fox', 'fPrice': 214.2, 'fImg': `${artist3}`, },
    {'fName': 'Jacob Jones', 'fPrice': 214.2, 'fImg': `${artist4}`, }, {'fName': 'Ralph Edwards', 'fPrice': 214.2, 'fImg': `${artist5}`, }, {'fName': 'Arlene McCoy', 'fPrice': 214.2, 'fImg': `${artist6}`, },
  ]
  return (
    <div className='mt-10 md:mt-20 w-full flex flex-col items-center justify-center'>
        <div className=' px-8 w-full flex items-center justify-center lg:justify-between'>
            <h2>Featured Artists</h2>
            <button className='hover:text-lg duration-500 hidden lg:block'>Get Started</button>
        </div>

        {/* CARDS */}
        <div className='gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3 mt-4 xl:grid-cols-6 pt-6'>
            {fcards.map(({fImg, fName, fPrice}) => {
              return(
                <FAcard
                  fImg={fImg}
                  fName={fName}
                  fPrice={fPrice}
                />
              )
            })}
        </div>
        
        <button className='hover:text-lg duration-500 lg:hidden'>Get Started</button>
    </div>
  )
}

export default Featured
import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loader = ({loading}) => {
  return (
    <div className='bg-[#02050E] h-screen flex items-center justify-center'>
        <HashLoader
            size={150}
            color='white'
            loading={loading}
        />
    </div>
  )
}

export default Loader
import React from 'react'

import SearchField from '../components/ui/SearchField'

const Discover = () => {
  return (
    <div>
        <div className=" flex flex-col items-center justify-center gap-10 mt-10">
            <h2>Explore Collectibles</h2>
            <SearchField/>
        </div>
    </div>
  )
}

export default Discover
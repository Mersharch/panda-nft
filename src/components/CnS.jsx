import React from 'react'
import CnScard from './cards/CnScard'

const CnS = () => {

  const cnsCard = [
    {
      'main': 'Set up your wallet',
      'desc': 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'
    },
    {
      'main': 'Add your NFTs',
      'desc': 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'
    },
    {
      'main': 'List them for sale',
      'desc': 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'
    },
  ]
  return (
    <div className='mt-10 md:mt-20 w-full flex flex-col gap-20 items-center justify-center'>
        <h2>Create And Sell Your NFTs</h2>

        {/* CARDS */}
        <div className='flex flex-col mt-0 gap-10 xl:gap-36 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {cnsCard.map (({main, desc}) => {
              return(
                <CnScard
                  main={main}
                  description={desc}
                />
              )
            })}

        </div>
    </div>
  )
}

export default CnS
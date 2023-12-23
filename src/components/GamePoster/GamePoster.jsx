import React from 'react'
import poster1 from '../../assets/poster1.png'
const GamePoster = () => {
  return (
    <div className="flex flex-col items-center justify-center w-98 px-4 py-8 gap-2">
        <div className='flex items-center justify-center w-89 h-45'>
           <img src={poster1} alt="image" className='w-89 h-45 flex-shrink-0 bg-cover bg-no-repeat bg-center bg-lightgray rounded-2xl' />  
        </div>
       
    </div>
  )
}

export default GamePoster;
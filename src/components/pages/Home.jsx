import React from 'react'
import { FaPlay, FaPlus } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='w-full h-full'>
      {/* Hero div of the homepage */}
      <div className='10/12 h-4/5 flex items-center justify-center'>
        <div className='w-10/11 h-11/12 rounded-xl overflow-hidden'>
          <div className='w-[76.9em] h-[33.3em] absolute z-20 rounded-xl flex bg-black/60'>

            {/* The left div of the hero */}
            <div className='w-1/2 h-full flex flex-col justify-center gap-10'>
              <div className='w-full h-2/5 relative ml-10'>
                <p className='font-light text-5xl text-gray-300/70'> Captain America </p>
                <p className='font-bold text-5xl w-2/3 text-gray-500 relative left-20'>The MJONIR WARRIOR</p>
              </div>
              <div className='w-3/5 h-1/6 relative ml-10 flex items-center justify-evenly'>
                <div className='w-3/7 h-2/3 bg-fuchsia-500/70 rounded-2xl flex items-center justify-evenly'>
                  <FaPlay className='text-gray-300' />
                  <p className='text-gray-300 text-lg font-semibold'>Watch Now</p>
                </div>
                <div className='w-7/15 h-2/3 flex items-center justify-evenly border-2 border-fuchsia-500/70 rounded-2xl'>
                  <FaPlus className='font-medium text-lg text-fuchsia-500/80'/>
                  <p className='font-medium text-fuchsia-500/80'>Add to Queue</p>
                </div>
              </div>
            </div>

            {/* The right div of the hero */}
            <div className='w-1/2 h-full flex place-items-end justify-center'>
              <div className='w-full h-1/3 bg-fuchsia-500 relative -top-3'></div>
            </div>

          </div>
          <img src="../images/MJONIR Warrior.jpeg" alt="" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Home
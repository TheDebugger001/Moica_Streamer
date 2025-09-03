import React from 'react'
import { FiFilter, FiSearch, FiBell } from 'react-icons/fi'
import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <div className='w-full h-24 flex items-center justify-between'>
      <div className='w-3/7 relative left-15 h-full bg-black flex items-center justify-evenly'>
        <div className='w-1/6 h-2/3 flex items-center justify-evenly'>
          <div className='w-8 h-8 bg-white/30 rounded-full'></div>
          <div className='w-8 h-8 bg-white/30 rounded-full'></div>
        </div>

        <div className='w-4/5 h-full flex items-center'>
          <div className='w-10 h-2/5 relative z-10 left-10 flex items-center justify-center'> <FiSearch className='text-xl font-light text-gray-500' /></div>
          <input type="text"
          placeholder='Search anything' 
          className='border-1 w-6/7 h-4/7 rounded-lg outline-none border-gray-500/50 text-gray-300 pl-10 pr-10 placeholder:font-light'/>
          <div className='w-10 h-2/5 relative z-10 -left-10 flex items-center justify-center'> <FiFilter className='text-xl font-light text-gray-400' /></div>
        </div>
      </div>

      <div className='w-1/9 h-full relative right-8 flex items-center justify-evenly'>
        <div className='w-8 h-8 rounded-full bg-gray-500/50 flex items-center justify-center'> <FiBell className='font-light text-gray-300 text-xl' /> </div>
        <div className='w-8 h-8 rounded-full bg-gray-500/50 flex items-center justify-center'> <FiBell className='font-light text-gray-300 text-xl' /> </div>
        <div className='w-10 h-10 rounded-full overflow-hidden border-1 border-gray-300 bg-red-300'>
          <UserProfile />
        </div>
      </div>
    </div>
  )
}

export default Navbar
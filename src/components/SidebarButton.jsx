import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarButton = ({ children, clicked_now, onClick, icon }) => {


  return (
    <>
      <Link to="" className='w-full h-1/5 flex justify-center'>
         <button
         onClick={onClick}
         className='w-full h-full flex items-center gap-4 hover:bg-gray-300/20'>
          <div className={clicked_now ? `w-[.2em] h-full bg-red-500 rounded-e-2xl`: 'w-[.3em] h-full rounded-e-2xl'}></div>
          <div className='w-7/9 h-full flex items-center gap-3'>
          <div className= {clicked_now ? 'w-10 h-10 flex items-center justify-center text-red-500 transition duration-150': 'w-10 h-10 flex items-center justify-center text-white/30 transition duration-150' } >{ icon }</div>
            <p className= {clicked_now ? 'font-semibold text-white/70 text-sm' : 'text-white/30 text-sm font-semibold'} > { children } </p>
          </div>
         </button>
      </Link>
    </>
  )
}

export default SidebarButton
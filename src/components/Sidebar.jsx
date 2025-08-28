import React, { useState } from 'react'
import { FiHeart, FiCalendar, FiCompass } from 'react-icons/fi'
import { FaHeart, FaCalendar, FaCompass } from 'react-icons/fa'
import SidebarButton from './SidebarButton'

const Sidebar = () => {

  const [clicked, setClicked] = useState('click_now')
  const [changeIcon, setChangeIcon] = useState(false)

  const toggleIcon = () => {
    setChangeIcon(true)
  }

  return (
    <div className='w-1/6 h-screen border-r-1 border-red-600 flex flex-col items-center justify-evenly'>
      <div className='w-full h-17 bg-red-500 relative top-4'></div>

      <div className='w-full h-2/6 flex flex-col items-center justify-evenly border-b-2 border-gray-600/30'>
         <div className='w-full h-2 flex items-center'>
            <p className='font-bold text-gray-500 text-xs ml-9 mt-10'>News Feed</p>
         </div>
         <div className='w-full h-5/6 relative top-8'>
          <SidebarButton
          onClick={() => setClicked('browse')}
          clicked_now={clicked === 'browse'}
          icon={
            clicked === 'watch_later' ?
            <FiCompass /> : <FaCompass />
          }
          >Browse</SidebarButton>

          <SidebarButton
          onClick={() => setClicked('watch_later')}
          clicked_now={clicked === 'watch_later'}
          icon={
            clicked === 'watch_later' ?
            <FaHeart /> : <FiHeart />
          }
          >Watch Later</SidebarButton>

          <SidebarButton
          onClick={() => setClicked('calendar')}
          clicked_now={clicked === 'calendar'}
          icon={
            clicked === 'calendar' ?
            <FaCalendar /> : <FiCalendar />
          }
          >Coming Soon</SidebarButton>

         </div>
      </div>

      <div className='w-full h-2/5 '>

        <div className='w-full h-6'>
          <p className='font-semibold text-xs text-gray-500 ml-9'>Following</p>
        </div>

          {/* Followers here are they all */}
        <div className='w-full h-5/6 flex flex-col gap-3 justify-baseline flex-wrap-reverse'>
          <div className='w-9/10 h-1/6 bg-green-500'>sds</div>
          <div className='w-9/10 h-1/6 bg-green-500'>as</div>
        </div>
      </div>

      <div className='w-full h-17 bg-red-500'>

      </div>
    </div>
  )
}

export default Sidebar
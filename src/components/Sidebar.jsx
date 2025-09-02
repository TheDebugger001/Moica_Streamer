import React, { useState } from 'react'
import { FiHeart, FiCalendar, FiCompass, FiLogOut } from 'react-icons/fi'
import { FaHeart, FaCalendar, FaCompass } from 'react-icons/fa'
import SidebarButton from './SidebarButton'
import Following from './Following'

const Sidebar = () => {

  const [clicked, setClicked] = useState('click_now')
  const [changeIcon, setChangeIcon] = useState(false)
  const [toggleLoad, setToggleLoad] = useState(false)
  const [toggleLoad_word, setToggleLoad_word] = useState("See more")

  const toggleIcon = () => {
    setChangeIcon(true)
  }

  const loadToggle = () => {
    setToggleLoad(!toggleLoad)
  }

  const toggle_more_word = () => {
    if(toggleLoad !== true) {
      setToggleLoad_word("See less")
    }
    else {
      setToggleLoad_word("See more")
    }
  }

  return (
    <div className='w-1/6 h-screen border-r-1 border-red-600 flex flex-col items-center justify-between'>
      <div className='w-full h-17 bg-red-500 relative top-4'></div>

      <div className='w-full h-2/8 flex flex-col items-center justify-evenly border-b-2 border-gray-600/30'>
         <div className='w-full h-2 flex items-center'>
            <p className='font-bold text-gray-500 text-xs ml-9 mt-10'>News Feed</p>
         </div>
         <div className='w-full h-12/12 relative top-8'>
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

      <div className='w-full h-2/5 relative -top-9'>

        <div className='w-full h-6'>
          <p className='font-semibold text-xs text-gray-500 ml-9'>Following</p>
        </div>

          {/* Followers here are they all */}
        <div className={ toggleLoad == true ? `w-full h-5/6 flex flex-col gap-2 items-center-safe overflow-x-hidden transition-all duration-150` : `w-full h-4/6 flex flex-col gap-2 items-center-safe overflow-x-hidden transition-all duration-300`}>
          <Following
          follower="Opera Genny"
          follower_img="../assets/images/face1.jfif" />
          <Following
          follower="White Messa"
          follower_img="../assets/images/face1.jfif" />
          <Following
          follower="Macromensi1234!"
          follower_img="../assets/images/face1.jfif" />
          <Following
          follower="Ishagfa"
          follower_img="../assets/images/face1.jfif" />
        </div>

        <div
        onClick={loadToggle} 
        className='w-full h-10 flex items-center gap-4 relative top-2 rounded-md hover:bg-gray-300/20'>
          <div className='w-7 h-7 rounded-full bg-green-600 ml-8'>

          </div>
          <div
          onClick={toggle_more_word} 
          className='w-4/6 h-5/6 flex items-center font-semibold text-sm text-gray-300/60'>
            <p>{ toggleLoad_word }</p>
          </div>
        </div>
      </div>

      <div className='w-10/11 h-15 relative -top-4 flex items-center gap-5 transition-all duration-200 hover:bg-gray-300/30 hover:rounded-xl hover:transition-all hover:duration-200'>
          <div className='w-8 h-8 ml-6'>
            <FiLogOut className='w-full h-full text-gray-300/70' />
          </div>
          <div className='w-4/5 h-2/3 flex items-center'>
            <p className='text-xl text-gray-300/70'>Log Out</p>
          </div>
          <div></div>
      </div>
    </div>
  )
}

export default Sidebar
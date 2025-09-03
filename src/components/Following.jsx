import React, { useState } from 'react'
import { FaMountain  } from 'react-icons/fa'

const Following = ({ follower, follower_img }) => {

   const [clicked, setClicked] = useState(false)

   const handleClick = () => {
      setClicked(!clicked)
   }

  return (
    <div
    onClick={handleClick} 
    className='w-9/10 h-11 flex items-center justify-evenly relative border-b-1 border-gray-300/5 rounded-lg hover:bg-gray-300/20'>
      <div className='w-9 h-9 bg-fuchsia-700 rounded-full'>
         {/* <img src={ follower_img } alt="" className='w-full h-full object-cover'/> */}
      </div>
      <div className='w-4/6 h-1/2'>
         <p className={`text-gray-300 text-sm font-light`}>{ follower }</p>
      </div>
      {/* <div className='w-3 h-3'>
         <FaMountain className={clicked == true ? `text-xs text-gray-300 rotate-180` : `text-xs text-gray-300`} />
      </div> */}
    </div>
  )
}

export default Following
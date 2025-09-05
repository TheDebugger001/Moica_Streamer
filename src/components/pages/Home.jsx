import React, { useEffect } from 'react'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'tailwind-scrollbar-hide'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'


const Home = () => {

  return (
    <div className="w-5/6 min-h-screen flex flex-col gap-10">

      <div className='11/12 h-[80vh] flex items-center justify-center mt-15'>
        {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={3}
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{delay: 5000}}
        loop={true}
        > */}
        <div className='w-10/11 h-11/12 rounded-xl overflow-hidden'>
          <div className='w-[75.1vw] h-[73.4vh] absolute z-20 rounded-xl flex bg-black/60'>

            <div className='w-1/2 h-full flex flex-col justify-center gap-10'>
              <div className='w-full h-2/5 relative ml-10'>
                <p className='font-light text-5xl text-gray-300/70'> Captain America </p>
                <p className='font-bold text-5xl w-2/3 text-gray-500 relative left-20'>The MJONIR WARRIOR</p>
              </div>
              <div className='w-3/5 h-1/6 relative ml-10 flex items-center justify-evenly'>
                <div className='w-3/7 h-3/5 bg-fuchsia-500/70 rounded-2xl flex items-center justify-evenly'>
                  <FaPlay className='text-gray-300' />
                  <p className='text-gray-300 text-md font-semibold'>Watch Now</p>
                </div>
                <div className='w-6/15 h-3/5 flex items-center justify-evenly border-2 border-fuchsia-500/70 rounded-2xl'>
                  <FaPlus className='font-medium text-lg text-fuchsia-500/80'/>
                  <p className='font-medium text-fuchsia-500/80'>Add to Queue</p>
                </div>
              </div>
            </div>

            <div className='w-1/2 h-full flex place-items-end justify-center'>
                <div className='w-10 h-10 bg-fuchsia-500 rounded-full relative z-10 -top-13 left-5'></div>
              <div className='max-w-9/12 h-1/5 backdrop-blur-2xl bg-black/30 rounded-2xl flex gap-4 overflow-x-auto p-4 scrollbar-hide scroll-smooth relative -top-3'>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Star Wars.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Fiercely Dragons.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Avengers Last.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Star Wars.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Fiercely Dragons.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Avengers Last.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Star Wars.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Fiercely Dragons.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Avengers Last.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Star Wars.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Fiercely Dragons.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex-none w-30 h-11/12 rounded-2xl bg-gray-400 overflow-hidden'>
                  <img src="../images/Avengers Last.jpeg" alt="" className='w-full h-full object-cover' />
                </div>
              </div>
              <div className='w-10 h-10 bg-fuchsia-500 rounded-full relative z-10 -top-13 right-5'></div>
            </div>

          </div>
          <img src="../images/MJONIR Warrior.jpeg" alt="" className='w-full h-full object-cover' />
        </div>
        {/* </Swiper> */}

      </div>

      <div className='w-full h-100 flex flex-col items-center justify-between relative -top-10'>
        <div className='w-11/12'>
          <p className='font-semibold text-2xl text-fuchsia-500'>Trending Movies</p>
        </div>
        <div className='w-11/12 h-10/12 flex'>
          <div className='w-3/12 h-full rounded-lg hover:bg-fuchsia-500/10 flex flex-col items-center justify-evenly'>
            <div className='w-12/13 h-10/12 rounded-lg overflow-hidden'>
              <img src="../images/Uzui Sama.jpeg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-12/13 h-1/12'>
              <p className='font-semibold text-gray-300 text-sm'>Kimetsu no Yaiba: Entertainment District...</p>
            </div>
          </div>

          <div className='w-3/12 h-full rounded-lg hover:bg-fuchsia-500/10 flex flex-col items-center justify-evenly'>
            <div className='w-12/13 h-10/12 rounded-lg overflow-hidden'>
              <img src="../images/Star Wars.jpeg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className='w-12/13 h-1/12'>
              <p className='font-semibold text-gray-300 text-sm'>Star Wars: The Mixed Worlds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
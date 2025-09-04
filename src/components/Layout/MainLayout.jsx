import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const MainLayout = () => {

   const location = useLocation()

   const hideNav_Sid = location.pathname === '/register'

  return (
    <div className='w-full min-h-screen flex overflow-hidden'>

      {!hideNav_Sid && (
        <div className="w-1/6 h-screen fixed left-0 top-0">
          <Sidebar />
        </div>
      )}

      <div className={`flex-1 flex flex-col ${!hideNav_Sid ? "mr-1/6 flex place-items-end overflow-scroll" : ""} overflow-y-auto`}>
        {!hideNav_Sid && <Navbar />}
        <Outlet />
      </div>
      {/* {!hideNav_Sid && <Navbar />} */}
      {/* <Outlet /> */}

    </div>
  )
}

export default MainLayout
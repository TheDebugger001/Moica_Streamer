import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const MainLayout = () => {

   const location = useLocation()

   const hideNav_Sid = location.pathname === '/register'

  return (
    <div className='w-10/11 min-h-screen flex flex-col overflow-x-hidden'>

      {!hideNav_Sid && <Navbar />}
      {/* {!hideNav_Sid && <Navbar />} */}
      <Outlet />

    </div>
  )
}

export default MainLayout
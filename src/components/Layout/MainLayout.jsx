import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const MainLayout = () => {

   const location = useLocation()

   const hideNav_Sid = location.pathname === '/register'

  return (
    <div className='w-full flex'>

      {!hideNav_Sid && <Sidebar />}
      {/* {!hideNav_Sid && <Navbar />} */}
      <Outlet />

    </div>
  )
}

export default MainLayout
import { useState } from 'react'
import './App.css'
import {
  getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/pages/Register'
import Sidebar from './components/Sidebar'
import MainLayout from './components/Layout/MainLayout'
import NavbarLayout from './components/Layout/NavbarLayout'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div className='w-full min-h-screen bg-black flex flex-col'>
        <BrowserRouter>
          <Routes>
            {/* <Route index element={ <Register /> }/> */}
            <Route path='/register' element={ <Register /> }/>
            <Route element={ <MainLayout /> }>
                <Route index element={ <Home /> }/>
            </Route>
          </Routes> 
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

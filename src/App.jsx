import { useState } from 'react'
import './App.css'
import {
  getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/pages/Register'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <>
      <div className='w-full h-screen bg-black flex flex-col'>
        <BrowserRouter>
          <Routes>
            <Route index element={ <Sidebar /> }/>
            <Route path='/register' element={ <Register /> }/>
          </Routes> 
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

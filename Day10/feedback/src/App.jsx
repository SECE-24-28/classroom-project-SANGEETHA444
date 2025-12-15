import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Pots.jsx'
import { useEffect } from 'react'
import Home from './Home.jsx'
import Search from './Search.jsx'
import AddPost from './AddPost.jsx'
import { format } from 'date-fns'
import { DataProvider } from './context/DataContext.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import EditPost from './EditPost.jsx'

function App() {
  
    
  return (
    <>
    <DataProvider>
      <nav className='navigation'>
        <Link to={'/'}>Home</Link>
        <Link to={'/addpost'}>AddPost</Link>
        <Search />
      </nav>
      <Routes>
<Route path='/' element={<Home/>}/>
     
      <Route path='/addpost' element={<AddPost/>}/>
      <Route path='/editpost/:id' element={<EditPost />}/>
      </Routes>
      
    </DataProvider>
   
    </>
  )
}

export default App

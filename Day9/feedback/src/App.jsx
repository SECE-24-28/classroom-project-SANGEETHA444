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
function App() {
  
    
  return (
    <>
    <DataProvider>
      <Search/>
      <AddPost />
      <Home />
    </DataProvider>
   
    </>
  )
}

export default App

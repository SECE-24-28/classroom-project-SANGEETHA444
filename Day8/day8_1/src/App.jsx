import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headers from './Headers'
import './App.css'
import { DataProvider } from './DataContext'
import Body from './Body'
import AddStudent from './AddStudent'
import SearchStudent from './SearchStudent'

function App() {
  return ( 
    <>
    <DataProvider>
       <Headers />
       <AddStudent />
       <SearchStudent />
       <Body /> 
      </DataProvider>
    </>
  )
}
export default App

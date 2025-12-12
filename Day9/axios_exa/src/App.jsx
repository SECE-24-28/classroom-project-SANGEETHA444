import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/api.jsx'
import { useEffect } from 'react'

function App() {
 const[list,setList]=useState([])
 useEffect(()=>{
  const fetchData=async()=>{
    try{
      const response=await api.get('/student')
      console.log(response.data)
      setList(response.data)
    }catch(error){
      //console.error(err)
    }
  }
  fetchData()
 },[])
  return (
    <>
      { 
        list.map((stu)=>(
          <p key={stu.id}>{stu.id}-{stu.name}-{stu.marks}</p>

      ))}
    </>
  )
}

export default App

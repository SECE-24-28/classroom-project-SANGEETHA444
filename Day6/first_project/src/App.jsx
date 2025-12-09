import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'
function App() {
  let city="Chennai"
  let age=19
  let [count,setCount]=useState(0)
  function plus(){
    setCount(a=>a+1)
  }
  function minus(){
    setCount(a=>a-1)
    
  }
  return (
    <>
      <h2>Hello</h2>
      <h1>Welcome to {city}</h1>
      <p>{"true"}</p>
      <p>{JSON.stringify({name:"Sangeetha",age:19})}</p>
      <p>{age>18?"Eligible":"Not Eligible"}</p>
      <p>{age<20 && "Show this text only if the condition is true"}</p>
      <Header/>
      <Content/>
      <h2>Count:{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      
    </>
  )
}

export default App

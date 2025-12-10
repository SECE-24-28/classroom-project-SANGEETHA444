import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Two = () => {
  const {inc} = useContext(DataContext)
  return (
    <div>
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default Two
import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const One = () => {
  const {num} = useContext(DataContext)
  return (
    <div>{num}</div>
  )
}

export default One
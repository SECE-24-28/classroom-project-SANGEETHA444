import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'
const Headers = () => {
  const { title, department, year } = useContext(DataContext)

  return (
    <div>
      <h1>{title}-{department}-{year}</h1>
    </div>
  )
}

export default Headers
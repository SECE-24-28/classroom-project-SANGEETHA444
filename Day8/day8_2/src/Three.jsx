import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Three = () => {
  const {dec} = useContext(DataContext)
  return (
    <div>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default Three  
import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext' 

const Body = () => {
  const {list, handleDelete, handleCheck, search} = useContext(DataContext)

  return (
    <div>
      <ul>
        {list.filter(student =>
          student.name.toLowerCase().includes(search.toLowerCase())
        ).map((student) => (
          <li key={student.id}>
            <input
              type="checkbox"
              checked={student.fee}
              onChange={() => handleCheck(student.id)}
            />
            <label>{student.name}</label>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Body

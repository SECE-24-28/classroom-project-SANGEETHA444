import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const AddStudent = () => {
  const inputRef=useRef()
  const { newStudent, setNewStudent, handleAddStudent } = useContext(DataContext)
  return (
    <div>
      <form action={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Enter student name' ref={inputRef} value={newStudent} onChange={(e) => setNewStudent(e.target.value)} />
        <button type="submit" onClick={(e) => {e.preventDefault(); handleAddStudent(newStudent);setNewStudent("");inputRef.current.focus();}}>Add</button>
      </form>
    </div>
  )
}

export default AddStudent
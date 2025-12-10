import React from 'react'

const AddStudent = (props) => {
  return (
    <div>
      <form action={""}>
        <input type="text" placeholder='Enter student name' value={props.newStudent} onChange={(e) => props.setNewStudent(e.target.value)} />
        <button type="submit" onClick={(e) => {e.preventDefault(); props.handleAddStudent(props.newStudent);props.setNewStudent("")}}>Add</button>
      </form>
    </div>
  )
}
export default AddStudent
import React from 'react'
import Student from './Student'

const Body = (props) => {
  return (
    <div>
      <ul>
        {
          props.list.map((student)=>
            <Student student={student} handleDelete={props.handleDelete} handleCheck={props.handleCheck}/>
          )
        }
        
        </ul>
      </div>
  )
}

export default Body
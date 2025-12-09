import React from 'react'

const Student = (props) => {
  return (
    <div>
    
            <li key={props.student.id}>
              <input type="checkbox" checked={props.student.fee} onChange={() => props.handleCheck(props.student.id)}/>
              <label>{props.student.name}</label>
              <button onClick={()=>props.handleDelete(props.student.id)}>Delete</button>
            </li>
          
  
    </div>
  )
}

export default Student
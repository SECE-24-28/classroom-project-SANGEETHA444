import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import DataContext from './context/DataContext' 

const EditPost = () => {
  const {id} = useParams()
  const {posts,handleDelete}= useContext(DataContext)
  const post=posts.find((p)=>p.id==id)
  if(!post)
  return(
    <div>
      <h1>there is no data</h1>
    </div>
  )
  return (
    <div className='edit'>
      <h2>Edit Post</h2>
      <input type="text"value={post.title} /><br></br>
      <textarea  value={post.body}></textarea><br></br>
      <button onClick={()=>handleDelete(post.id)}>Delete</button>
    </div>
  )
}

export default EditPost
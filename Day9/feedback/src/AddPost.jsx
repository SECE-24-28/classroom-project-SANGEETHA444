
import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const AddPost = () => {
  const {handleSubmit,title,setTitle,body,setBody}=useContext(DataContext)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id=""placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea name="" id=""placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  )
}

export default AddPost
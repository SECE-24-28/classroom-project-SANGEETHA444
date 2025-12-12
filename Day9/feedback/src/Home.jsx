import React from 'react'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchResult}=useContext(DataContext)
  return (
    <div>

       {
      
      searchResult.map((post)=>(
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>      
          <p>{post.body}</p>
        </div>

      ))
}
    </div>
  )
}

export default Home
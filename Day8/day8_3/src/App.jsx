import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Gallary from './Gallary.jsx'
import PostPage from './PostPage.jsx' 
import Post from './Post.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallary">Gallary</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallary' element={<Gallary />} />
        <Route path='/postpage' element={<PostPage />} />
        <Route path='/postpage/:id' element={<Post />} />
        <Route path='/postpage/new' element={<div>New Post Page</div>} />

      </Routes>

    </>
  )
}

export default App

import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Search = () => {
  const {search,setSearch}=useContext(DataContext)  
  return (
    <div className='search'>
       <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search
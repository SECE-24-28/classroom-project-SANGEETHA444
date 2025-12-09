import React from 'react'

const SearchStudent = (props) => {
  return (
    <div>
      <form action="" onSubmit={(e)=>e.preventDefault}>
      <input type="text" placeholder='Search' value={props.search} onChange={(e) => props.setSearch(e.target.value)} />
      </form>
      
    </div>
  )
}

export default SearchStudent

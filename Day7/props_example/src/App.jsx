import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Body from './Body'
import './App.css'
import AddStudent from './AddStudent'
import SearchStudent from './SearchStudent'

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Sangeetha", fee: true },
    { id: 2, name: "John", fee: false },
    { id: 3, name: "Doe", fee: true }
  ]);
  const[newStudent,setNewStudent]=useState("")
  const[search,setSearch]=useState("")

  function handleDelete(id) {
    const updatedList = list.filter((student) => student.id !== id);
    setList(updatedList);
  }
  function handleCheck(id) {
     const updatedList=list.map((student)=>(student.id===id)?({...student,fee:!student.fee}):(student))
         setList(updatedList)

  }
  function handleAddStudent(name){
    const newid=list.length>0 ? list[list.length-1].id +1 : 1
    const newStudent={id:newid,name:name,fee:false}
    const newList=[...list,newStudent]
    setList(newList)
  }
  
  
  return ( 
    <>
      <Header title={"Students List"} 
              department={"Computer Science"}
              year={"2025"}/>
      <AddStudent newStudent={newStudent} setNewStudent={setNewStudent} handleAddStudent={handleAddStudent} />
      <SearchStudent search={search} setSearch={setSearch} />
      <Body list={list.filter(student=>(student.name.toLowerCase().includes(search.toLowerCase())
      ))} handleDelete={handleDelete} handleCheck={handleCheck}/>
    </>
  )
}
export default App

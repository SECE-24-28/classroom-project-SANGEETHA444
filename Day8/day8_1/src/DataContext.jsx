import { createContext, useState } from 'react';
import { useEffect } from 'react';
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const title="Students List"
  const department="Computer Science"
  const year="2025"
    const [list, setList] = useState([])
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
    console.log("before")
    useEffect(()=>{
      console.log("inside")
      const temp_list=[
        { id: 1, name: "Sangeetha", fee: true },
        { id: 2, name: "John", fee: false },
        { id: 3, name: "Doe", fee: true }
      ]
      setList(temp_list)
    } ,[])
    console.log("outside")
    return(
      <DataContext.Provider value={{ title, department, year, list, setList, newStudent, setNewStudent, search, setSearch, handleDelete, handleCheck, handleAddStudent }}>
        {children}
      </DataContext.Provider>
    )

}
export default DataContext;
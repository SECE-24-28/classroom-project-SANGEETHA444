import { createContext, useState,useEffect } from "react";
import { format } from "date-fns";
import api from "../api/Pots.jsx";
const DataContext = createContext({});
export const DataProvider=({children})=>{  

const [posts,setPosts]=useState([])
  const [search,setSearch]=useState("")
  const[searchResult,setSearchResult]=useState([])
  const[title,setTitle]=useState("")
  const[body,setBody]=useState("")
  useEffect(()=>{
    const fetData=async()=>{
      const res=await api.get("/feedback")
      console.log(res.data)
      setPosts(res.data)
    }
    fetData()
  },[])
  useEffect(()=>{
    const filtered=posts.filter((post)=>

      (post.title).includes(search))

      setSearchResult(filtered)
    
  },[posts,search])
  const handleSubmit=(e)=>
    {
      e.preventDefault()
      const id=posts.length?Number(posts[posts.length-1].id)+1:1
      const datetime=format(new Date(),"MMMM dd, yyyy pp")
       const newObj={id:id,title:title,datetime:datetime,body:body}
        api.post("/feedback",newObj)
        const newPosts=[...posts,newObj]
      setPosts(newPosts)
    }
      return(
        <DataContext.Provider value={{posts,search,setSearch,searchResult,title,setTitle,body,setBody,handleSubmit}}>
            {children}
        </DataContext.Provider>
     
      )
  
}
export default DataContext
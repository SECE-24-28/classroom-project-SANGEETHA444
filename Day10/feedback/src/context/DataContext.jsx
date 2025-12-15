import { useNavigate } from 'react-router-dom';
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
  const nav=useNavigate()
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

      setSearchResult(filtered.reverse())
    
  },[posts,search])
  const handleSubmit=(e)=>
    {
      e.preventDefault()
      const id=posts.length?String(Number(posts[posts.length-1].id)+1):1
      const datetime=format(new Date(),"MMMM dd, yyyy pp")
       const newObj={id:id,title:title,datetime:datetime,body:body}
        api.post("/feedback",newObj)
        const newPosts=[...posts,newObj]
      setPosts(newPosts)
      setTitle("")
      setBody("")
      alert("Post added successfully")
      nav("/")
    }
    const handleDelete=async(id)=>{
      await api.delete(`/feedback/${id}`)
      alert("Post deleted successfully")
      const newPosts=posts.filter((post)=>post.id!==id)
      setPosts(newPosts)
      nav("/")
    }
      return(
        <DataContext.Provider value={{posts,search,setSearch,searchResult,title,setTitle,body,setBody,handleSubmit,handleDelete}}>
            {children}
        </DataContext.Provider>
     
      )
  
}
export default DataContext
import { createContext } from "react";
import { useState } from "react";
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [num,setNum]=useState(0);
  const inc=()=>{
    setNum(num+1);
  }
  const dec=()=>{
    setNum(num-1);
  }


  return(
    <DataContext.Provider value={{ inc,dec,num,setNum}}>
      {children}
    </DataContext.Provider>
  )

}
export default DataContext;
import { Navigate } from "react-router-dom"

function Protectedroutes({children}) {
 
     const user = localStorage.getItem("username")
 
      if(user){
            return children
      }else{
           return <Navigate to ="/landing"/> 
      }
       
}

export default Protectedroutes
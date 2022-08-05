import axios from "axios"


const BASE_URL = process.env.REACT_APP_SERVER_URL


  
  export const Editjobapi = async (Job,JobId,token)=>{ 
     return await axios.patch(`${BASE_URL}/jobs/${JobId}`,Job,{
        headers :{
            authorization:`Bearer ${token}` 
        }
     })
  }
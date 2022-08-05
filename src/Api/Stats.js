import axios from "axios"

const BASE_URL = process.env.REACT_APP_SERVER_URL

  export const GetJobstats = async (token)=>{ 
     return await axios.get(`${BASE_URL}/jobs/stats`,{
         headers:{
            authorization:`Bearer ${token}` 
         }
     })
  }
import axios from "axios"


const BASE_URL = process.env.REACT_APP_SERVER_URL


  export const Updateuserapi = async (user,token)=>{ 
     return await axios.patch(`${BASE_URL}/auth/updateUser`,user,{
        headers :{
            authorization:`Bearer ${token}` 
        }
     })
  }
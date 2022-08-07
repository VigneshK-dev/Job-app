import axios from "axios";


const BASE_URL = process.env.REACT_APP_SERVER_URL


export const FilterApi = async ({status,jobType,sort,page,search},token)=>{
     let url = `${BASE_URL}/jobs?status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`
     if(search){
          url = url + `&search=${search}`
     }
    return  await axios.get(url,{
         headers:{
            authorization:`Bearer ${token}` 
         }
    })
 }
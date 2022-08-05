import axios from "axios";



const BASE_URL = process.env.REACT_APP_SERVER_URL



export const Addjobapi = async (job,token) => {

    return await axios.post(`${BASE_URL}/jobs`,job,{
            headers:{
                authorization:`Bearer ${token}` 
            }
        })
}
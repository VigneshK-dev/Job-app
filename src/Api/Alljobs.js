import axios from "axios";


const BASE_URL = process.env.REACT_APP_SERVER_URL



export const Alljobapi = async (token) => {

    return await axios.get(`${BASE_URL}/jobs`,{
            headers:{
                authorization:`Bearer ${token}` 
            }
        })
}
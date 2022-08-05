import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL



export const Deletejobapi = async (id,token) => {

    return await axios.delete(`${BASE_URL}/jobs/${id}`,{
            headers:{
                authorization:`Bearer ${token}` 
            }
        })
}
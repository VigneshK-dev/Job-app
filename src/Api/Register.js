import axios from "axios";


const BASE_URL = process.env.REACT_APP_SERVER_URL


export const RegisterApi  = async (data)=>{
    return  await axios.post( `${BASE_URL}/auth/register`,data)
 }
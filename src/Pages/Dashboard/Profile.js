import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import FormRow from '../../Component/FormRow'
import { toast } from 'react-toastify'
import { Updateuserapi } from '../../Api/Updateuser'
import { useDispatch } from 'react-redux'
import { Userdata } from '../../Reducer/Reducer'
import { Spinner } from 'reactstrap';



function Profile() {

  const data = useSelector(state => state.State.User)
  const token = useSelector(state => state.State.token)
 
  const [loading,setloading] = useState(false)

  const dispatch = useDispatch()


  const [userdata,setuserdata] = useState({
         name:data?.name || "",
         email:data?.email || "",
         location:data?.location || "",
         lastName:data?.lastName || ""
        })

 
        const handlechange = (e)=>{   
           setuserdata({...userdata,[e.target.id]:e.target.value})
        }

        const handlesubmit = (e)=>{
              e.preventDefault()
          if(!userdata.name || !userdata.email ||!userdata.location ||!userdata.lastName){
             return toast("Please Fillout All Fields", { type: "error" })
          }else{
               console.log(userdata)
                Updatedata(userdata,token)
          }
        }

  
      const Updatedata = async (user,token)=>{
            setloading(true)
            Updateuserapi(user,token).then(response => {
              if(response.status === 200){
                  dispatch(Userdata(user))
                  localStorage.removeItem("user")
                  localStorage.setItem("user",JSON.stringify(response.data.user))
                  setloading(false)
                  toast.success("User Updated!")
              }
            })
            .catch(error => { 
              console.log(error)
              setloading(false)
              toast.error(error.response.data.msg)
            })
        }
         

  
  


  return (


    <Wrapper>
      <form  className='form' onSubmit={handlesubmit}>
        <h3 className='mb-4'>Profile</h3>
        <div className='form-center'>
          <FormRow type={"text"} value={userdata.name} label={"Name"} id={"name"} onchange={handlechange} />
          <FormRow type={"text"} value={userdata.lastName} label={"Last Name"} id={"lastName"} onchange={handlechange} />
          <FormRow type={"email"} value={userdata.email} label={"Email"} id={"email"} onchange={handlechange} />
          <FormRow type={"text"} value={userdata.location} label={"Location"} id={"location"} onchange={handlechange} />
          <button type='submit' className='btn btn-primary'>
            {loading ? (<Spinner className='mb-1' style={{ width: '1.5rem', height: '1.5rem' }}/>)
                      :(<h6> Save Changes</h6> )}
            </button>
        </div>
      </form>
    </Wrapper>

  )
}

export default Profile
import React  from 'react'
import { useSelector } from 'react-redux'
import EditJob from '../../Component/EditJob'
import AddJob from '../../Component/AddJob'


function Addjobs() {



  const isEdit = useSelector(state => state.State.Editjob)



   const  HandleAllJobs = () => {
           if(isEdit){
             return (
              <EditJob/>
             )
           }else{
             return(
              <AddJob/>   
             )
           }
    }

  
     
  return (
    <div>
      {HandleAllJobs()}
    </div>
  )
}

export default Addjobs
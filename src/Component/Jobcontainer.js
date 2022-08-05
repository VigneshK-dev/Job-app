import React from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import Jobcard from './Jobcard'



function Jobcontainer() {

    const jobdata = useSelector(state => state.State.Jobs)


  return (
    <div>
        
  <Wrapper>  
     <h5 className='my-4'>{jobdata.length} Jobs Found</h5> 
      <div className='jobs'> 
    
      {jobdata.length === 0 ?  (<h1 className='text-center'>No jobs to display...</h1>):  
         (jobdata.map(ele => (
              <Jobcard key={ele._id} id={ele._id} company ={ele.company} position ={ele.position}  date ={ele.createdAt} location ={ele.jobLocation}  jobtype ={ele.jobType} status = {ele.status}       />
         )))
       }
      </div>
    
  </Wrapper>
      

      
    </div>
  )
}

export default Jobcontainer
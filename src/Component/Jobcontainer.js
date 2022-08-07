import React from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import Jobcard from './Jobcard'
import Pagination from './Pagination'



function Jobcontainer() {

  const jobdata = useSelector(state => state.State.Jobs.Alljob)
  const numofpg = useSelector(state => state.State.Jobs.numofpg)
  const totalJobs = useSelector(state => state.State.Jobs.totaljobs)

  return (
    <div>

      <Wrapper>
      <h5 className='my-4'>{totalJobs > 1 ? `${totalJobs} Jobs Found` : `${totalJobs} Job Found`}</h5>
        <div className='jobs'>

          {jobdata.length === 0 ? (<h1 className='text-center'>No jobs to display...</h1>) :
            (jobdata.map(ele => (
              <Jobcard key={ele._id} id={ele._id} company={ele.company} position={ele.position} date={ele.createdAt} location={ele.jobLocation} jobtype={ele.jobType} status={ele.status} />
            )))
          }
        </div>

      </Wrapper>

      {numofpg > 1 ? (
      <div className='button-container mt-2 mb-3'>
        <Pagination />
      </div>
      ) : ("")}


    </div>
  )
}

export default Jobcontainer
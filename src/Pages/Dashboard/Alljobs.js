import React from 'react'
import { Spinner } from 'reactstrap'
import Searchjobcontainer from '../../Component/Searchjobcontainer'
import {  useSelector } from 'react-redux'
import Jobcontainer from '../../Component/Jobcontainer'




function Alljobs() {

  let loading = useSelector(state => state.State.Loading)


  return (

    <div>

      <Searchjobcontainer/>

      {loading ? (<div className="d-flex text-dark justify-content-center ">
        <Spinner style={{ width: '5rem', height: '5rem' ,color:"rgb(120,167,242)" }} />
      </div>) : (<div>
          <Jobcontainer/>
                 </div>)}
    </div>
  )
}

export default Alljobs
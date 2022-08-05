import React from 'react'
import Wrapper from '../assets/wrappers/SearchContainer.js'
import FormRow from './FormRow.js'

function Searchjobcontainer() {
  return (

    <Wrapper>
      <form className='form'>
        <h3 className='mb-4'> Search Form</h3>
        <div className='form-center'>

          <FormRow label={"Search"} id={"search"} />
          <div>
            <label className='form-label' htmlFor='status'  >Status</label>
            <select id='status' className='form-input'>
            <option value={"all"}>all</option>
              <option value={"interview"}>interview</option>
              <option value={"declined"}>declined</option>
              <option value={"pending"}>pending</option>
            </select>
          </div>

          <div>
            <label className='form-label' htmlFor='jobType'>Type</label>
            <select id='jobType' className='form-input'>
            <option value={"all"}>all</option>
              <option value={"full-time"}>full-time</option>
              <option value={"part-time"}>part-time</option>
              <option value={"remote"}>remote</option>
              <option value={"internship"}>internship</option>
            </select>
          </div>

          <div>
            <label className='form-label' htmlFor='jobType'>Sort</label>
            <select id='jobType' className='form-input'>
              <option value={"latest"}>latest</option>
              <option value={"oldest"}>oldest</option>
              <option value={"ascend"}>a-z</option>
              <option value={"desend"}>z-a</option>
            </select>
          </div>
          <button  style={{border:"none",background:"rgb(247,215,219)"}} className='btn red btn-block'>Clear Filters</button>

        </div>
      </form>
    </Wrapper>


  )
}

export default Searchjobcontainer
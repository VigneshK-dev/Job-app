import React, { useEffect }  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Wrapper from '../assets/wrappers/SearchContainer.js'
import { Clearfilter, HandleChange } from '../Reducer/Reducer.js'
import FormRow from './FormRow.js'
import { FilterApi } from '../Api/Filterjob.js'
import { Alljob } from '../Reducer/Reducer.js'
import { Loadingdata } from '../Reducer/Reducer.js'

function Searchjobcontainer() {
  
  const token = useSelector(state => state.State.token)

  const deletejob = useSelector(state => state.State.Delete)

  const  Filterdata = useSelector(state => state.State.Filter)

  const {status,jobType,page,search,sort} = Filterdata

  const dispatch = useDispatch()

 
  useEffect(()=>{
       handlefilterapi(Filterdata,token)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[status,jobType,page,search,sort,deletejob])
  
    
  const handleFilter =(e)=>{
        dispatch(HandleChange({name:e.target.id,value:e.target.value}))
  }
 

     const handlefilterapi = async (filterdata,token) =>{
         dispatch(Loadingdata(true))
          FilterApi(filterdata,token).then(response =>{
           if(response.status === 200){
                //  console.log(response.data)
                 dispatch(Loadingdata(false))
                 dispatch(Alljob(response.data))
           }
        })
      .catch(error => {
        dispatch(Loadingdata(false))
        console.log(error)
      })
      } 

      const clearfilter =(e)=>{
        e.preventDefault()
         const clear = {
             status :"all",
             sort:"latest",
             search:"",
             page:1,
             jobType:"all"
         }
          dispatch(Clearfilter(clear))
      }


  return (

    <Wrapper>
      <form className='form' >
        <h3 className='mb-4'> Search Form</h3>
        <div className='form-center'>

          <FormRow value={search} label={"Search"} id={"search"} onchange={handleFilter} />
          <div>
            <label className='form-label' htmlFor='status'  >Status</label>
            <select id='status' value={status} onChange={handleFilter}  className='form-input'>
            <option  value={"all"}>all</option>
              <option value={"interview"}>interview</option>
              <option value={"declined"}>declined</option>
              <option value={"pending"}>pending</option>
            </select>
          </div>

          <div>
            <label className='form-label' htmlFor='jobType'>Type</label>
            <select value={jobType} id='jobType'  onChange={handleFilter}  className='form-input'>
            <option value={"all"}>all</option>
              <option value={"full-time"}>full-time</option>
              <option value={"part-time"}>part-time</option>
              <option value={"remote"}>remote</option>
              <option value={"internship"}>internship</option>
            </select>
          </div>

          <div>
            <label className='form-label' htmlFor='sort'>Sort</label>
            <select id='sort' value={sort} onChange={handleFilter}  className='form-input'>
              <option value={"latest"}>latest</option>
              <option value={"oldest"}>oldest</option>
              <option value={"a-z"}>a-z</option>
              <option value={"z-a"}>z-a</option>
            </select>
          </div>
          <button  onClick={clearfilter} style={{border:"none",background:"rgb(247,215,219)"}} className='btn red btn-block'>Clear Filters</button>

        </div>
      </form>
    </Wrapper>


  )
}

export default Searchjobcontainer
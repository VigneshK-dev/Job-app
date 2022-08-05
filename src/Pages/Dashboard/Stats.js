import React, { useEffect } from 'react'
import { GetJobstats } from '../../Api/Stats'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Getstats } from '../../Reducer/Reducer'
import StatContainer from '../../Component/StatContainer'
import ChartContainer from '../../Component/ChartContainer'

function Stats() {
 
  const token = useSelector(state => state.State.token)

  const dispatch = useDispatch()

  const GetAllStats = async (token)=>{
      GetJobstats(token).then(response =>{
           if(response.status === 200){
                //  console.log(response.data)
                 dispatch(Getstats(response.data))
           }
      }).catch(err =>{
        console.log(err)
        toast.error(err.response.data.msg)
      })
  }

  useEffect(()=>{
        GetAllStats(token)
            // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
   <div>
   <StatContainer/>
   <ChartContainer/>
   </div> 
  )
}

export default Stats
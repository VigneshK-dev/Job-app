import React, { useEffect} from 'react'
import { Alljobapi } from '../../Api/Alljobs'
import { Spinner } from 'reactstrap'
import Searchjobcontainer from '../../Component/Searchjobcontainer'
import { useDispatch, useSelector } from 'react-redux'
import { Alljob } from '../../Reducer/Reducer'
import Jobcontainer from '../../Component/Jobcontainer'
import { Loadingdata } from '../../Reducer/Reducer'







function Alljobs() {

  let loading = useSelector(state => state.State.Loading)
  const token = useSelector(state => state.State.token)
  const dispatch = useDispatch()

const Getalljobs = async () => {
    dispatch(Loadingdata(true))
    Alljobapi(token).then(response => {
      if (response.status === 200) {
        dispatch(Loadingdata(false))
        dispatch(Alljob(response.data.jobs))
      }
    }).catch(err => {
      dispatch(Loadingdata(false))
      console.log(err)
    })
  }

  useEffect(() => {
    Getalljobs()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
import React from 'react'
import Wrapper from '../assets/wrappers/Job'
import Jobinfo from './Jobinfo'
import { FaLocationArrow,FaCalendarAlt,FaBriefcase } from 'react-icons/fa';
import moment from 'moment';
import { Deletejobapi } from '../Api/Deletejob';
import { toast } from 'react-toastify';
import { SingleEditJob,Edit,Deletejob} from '../Reducer/Reducer';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Jobcard({company,position,status,date,location,jobtype,id}) {

 
 const newdate = moment(date).format("MMM Do, YY"); 
 const token = useSelector(state => state.State.token)
 
 const dispatch = useDispatch()
 const Navigate = useNavigate()


 const DeleteJob = async (id,token)=>{
      Deletejobapi(id,token).then(response =>{
         if(response.status === 200){
        //   console.log(response)
        toast.success(response.data.msg) 
         dispatch(Deletejob())
         }
      }).catch(err => {
           console.log(err)
           toast.error(err.response.data.msg)
      })
 }


 const EditJob =(id)=>{
       dispatch(SingleEditJob(id))
       dispatch(Edit(true))
       Navigate("/Addjobs")
    }

    return (

        <div>

            <Wrapper>

                <header>
                    <div className='main-icon '>
                        {company.charAt(0)}
                    </div>
                    <div className='info'>
                        <h5>{company}</h5>
                        <p>{position}</p>
                    </div>
                </header>

                <div className='content'>

                    <div className='content-center'>
                        <Jobinfo icon={<FaLocationArrow/>} text={location}/>
                        <Jobinfo icon={<FaCalendarAlt/>} text={newdate}/>
                        <Jobinfo icon={<FaBriefcase/>} text={jobtype}/>
                        <div className={`status ${status}`}>
                            {status}
                        </div>
                        <footer>
                            <div className='actions'>
                                <button className='btn edit-btn' onClick={()=>EditJob(id)}>
                                    <h6>Edit</h6>
                                </button>
                                <button onClick={()=>DeleteJob(id,token)} className='btn delete-btn'>
                                    <h6>delete</h6>
                                </button>

                            </div>

                        </footer>
                    </div>

                </div>
            </Wrapper>
        </div>

    )
}

export default Jobcard
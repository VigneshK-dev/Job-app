import React from 'react'
import Wrapper from '../assets/wrappers/StatsContainer'
import StatsCard from './StatsCard'
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function StatContainer() {

  const statsdata = useSelector(state => state.State.Statsdata.carddata)

  const StatsCarddata = [{
    count: statsdata.pending,
    cardcolor: "#e9b949",
    bgcolor: "#fcefc7",
    title: "Pending Applications",
    icon: <FaSuitcaseRolling />,
  },
  {
    count: statsdata.interview ,
    cardcolor: "#647acb",
    bgcolor: "#e0e8f9",
    title: "Interviews Scheduled",
    icon: <FaCalendarCheck />

  },
  {
    count: statsdata.declined ,
    cardcolor: "#d66a6a",
    bgcolor: "#ffeeee",
    title: "Jobs Declined",
    icon: <FaBug />
  }
  ]

  return (
    <div>
      <Wrapper> 

           {StatsCarddata.map((ele,index) =>(
                <StatsCard key={index} count = {ele.count} bg = {ele.bgcolor} color ={ele.cardcolor} icon ={ele.icon} title ={ele.title}/>
           ))} 
        
      </Wrapper>
    </div>
  )
}

export default StatContainer
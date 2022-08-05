import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im'
import {  FaWpforms } from 'react-icons/fa';
import logo from "../assets/images/logo.svg"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const sidebardata = [
  {
    title:"Stats",
    icon:<IoBarChartSharp className='icon'/>,
    link:"/"
    },
    {
    title:"All Jobs",
    icon:<MdQueryStats className='icon' />,
    link:"/Alljobs"
    },
    {
      title:"Add jobs",
      icon:<FaWpforms className='icon'/>,
      link:"/Addjobs"
    },
    {
      title:"Profile",
      icon:<ImProfile className='icon'/>,
      link:"/Profile"
    }
  ]


function Bigsidebar() {

 
  const isSidebar = useSelector(state => state.State.Sidebar)
 


  return (
    <Wrapper>

     
     <div className=    {isSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar' }>
       
    
    <div className='content'>


          <header>
          <img src={logo} alt="logo" ></img>
          </header>
    
           <div className='nav-links'>
         
               {sidebardata.map((ele,index) =>(
                <Link key={index} to={ele.link} className='nav-link'>
                    {ele.icon}
                  <span>{ele.title}</span>
                </Link>
               ))} 
              
           </div>
      </div>     

     </div>

    </Wrapper>

  )
}

export default Bigsidebar
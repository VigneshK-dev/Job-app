import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes} from 'react-icons/fa';
import logo from "/Users/vignesh/Desktop/projects/job-app/src/assets/images/logo.svg"
import { useDispatch, useSelector } from 'react-redux';
import { Togglesidebar } from '../Reducer/Reducer';
import { Link } from 'react-router-dom';
import { sidebardata } from './Bigsidebar';


function Smallsidebar() {


  const isSidebaropen = useSelector(state => state.State.Sidebar)

  const Dispatch = useDispatch()

  return (

    <Wrapper>

      <div className={isSidebaropen ?  "sidebar-container show-sidebar":"sidebar-container " }>

        <div className='content'>

          <button className='close-btn' onClick={() => Dispatch(Togglesidebar())}>
            <FaTimes />
          </button>


          <header >
            <img src={logo} alt="logo"></img>
          </header>

          <div className='nav-links' >
            <ul>
             {sidebardata.map((ele,index) => (
                 <Link key={index} to={ele.link} onClick={()=>Dispatch(Togglesidebar())} style={{textDecoration:"none"}} >
                 <li  className='nav-link'> {ele.icon} <span>{ele.title}</span></li>
                 </Link>
             ))}

            </ul>

          </div>



        </div>

      </div>

    </Wrapper>

  )
}

export default Smallsidebar
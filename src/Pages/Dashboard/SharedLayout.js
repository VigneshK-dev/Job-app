import React from 'react'
import Smallsidebar from '../../Component/Smallsidebar'
import Bigsidebar from '../../Component/Bigsidebar'
import Navbar from '../../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'


function SharedLayout() {



  return (

 <Wrapper>
      <main className='dashboard '>
        <Bigsidebar />
        <Smallsidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>

    </Wrapper>

  )
}

export default SharedLayout
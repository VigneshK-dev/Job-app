import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Error from './Pages/Error';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './Pages/Dashboard/SharedLayout';
import Stats from './Pages/Dashboard/Stats';
import Alljobs from './Pages/Dashboard/Alljobs';
import Addjobs from './Pages/Dashboard/Addjobs';
import Profile from './Pages/Dashboard/Profile';
import Protectedroutes from './Component/Protectedroutes';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div >

      <Routes>

        <Route path='/' element={
          <Protectedroutes >
               <SharedLayout />
          </Protectedroutes>} >
          <Route index element={<Stats />} />
          <Route path='/Alljobs' element={<Alljobs />} />
          <Route path='/Addjobs' element={<Addjobs />} />
          <Route path='/Profile' element={<Profile />} />
        </Route>


        <Route path='/Landing' element={<Landing />} />
        <Route path='/Register' element={<Register />} />
        <Route path='*' element={<Error />} />

      </Routes>
      <ToastContainer autoClose={3000} position='top-center' />


    </div>
  );
}

export default App;

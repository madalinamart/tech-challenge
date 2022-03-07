import React from 'react'
import Card from '../components/User/admin/Card'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import UserManagement from '../components/UserManagement'
import BuildingManagement from '../components/BuildingManagement'

const Home = () => {
  return (
    <>
    <BrowserRouter>  
    <div className='home-wrapper'>
    <Card />
    <Routes>    
      <Route path='UserManagement' element={<UserManagement />} />
      <Route path='BuildingManagement' element={<BuildingManagement />} />
    </Routes>
    </div>
    </BrowserRouter>     
    </>
  )
}

export default Home
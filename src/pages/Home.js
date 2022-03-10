import React from 'react'
import Card from '../components/User/admin/Card'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import UserManagement from '../components/UserManagement'
import BuildingManagement from '../components/BuildingManagement'
import AddUser from '../components/userFunctions/AddUser'
import EditUser from '../components/userFunctions/EditUser'





const Home = () => {
  return (
    <>
    <BrowserRouter>  
    <div className='home-wrapper'>
    <Card />
    <Routes>         
      <Route path='BuildingManagement' element={<BuildingManagement />} />
      <Route exact path='/UserManagement' element={<UserManagement />} />
      <Route exact path='/add' element={<AddUser />} />
      <Route exact path='/edit/:id' element={<EditUser />} />
    </Routes>
    </div>
    </BrowserRouter>     
    </>
  )
}

export default Home
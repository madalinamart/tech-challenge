import React from 'react'
import Card from '../components/User/admin/Card'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import UserManagement from '../components/UserManagement'
import BuildingManagement from '../components/Building/BuildingManagement'
import AddUser from '../components/userFunctions/AddUser'
import EditUser from '../components/userFunctions/EditUser'
import AddBuilding from '../components/Building/BuildingFunctions/AddBuilding'
import EditBuilding from '../components/Building/BuildingFunctions/EditBuilding'





const Home = () => {
  return (
    <>
    <BrowserRouter>  
    <div className='home-wrapper'>
    <Card />
    <Routes>      
      <Route exact path='/UserManagement' element={<UserManagement />} />
      <Route exact path='/add' element={<AddUser />} />
      <Route exact path='/edit/:id' element={<EditUser />} />
      <Route exact path='/BuildingManagement' element={<BuildingManagement />} />
      <Route exact path='/add-building' element={<AddBuilding />} />
      <Route exact path='edit-building/:id' element={<EditBuilding />} />
    </Routes>
    </div>
    </BrowserRouter>     
    </>
  )
}

export default Home
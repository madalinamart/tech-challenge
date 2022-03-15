import React from 'react'
import Card from '../components/User/admin/Card'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import UserManagement from '../components/UserManagement'
import BuildingManagement from '../components/Building/BuildingManagement'
import AddUser from '../components/userFunctions/AddUser'
import EditUser from '../components/userFunctions/EditUser'
import AddBuilding from '../components/Building/BuildingFunctions/AddBuilding'
import EditBuilding from '../components/Building/BuildingFunctions/EditBuilding'
import OfficeManagement from '../Office/OfficeManagement'
import AddOffice from '../Office/AddOffice'
import EditOffice from '../Office/EditOffice'
import OfficeStatus from '../Office/OfficeStatus'
import Office from '../Office/Office'
import DeskAssignment from '../Desk/DeskAssignment'
import User from '../Users/User'
import Remotes from '../Remote/Remotes'
import ApproveRemote from '../Remote/ApproveRemote'
import RequestRemote from '../Remote/RequestRemote'







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
      <Route exact path='OfficeManagement' element={<OfficeManagement />} />
      <Route exact path='/add-office' element={<AddOffice />} />
      <Route exact path='/edit-office/:id' element={<EditOffice />} />
      <Route exact path='/OfficeStatus' element={<OfficeStatus />} />
      <Route exact path='/Office/:id' element={<Office />} />
      <Route exact path='/DeskAssignment' element={<DeskAssignment />} />
      <Route exact path='/Users' element={<User />} />
      <Route exact path='/Remotes' element={<Remotes />} />
      <Route exact path='/ApproveRemote/:id' element={<ApproveRemote />} />
      <Route exact path='RequestRemote' element={<RequestRemote />} />
    </Routes>
    </div>
    </BrowserRouter>     
    </>
  )
}

export default Home
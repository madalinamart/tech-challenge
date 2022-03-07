import React from 'react'
import { UserEdit, Buliding, Status, NotificationStatus, UserTag, House, MessageQuestion, People, Login} from 'iconsax-react';
import { Link } from 'react-router-dom';

const AdminFunctions = () => {

  return (
     
    <div className='user-functions'>
     <Link to='/UserManagement' className='function'>
        <UserEdit />
        <p>USERS MANAGEMENT</p>
    </Link>
    <Link to='/BuildingManagement' className='function'>
        <Buliding />
        <p>BUILDING MANAGEMENT</p>
    </Link>
    <div className='function'>
        <Status />
        <p>OFFICE MANAGEMENT</p>
    </div>
    <div className='function'>
        <NotificationStatus />
        <p>OFFICE STATUS</p>
    </div>
    <div className='function'>
        <UserTag />
        <p>DESK ASSIGNMENT</p>
    </div>
    <div className='function'>
        <House />
        <p>REQUEST TO WORK REMOTE</p>
    </div>
    <div className='function'>
        <MessageQuestion />
        <p>REMOTE WORK APPROVAL</p>
    </div>
    <div className='function'>
        <People />
        <p>USER STATUS</p>
    </div>
    <div className='function'>
        <Login />
        <p>LOG OUT</p>
    </div> 
  
</div>

  )
}

export default AdminFunctions
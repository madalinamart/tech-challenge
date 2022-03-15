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
    <Link to='/OfficeManagement' className='function'>
        <Status />
        <p>OFFICE MANAGEMENT</p>
    </Link>
    <Link to='/OfficeStatus' className='function'>
        <NotificationStatus />
        <p>OFFICE STATUS</p>
    </Link>
    <Link to='/DeskAssignment' className='function'>
        <UserTag />
        <p>DESK ASSIGNMENT</p>
    </Link>
    <Link to='/RequestRemote' className='function'>
        <House />
        <p>REQUEST TO WORK REMOTE</p>
    </Link>
    <Link to='/Remotes' className='function'>
        <MessageQuestion />
        <p>REMOTE WORK APPROVAL</p>
    </Link>
    <Link to='/Users' className='function'>
        <People />
        <p>USER STATUS</p>
    </Link>
    <div className='function'>
        <Login />
        <p>LOG OUT</p>
    </div>  
</div>

  )
}

export default AdminFunctions
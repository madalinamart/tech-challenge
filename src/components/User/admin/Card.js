import React from 'react'
import logov2 from '../../../images/logov2.svg'
import user from '../../../images/user.png'
import AdminFunctions from './AdminFunctions'


const Card = () => {
  return (
    <div className='card-wrapper'>
        <div className='logo'>
            <img src={logov2} alt='logov2' />
        </div>
        <div className='user'>
            <div className='user-info'>
                <img src={user} alt='user profile img' />
                <h3>Alin Ionescu</h3>
                <p>Administrator</p>
            </div> 
            <AdminFunctions />         
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import { Edit2, SearchNormal, Slash, TickCircle } from 'iconsax-react'

const users = [
  { id: "001",
    name: "Alin Ionescu",
    email: 'alin.ionescu@idesk.com', 
    role: 'Administrator',
    gender: 'Male',
    date: '02.10.1999',
    nationality: 'RO'
  },
  { id: "002",
    name: "Madalina Ionescu",
    email: 'madalina.ionescu@idesk.com', 
    role: 'Office Administrator',
    gender: 'Feale',
    date: '26.03.1997',
    nationality: 'RO'
  }
]


const UsersEdit = () => {
  return (
    <div className='user-management'>
      <p>Users</p>
      <h1> Users Management</h1>
      <h3>Search user</h3>
      <div className='search-bar'>
        <div className='search'>
        <input type='search' placeholder='Search user' />
        <SearchNormal className='search-icon'/>
        </div>
        <button>+ADD USER</button>
      </div>
      <p>Users: <span>110</span></p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.gender}</td>
              <td>{user.date}</td>
              <td>{user.nationality}</td>
              <td><Edit2 /> <Slash /> <TickCircle /></td>
            </tr>
          ))}          
        </tbody>
      </table>
    </div>
  )
}

export default UsersEdit
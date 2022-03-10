import { SearchNormal, Edit2, TickCircle, Slash } from 'iconsax-react';
import React, { useEffect, useState} from 'react'
import { getUsers, deleteUser } from '../api/api';
import {Link} from 'react-router-dom'
import { Pagination } from "react-custom-pagination";




const UserManagement = () => {
  const [employees,setEmployees ] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
      getAllUsers()     
  },[])

  const getAllUsers = async () => {
      const response = await getUsers();
      setEmployees(response.data);
  }

  const deleteUserData = async (id) => {
      await deleteUser(id);
      getAllUsers();
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = employees.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };


  return (
    <div className='user-management'>
      <p>Users</p>
      <h1> Users Management</h1>  
      <h3>Search user</h3>  
      <div className='search-bar'>
        <div className='search'>
          <input type='search' placeholder='Search user' onChange ={e => {setSearch(e.target.value)}}/> 
          <SearchNormal className='search-icon'/>        
        </div>      
         <Link to='/add'>
         <button>+ADD USER</button>    
         </Link>     
      </div>
      <p>
        Users: <span>{employees.length}</span>
      </p>
      <div className='users-table'>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Full name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Birth Date</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
           {               
               currentPosts.filter((val) => {
                 if (search == '') {
                   return val
                 } else if(val.name.toLowerCase().includes(search.toLowerCase())){
                   return val
                 }
               }).map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.role}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.date}</td>
                        <td>{employee.nationality}</td>
                        <td className='icons'>
                            <Link className='table-icons' to={`/edit/${employee.id}`}>
                            <Edit2 />
                            </Link>
                            <Slash className='table-icons' onClick={() => deleteUserData(employee.id)}/>
                            <TickCircle className='table-icons'/>
                        </td>                        
                    </tr>
               ))               
           }
        </tbody>
    </table>

<div className='pagination'>
    <Pagination
          totalPosts={employees.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          showFirst= {true}
          showLast= {true}
          showFirstText='<<'
          showLastText='>>'
          color='#8895A7'
          bgColor='#fff'
          selectColor='#fff'
        /> 
        </div>
    </div>     
    </div>
   
  );
};

export default UserManagement;

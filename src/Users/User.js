import React, { useState, useEffect } from 'react';
import { Edit2, Slash, SearchNormal } from 'iconsax-react';
import employeeProfile from '../images/employeeProfile.png';
import { getUsers, deleteUser } from '../api/api';
import { Pagination } from 'react-custom-pagination';
import { Link } from 'react-router-dom';
import Details from './Details';


const User = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [isActive, setIsActive] = useState({
    state: true,
    clickedItem : 0
  });

const displayData = (clicked) => {
    
    setIsActive({
      state: !isActive.state,
      clickedItem : clicked
    })
  }

 
  

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(9);


  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setEmployees(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = employees.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className='users'>
      <p>Users</p>
      <h1>Users Management</h1>
      <h3>Search user</h3>
      <div className='search-bar'>
        <div className='search'>
          <input type='search' placeholder='Search user' onChange ={e => {setSearch(e.target.value)}}/>
          <SearchNormal className='search-icon' />
        </div>
      </div>
      <p>
        Total Users: <span> {employees.length}</span>
      </p>

      <div className='users-wrapper'>
        {currentUsers
          .filter((val) => {
            if (search == '') {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((employee,index) => (
            <div className='user' key={employee.id}>
              <div
                className='general-info'
                onClick={() => displayData(index)}
              >
                <img src={employeeProfile} alt='employee profile' />
                <h3>{employee.name}</h3>
                <div className='icons'>
                  <Link className='icon' to={`/edit/${employee.id}`}>
                    <Edit2 />
                  </Link>
                  <Slash onClick={() => deleteUserData(index)} />
                </div>
              </div>
              <Details employee={employee} isActive={isActive} index={index}/>
            </div>
          ))}
      </div>
      <div className='pagination'>
        <Pagination
          totalPosts={employees.length}
          postsPerPage={usersPerPage}
          paginate={paginate}
          showFirst={true}
          showLast={true}
          showFirstText='<<'
          showLastText='>>'
          color='#8895A7'
          bgColor='#fff'
          selectColor='#fff'
        />
      </div>
    </div>
  );
};

export default User;

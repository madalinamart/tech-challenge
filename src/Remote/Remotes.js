import React, { useState, useEffect } from 'react';
import { SearchNormal } from 'iconsax-react';
import profilePhoto from '../images/profilePhoto.png';
import { getUsers } from '../api/api';
import { Pagination } from 'react-custom-pagination';
import { Link } from 'react-router-dom';

const Remotes = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setEmployees(response.data);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = employees.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className='remote-wrapper'>
      <p>Work remote</p>
      <h1> Remote work approval</h1>
      <h3>Search user</h3>
      <div className='search-bar'>
        <div className='search'>
          <input
            type='search'
            placeholder='Search user'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <SearchNormal className='search-icon' />
        </div>
      </div>
      <p>
        Requests: <span>2</span>
      </p>
      <div className='requests-wrapper'>
        {currentPosts
          .filter((val) => {
            if (search == '') {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((employee) => {
            return !employee.message === '' ? (
              <div className='request'>
                <div className='title'>
                  <img src={profilePhoto} alt='user profile' />
                  <h4>{employee.name}</h4>
                </div>
                <p>{employee.message}</p>
                <Link to={`/ApproveRemote/${employee.id}`}>
                <p>ANSWER</p>
                </Link>
              </div>
            ) : null;
          })}
      </div>

      <div className='pagination'>
        <Pagination
          totalPosts={employees.length}
          postsPerPage={postsPerPage}
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

export default Remotes;

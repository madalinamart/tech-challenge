import React, { useState, useEffect } from 'react';
import { SearchNormal } from 'iconsax-react';
import { getOffices } from '../api/api';
import officeStatus from '../images/officeStatus.png';
import { Pagination } from 'react-custom-pagination';
import {Link} from 'react-router-dom'

const OfficeStatus = () => {
  const [offices, setOffices] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(() => {
    getAllOffices();
  }, []);

  const getAllOffices = async () => {
    const response = await getOffices();
    setOffices(response.data);
  };

  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const currentCards = offices.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className='building-wrapper'>
      <p>Offices</p>
      <h1> Office Management</h1>
      <h3>Search Office</h3>
      <div className='search-bar'>
        <div className='search'>
          <input
            type='search'
            placeholder='Search Office'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <SearchNormal className='search-icon' />
        </div>
      </div>
      <div className='office-cards'>
        {currentCards
          .filter((val) => {
            if (search == '') {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((office) => (
            <Link to={`/Office/${office.id}`} className='office-card'>
              <img src={officeStatus} alt='office' />
              <div className='office-info'>
                <div className='info'>
                  <span>{office.building}</span>
                  <span>{office.floor} floors</span>
                </div>
                <h3>{office.name}</h3>
                <p>
                  Administrator: <span>{office.administrator}</span>
                </p>
              </div>
            </Link>
          ))}
        <div className='pagination'>
          <Pagination
            totalPosts={offices.length}
            postsPerPage={cardsPerPage}
            paginate={paginate}
            showFirst={true}
            showLast={true}
            showFirstText='<<'
            showLastText='>>'
            color='#8895A7'
            bgColor='#fff'
            selectColor='#fff'
            justify='center'
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeStatus;

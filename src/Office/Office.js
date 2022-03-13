import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOffices } from '../api/api';
import { Link } from 'react-router-dom';
import profilePhoto from '../images/profilePhoto.png';

const Office = () => {
  const [office, setOffice] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadOfficeData();
  }, []);

  const loadOfficeData = async () => {
    const response = await getOffices(id);
    setOffice(response.data);
  };
  return (
    <div className='office-wrapper'>
      <p>
        <span>Offices &gt;</span>Office {office.id}
      </p>
      <div className='office-info'>
        <h1>{office.name}</h1>
        <div className='building'>
          <span>{office.building}</span>
          <span>Floor {office.floor}</span>
        </div>
        <Link to={`/edit-office/${office.id}`}>
        <button>Edit Office</button>
        </Link>
      </div>
      <div className='general'>
        <div className='info'>
          <p>Total Desk Count</p>
          <h1>{office.totalDesks}</h1>
        </div>
        <div className='info'>
          <p>Usable Desk Count</p>
          <h1>{office.usableDesks}</h1>
        </div>
        <div className='info'>
          <p>Occupied Desk Count</p>
          <h1>{office.usedDesks}</h1>
        </div>
        <div className='info'>
          <p>Free Desk Count</p>
          <h1>{office.usableDesks - office.usedDesks}</h1>
        </div>
        <div className='info'>
          <p>Occupation Percentage</p>
          <h1>{Math.round((office.usedDesks / office.usableDesks) * 100)} %</h1>
        </div>
      </div>
      <h3>
        Office administrator: <span>Alin Ionescu</span>
      </h3>
      <h2>
        Users <span>({office.users?.length})</span>
      </h2>
      <div className='users'>
        {office.users?.map((user) => (
          <div className='user'>
            <img src={profilePhoto} alt='user profile photo1' />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Office;

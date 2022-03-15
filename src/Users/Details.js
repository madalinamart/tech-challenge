import React from 'react';
import Status from './Status'

const Details = ({employee, isActive, index}) => {

  return (
    <>
    {
    (!isActive.state && isActive.clickedItem === index) ? (        
        <div className='active'>
          <div className='location-info'>
            <span>Building {employee.building}</span>
            <span>Floor {employee.floor}</span>
            <span>Office {employee.office}</span>
          </div>
          <div className='details'>
            <Status status={employee.status} />
            <p>
              Gender: <span>{employee.gender}</span>
            </p>
            <p>
              Birthday: <span>{employee.date}</span>
            </p>
            <p>
              Nationality: <span>{employee.nationality}</span>
            </p>
            <p>
              Email: <span>{employee.email}</span>
            </p>
            <p>
              Role: <span>{employee.role}</span>
            </p>
          </div>
        </div>
      
      ) : null
    }
    </>
  )
};

export default Details;

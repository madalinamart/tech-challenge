import React, { useState, useEffect } from 'react';
import { SearchNormal } from 'iconsax-react';
import { getBuildings, getUsers , editUser} from '../../api/api';

const initialValues = {
    building: '',
    floor: '',
    desk: '',
    office:''
}


const Assignment = () => {
    const [buildings, setBuildings] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState('');
    const [employee, setEmployee] = useState(initialValues)
  
    const {building, floor, desk, office} = employee
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    useEffect(() => {
      getAllBuildings();
      getAllUsers();
    }, []);
  
    const getAllUsers = async () => {
      const response = await getUsers();
      setEmployees(response.data);
    };
  
    const getAllBuildings = async () => {
      const response = await getBuildings();
      setBuildings(response.data);
    };
  
    const handleChange = e => {
      const {name, value} = e.target
      setEmployee({
          ...employee,
          [name]: value
      })
  }
   const assignDesk = async () => {   
      const newEmployee = {name: employee.name, email : employee.email, role: employee.role, gender: employee.gender, date: employee.date, nationality: employee.nationality, password: employee.password, building: building, floor: floor, desk: desk, office:office}    
      await editUser(newEmployee); 
   }
  return (
    <div className='desk-wrapper'>
    <p>Assign/De-Assign Desk</p>
    <h1>Assign Desk</h1>
    <form onSubmit={handleSubmit}>
      <div className='desk-assignment'>
        <div className='desk'>
          <h3>Choose desk to assign</h3>
          <div className='building-info'>
            <div className='input'>
              <label htmlFor='building'>Building</label>
              <select
                name='building'
                id='building'
                onChange={handleChange}
              >
                {buildings.map((building) => (
                  <option value={building.name}>{building.name}</option>
                ))}
              </select>
            </div>
            <div className='input'>
              <label htmlFor='floor'>Floor</label>
              <select
                name='floor'
                id='floor'
                onChange={handleChange}
                >
                <option value='1'>1</option>
                <option value='2'>2</option>
              </select>
            </div>
            <div className='input'>
              <label htmlFor='office'>Office</label>
              <select
                name='office'
                id='office'
                onChange={handleChange}
              >
                <option value='2'>2</option>
              </select>
            </div>
            <div className='input'>
              <label htmlFor='desk'>Desk</label>
              <select name='desk' id='desk' onChange={handleChange}>
                <option value=''></option>
                <option value='A1'>A1</option>
                <option value='A2'>A2</option>
              </select>
            </div>
          </div>
        </div>
        <div className='user'>
          <h3>Choose User</h3>
          <div className='search-bar'>
            <div className='search'>
              <label htmlFor='search'>Search user</label>
              <input
                type='search'
                name='search'
                placeholder='Search Office'
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <SearchNormal className='search-icon' />
            </div>
            <div className='selected-user'>
              <label>Selected User</label>
              {employees
                .filter((val) => {
                  if (search == '') {
                    return '';
                  } else if (
                    val.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((employee) => (
                  <p key={employee.id}>{employee.name}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <button type='submit' onClick={assignDesk}>Assign</button>
    </form>
  </div>
  )
}

export default Assignment
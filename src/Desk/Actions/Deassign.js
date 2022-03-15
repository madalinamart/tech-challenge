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
    <form onSubmit={handleSubmit}>
      <div className='desk-assignment'>
        <div className='desk'>
          <h3>Choose desk to deassign</h3>
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
          <h3>Desk Status</h3>
          <span>Occupied</span>
          <p>Eugen Tudor</p>
        </div>
      </div>
      <button type='submit' onClick={assignDesk}>Deassign</button>
    </form>
  </div>
  )
}

export default Assignment
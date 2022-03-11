import React, {useState, useEffect} from 'react'
import {SearchNormal} from 'iconsax-react'
import { Link } from 'react-router-dom'
import officeImage from '../images/officeImage.png'
import { Edit2, Slash } from 'iconsax-react'
import {getOffices, deleteOffice} from '../api/api'


const OfficeManagement = () => {

    const [offices, setOffices] = useState([])
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      getAllOffices()     
  },[])
  
  const getAllOffices = async () => {
    const response = await getOffices();
    setOffices(response.data);
  }
  
  const deleteOfficeData = async (id) => {
    await deleteOffice(id);
    getAllOffices();
  }
  
  return (
    <div className='building-wrapper'>
      <p>Offices</p>
      <h1> Office Management</h1>  
      <h3>Search Office</h3>  
      <div className='search-bar'>
        <div className='search'>
          <input type='search' placeholder='Search Office' onChange ={e => {setSearch(e.target.value)}} /> 
          <SearchNormal className='search-icon'/>        
      </div>      
         <Link to='/add-office'>
         <button>+ADD OFFICE</button>    
         </Link>     
      </div>
      <div className='card-container'>
        {
          offices.filter((val) => {
            if (search == '') {
              return val
            } else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map(office => (
            <div className='card'>
            <img src={officeImage} alt='office' />
            <div className='building-info'>
                <div className='floors'>
                    <span className='building-name'>{office.building}</span>
                    <span>{office.floor} floors</span>
                <div className='icons'>
                    <Link  className='icon' to={`/edit-office/${office.id}`}><Edit2 /></Link>
                    <Slash onClick={() => deleteOfficeData(office.id)}/>
                </div>
                </div>
                <h3>{office.name}</h3>
                <div className='info'>
                    <p>Total Desks:</p>
                    <strong>{office.totalDesks}</strong>
                </div>
                <div className='info'>
                    <p>Usable Desks:</p>
                    <strong>{office.usableDesks}</strong>
                </div>
                <div className='info'>
                    <p>Administrator:</p>
                    <p>{office.administrator}</p>
                </div>
            </div>
        </div>
          ))
        }

      </div>
      </div>
  )
}

export default OfficeManagement
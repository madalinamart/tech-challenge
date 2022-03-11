import React, {useState, useEffect} from 'react'
import {SearchNormal} from 'iconsax-react'
import { Link } from 'react-router-dom'
import building1 from '../../images/buildings/building1.png'
import { Edit2, Slash } from 'iconsax-react'
import { deleteBuilding, getBuildings } from '../../api/api';

const BuildingManagement = () => {

  const [buildings, setBuildings] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllBuildings()     
},[])

const getAllBuildings = async () => {
  const response = await getBuildings();
  setBuildings(response.data);
}

const deleteBuildingData = async (id) => {
  await deleteBuilding(id);
  getAllBuildings();
}


  return (
    <div className='building-wrapper'>
      <p>Buildings</p>
      <h1> Buildings Management</h1>  
      <h3>Search Building</h3>  
      <div className='search-bar'>
        <div className='search'>
          <input type='search' placeholder='Search Building' onChange ={e => {setSearch(e.target.value)}} /> 
          <SearchNormal className='search-icon'/>        
      </div>      
         <Link to='/add-building'>
         <button>+ADD BUILDING</button>    
         </Link>     
      </div>
      <div className='card-container'>
        {
          buildings.filter((val) => {
            if (search == '') {
              return val
            } else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map(building => (
            <div className='card'>
            <img src={building1} alt='building' />
            <div className='building-info'>
                <div className='floors'>
                    <span>{building.floors} floors</span>
                <div className='icons'>
                    <Link  className='icon' to={`/edit-building/${building.id}`}><Edit2 /></Link>
                    <Slash onClick={() => deleteBuildingData(building.id)}/>
                </div>
                </div>
                <h3>{building.name}</h3>
                <p>{building.address}</p>
            </div>
        </div>
          ))
        }

      </div>
      </div>
  )
}

export default BuildingManagement
import React, {useState, useEffect} from 'react'
import mainBuilding from '../../../images/buildings/mainBuilding.png'
import { useNavigate, useParams} from 'react-router-dom'
import { editBuilding, getBuildings } from '../../../api/api'


const initialValues = {
 name:'',
 address:'',
}

const EditBuilding = () => {
    const [building, setBuilding] = useState(initialValues)
    const {name, address} = building
    const {id} = useParams();
    const [clicks, setClicks] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () => {
        const response = await getBuildings(id);
        setBuilding(response.data);
    }

    const handleChange = e => {
        const {name, value} = e.target
        setBuilding({
            ...building,
            [name]: value
        })
    }

    const IncrementItem = () => {
        setClicks(clicks + 1 );
      }
     const DecreaseItem = () => {
        setClicks(clicks - 1);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
    }

    const resetInputs = () => {
        setBuilding({
     name:'',
     address:''
      })
      setClicks(0)
      }

      const editBuildingDetails = async () => {
        const newBuilding = {name: name , address: address, floors: clicks}
        editBuilding(id, newBuilding)            
        navigate('/BuildingManagement')
    }

  return (
    <div><div className='add-building-wrapper'>
    <p><span>Buildings &gt;</span> Edit Building</p>
      <h1> Edit Building </h1>
      <div className='edit'>
      <h3>Edit Building: </h3>
      <h3>{building.id}</h3>
      </div>
      <p className='mandatory'>*Mandatory fields</p>

      <div className='form-container'>
      <form onSubmit={handleSubmit}>
          <div className='input'>
          <label htmlFor='name'>Building name:<span>*</span></label>
          <input type='text' name='name' id='name' placeholder='Name' value={name} onChange={handleChange} />
          </div>

          <div className='input'>
          <label htmlFor='floors'>Floors number:<span>*</span></label>
          </div>
          <div>
        <div className='quantity'>
        <button onClick={DecreaseItem}>-</button>        
        <p>{clicks}</p> 
        <button onClick={IncrementItem}>+</button>
        </div>

        <div className='input'>
          <label htmlFor='address'>Building address:<span>*</span></label>
          <textarea name='address' id='address' placeholder='Street, number, P.O..City' value={address} onChange={handleChange} />
        </div>

        <div className='buttons'>
          <button onClick={() => resetInputs()}>Reset Form</button>
          <button type='submit' onClick={() => editBuildingDetails()}>SUBMIT</button>
        </div>
      </div>
      </form>
      <img src={mainBuilding} alt='building' />
      </div>
    </div></div>
  )
}

export default EditBuilding
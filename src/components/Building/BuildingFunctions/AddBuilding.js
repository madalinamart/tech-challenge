import React, {useState} from 'react'
import mainBuilding from '../../../images/buildings/mainBuilding.png'
import { useNavigate } from 'react-router-dom'
import { addBuilding } from '../../../api/api'

const initialValues = {
    name: '',
    address:'',
}

const AddBuilding = () => {
  const [building, setBuilding] = useState(initialValues)
  const [clicks, setClicks] = useState(0); 
  const navigate = useNavigate(); 

  const {name, address} = building

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

  const addBuildingDetails = async () => {   
    const newBuilding = {name: name, address: address, floors: clicks}    
    await addBuilding(newBuilding); 
    navigate('/BuildingManagement')
}

  const handleSubmit = e => {
      e.preventDefault();
  }

  const resetInputs = () => {
    setBuilding({
    name: "",
    address:"",
  })
   setClicks(0)
  }

  return (
    <div className='add-building-wrapper'>
    <p><span>Buildings &gt;</span> Add Building</p>
      <h1> Add Building </h1>
      <p className='mandatory'>*Mandatory fields</p>

      <div className='form-container'>
      <form onSubmit={handleSubmit}>
          <div className='input'>
          <label htmlFor='name'>Building name:<span>*</span></label>
          <input type='text' name='name' id='name' placeholder='Name' value={name} onChange={handleChange}/>
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
          <textarea name='address' id='address' placeholder='Street, number, P.O..City' value={address} onChange={handleChange}/>
        </div>

        <div className='buttons'>
          <button onClick={() => resetInputs()}>Reset Form</button>
          <button type='submit'onClick={() => addBuildingDetails()}>SUBMIT</button>
        </div>
      </div>
      </form>
      <img src={mainBuilding} alt='building' />
      </div>
    </div>
  )
}

export default AddBuilding
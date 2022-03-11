import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addOffice } from '../api/api'
import bigOffice from '../images/bigOffice.png'

const initialValues = {
    name:'',
    adminname:'',
    building:'',
    floor:''
}

const AddOffice = () => {
    const [office, setOffice] = useState(initialValues)
    const [clicks, setClicks] = useState(0); 
    const [freeDesks, setfreeDesks] = useState(0);
    const navigate = useNavigate(); 

    const {name, adminname, building, floor} = office

    const IncrementfreeDesks = () => {
        setfreeDesks(freeDesks + 1)
    }

    const DecreasefreeDesks = () => {
        setfreeDesks(freeDesks - 1)
    }

    const IncrementDesks = () => {
        setClicks(clicks + 1 );
      }
     const DecreaseDesks = () => {
        setClicks(clicks - 1);
      }

      const handleChange = e => {
        const {name, value} = e.target
        setOffice({
            ...office,
            [name]: value
        })
    }

    
  const addOfficeDetails = async () => {   
    const newOffice = {name: name, building: building, floor: floor, totalDesks: clicks, usableDesks: freeDesks, administrator: adminname}    
    await addOffice(newOffice); 
    navigate('/OfficeManagement')
}

      const handleSubmit = e => {
        e.preventDefault();
    }

    const resetInputs = () => {
        setOffice({
        name:'',
        building:'',
        floor:'',
        adminname:''
      })
       setClicks(0)
       setfreeDesks(0)
      }

  return (
    <div className='add-building-wrapper'>
    <p><span>Offices &gt;</span> Add Office</p>
      <h1> Add Office </h1>
      <p className='mandatory'>*Mandatory fields</p>

      <div className='form-container'>
      <form onSubmit={handleSubmit}>
          <div className='input'>
          <label htmlFor='name'>Office name:<span>*</span></label>
          <input type='text' name='name' id='name' placeholder='Name' value={name} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='adminname'>Office Administrator:<span>*</span></label>
          <input type='text' name='adminname' id='adminname' placeholder='Name' value={adminname} onChange={handleChange}/>
          </div>

          <div className='office-details'>
          <div className='input'>
          <label htmlFor='building'>Building:<span>*</span></label>
          <select name='building' value={building} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Building A1">A1</option>
              <option value="Building A2">A2</option>
          </select>
          </div>

          <div className='input'>
          <label htmlFor='floor'>Floor:<span>*</span></label>
          <select name='floor' value={floor} onChange={handleChange}>
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          </div>
        <div className='input'>
        <label>Total Desks:<span>*</span></label>
        <div className='quantity'>
        <button onClick={DecreaseDesks}>-</button>        
        <p>{clicks}</p> 
        <button onClick={IncrementDesks}>+</button>
        </div>
         </div>

         <div className='input'>
         <label>Usable Desks:<span>*</span></label>
        <div className='quantity'>
        <button onClick={DecreasefreeDesks}>-</button>        
        <p>{freeDesks}</p> 
        <button onClick={IncrementfreeDesks}>+</button>
        </div>
        </div>
        </div>          

        
        <div className='buttons'>
          <button onClick={() => resetInputs()}>Reset Form</button>
          <button type='submit'onClick={() => addOfficeDetails()}>SUBMIT</button>
        </div>
      </form>
      <img src={bigOffice} alt='building' />
      </div>
    </div>
  )
}

export default AddOffice
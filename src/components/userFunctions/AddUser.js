import React, {useState} from 'react'
import {addEmployee} from '../../api/employees'

const AddUser = () => { 
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName:"",
    email: "",
    role:"",
    gender:"",
    nationality:"",
    birthDate:"",
    password:""
  })

  const handleChange = e => {
    const {name, value} = e.target
    setEmployee({
        ...employee,
        [name]: value
    })
}

  const resetInputs = () => {
  setEmployee({
  firstName: "",
  lastName:"",
  email: "",
  password: "",
  role:"",
  gender:"",
  nationality:"",
  birthDate:""
})
  }

  const addNewEmployee = async () => {
    await addEmployee(employee);
  }
    

    return (
    <div className='add-user-wrapper'>
      <p><span>User &gt;</span> Add User</p>
      <h1> Add User </h1>
      <p className='mandatory'>*Mandatory fields</p>
      <form className='add-user-form' >
          <div className='inputs'>
            <div className='input'>
          <label htmlFor='firstName'>First Name:<span>*</span></label>
          <input type='text' name='firstName' id='firstName' required placeholder='First name' value={employee.firstName} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='lastName'>Last Name:<span>*</span></label>
          <input type='text' name='lastName' id='lastName' required placeholder='Last name' value={employee.lastName} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='email'>Email address:<span>*</span></label>
          <input type='email' name='email' id='email' required placeholder='Email' value={employee.email} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='password'>Password:<span>*</span></label>
          <input type='password' name='password' id='password' required placeholder='Password' value={employee.password} onChange={handleChange}/>
          </div>

          <div className='role-gender'>
              <div className='input'>
              <label htmlFor='role'>Role:<span>*</span></label>
              <select name='role' value={employee.role} onChange={handleChange}>
                  <option value='administrator'>Administrator</option>
                  <option value='office-administrator'>Office Administrator</option>
              </select>
              </div>

              <div className='input'>
              <label htmlFor='role'>Gender:<span>*</span></label>
              <select name='gender' value={employee.gender} onChange={handleChange}>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
              </select>
              </div>

            </div>
        <div className='input'>
          <label htmlFor='nationality'>Nationality:<span>*</span></label>
          <input type='text' name='nationality' id='nationality' required placeholder='Romanian (RO)' value={employee.nationality} onChange={handleChange}/>
          </div>
          
          </div>
          
          <div className='submit'>
          <div className='input'>
          <label htmlFor='birthDate'>Birth Date</label>
          <input type='date' name='birthDate' value={employee.birthDate} onChange={handleChange}/>
          </div>
          <div className='buttons'>
          <button onClick={resetInputs}>Reset Form</button>
          <button type='submit' onClick={() => addNewEmployee()}>SUBMIT</button>
          </div>
          </div>
      </form>
    </div>
  )
}

export default AddUser
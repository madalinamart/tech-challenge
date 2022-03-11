import React, {useState} from 'react'
import {addUser} from '../../api/api'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    firstName: '',
    lastName:'',
    email:'',
    role:'',
    gender:'',
    date:'',
    nationality:'',
    password:''
}

const AddUser = () => {

    const [employee, setEmployee] = useState(initialValues)
    const [selectedFile, setSelectedFile] = useState('')
    const {firstName, lastName, email, role, gender, nationality, date, password, image} = employee
const navigate = useNavigate();

    const handleChange = e => {
        const {name, value} = e.target
        setEmployee({
            ...employee,
            [name]: value
        })
    }
   


    const addUserDetails = async () => {    
        const fd = new FormData()
        fd.append('selectedFile', selectedFile)
        const newEmployee = {name: firstName + ' ' + lastName, email : email, role: role, gender: gender, date: date, nationality: nationality, password: password, image: selectedFile}    
        await addUser(newEmployee); 
        navigate('/UserManagement')
    }

    const handleSubmit = e => {
      e.preventDefault();
      addUserDetails();
    }

    const resetInputs = () => {
      setEmployee({
      firstName: "",
      lastName:"",
      email: "",
      role:"",
      gender:"",
      nationality:"",
      date:"",
      password:""
    })
    }

   
  return (      
    <div className='add-user-wrapper'>
      <p><span>User &gt;</span> Add User</p>
      <h1> Add User </h1>
      <p className='mandatory'>*Mandatory fields</p>
      <form className='add-user-form' onSubmit={handleSubmit}>
          <div className='inputs'>
            <div className='input'>
          <label htmlFor='firstName'>First Name:<span>*</span></label>
          <input type='text' name='firstName' id='firstName' required placeholder='First name' value={firstName} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='lastName'>Last Name:<span>*</span></label>
          <input type='text' name='lastName' id='lastName' required placeholder='Last name' value={lastName} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='email'>Email address:<span>*</span></label>
          <input type='email' name='email' id='email' required placeholder='Email' value={email} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='password'>Password:<span>*</span></label>
          <input type='password' name='password' id='password' required placeholder='Password' value={password} onChange={handleChange}/>
          </div>

          <div className='role-gender'>
              <div className='input'>
              <label htmlFor='role'>Role:<span>*</span></label>
              <select name='role' value={role} onChange={handleChange}>
                  <option>Select</option>
                  <option value='Administrator'>Administrator</option>
                  <option value='Office Administrator'>Office Administrator</option>
                  <option value='Employee'>Employee</option>
              </select>
              </div>

              <div className='input'>
              <label htmlFor='role'>Gender:<span>*</span></label>
              <select name='gender' value={gender} onChange={handleChange}>
                  <option>Select</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
              </select>
              </div>

            </div>
          <div className='input'>
          <label htmlFor='nationality'>Nationality:<span>*</span></label>
          <input type='text' name='nationality' id='nationality' required placeholder='Romanian (RO)' value={nationality} onChange={handleChange}/>
          </div>
          
          <div className='input'>
          <label htmlFor='image'>Avatar image:</label>
          <input type='file' name='image' value={image} onChange={(e) => setSelectedFile(e.target.value)} />
          </div>

          <div className='input'>
          <label htmlFor='date'>Birth Date</label>
          <input type='date' name='date' value={date} onChange={handleChange}/>
          </div>
          </div>
          
          <div className='submit'>
          <div className='buttons'>
          <button onClick={() => resetInputs()}>Reset Form</button>
          <button type='submit'>SUBMIT</button>
          </div>
          </div>
      </form>
    </div>
  )
}

export default AddUser
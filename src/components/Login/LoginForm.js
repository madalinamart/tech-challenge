import React from 'react'
import background from '../../images/background.png'
import logo from '../../images/logo.svg'
import useForm from './useForm'
import validateLogin from './validateLogin'
import { InfoCircle} from 'iconsax-react'

const LoginForm = ({submitForm}) => {

  const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateLogin);
 

  return (
    <div className='wrapper'>
    <div className="form-content">        
        <form className='form' onSubmit={handleSubmit}>
        <div className='logo'> 
           <img src={logo} alt='iDesk logo' />       
        </div>
        <h1>Welcome!</h1>
            <h2>Log in your account</h2>
            <div className='form-inputs'>
                <label htmlFor='email' className='form-label'>
                    Email address:
                </label>
                <input type='email' name='email' 
                className='form-input'
                 id='email' placeholder='Email' value={values.email} onChange={handleChange}/>
                {errors.email && <p className='error'><span><InfoCircle /></span> {errors.email}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='password' className='form-label'>
                    Password:
                </label>
                <input type='password' name='password' className='form-input' id='password' placeholder='Password' value={values.password} onChange={handleChange}/>
                {errors.password && <p className='error'><span><InfoCircle /></span>{errors.password}</p>}
            </div>
            <div className='form-inputs'>               
                <label htmlFor='checkbox' className='checkbox-container'>Keep me logged in!
                <input type='checkbox'  name='checkbox' id='checkbox'/>
                <span className='checkmark'></span>
                </label>
            </div>
            <button className='form-input-btn' type='submit'>LOG IN</button>
        </form>
    </div>
    <div className='image'>
        <img src={background} alt="man working at office" />
    </div>
    </div>
  )
}

export default LoginForm
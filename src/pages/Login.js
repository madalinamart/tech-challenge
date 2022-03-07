import React, {useState} from 'react'
import LoginForm from '../components/Login/LoginForm'
import Home from '../pages/Home'

//LOGIN FEATURE 
const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true);
    }
  return (
    <div>
     {!isSubmitted ? (
         <LoginForm submitForm={submitForm} />) :
         (<Home />)
     }
    </div>
  )
}

export default Login
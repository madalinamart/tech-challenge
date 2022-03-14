import {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthProvider'
import axios from 'axios'

const LOGIN_URL = '/auth'


//LOGIN FEATURE

const useForm = (callback, validateLogin) => {
    const {setAuth} = useContext(AuthContext);
     const [values, setValues] = useState({
        email: '',
        password: ''
    })   

    

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({email: values.email, password: values.password}),
                {headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            })
           const credentials = JSON.stringify(response?.data)
           console.log(credentials)            
            setAuth({ email:values.email, password: values.password})
            setErrors(validateLogin(values));
            setIsSubmitting(true)
        } catch (error) {
            if(!error?.response) {
                console.log('No server Response')
            } else if (error.response?.status === 400) {
                console.log('Missing Username or Password')
            } else if(error.response?.status === 401) {
                console.log('Unauthorized')
            } else {
                console.log('Login Failed')
            }
        }

    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    }, [errors]);

    return {handleChange, values, handleSubmit, errors}
}

export default useForm
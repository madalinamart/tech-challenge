import {useState, useEffect} from 'react'

//LOGIN FEATURE

const useForm = (callback, validateLogin) => {
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

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validateLogin(values));
        setIsSubmitting(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    }, [errors]);

    return {handleChange, values, handleSubmit, errors}
}

export default useForm
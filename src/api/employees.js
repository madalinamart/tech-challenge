import axios from 'axios';

const employeesUrl = 'http://localhost:3006/employees';


export const getEmployees = async () => {
    return await axios.get(employeesUrl);
}


export const addEmployee = async (user) => {
    return await axios.post(`${employeesUrl}/add`, user);
}
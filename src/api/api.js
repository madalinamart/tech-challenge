import axios from 'axios'

const url = 'http://localhost:3006/employees'

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`)
}

export const addUser = async(employee) => {
    return await axios.post(url, employee)
}

export const editUser = async(id,employee) => {
    return await axios.put(`${url}/${id}`, employee)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

const urlBuildings = 'http://localhost:3006/buildings'



export const getBuildings = async (id) => {
    id = id || '';
    return await axios.get(`${urlBuildings}/${id}`)
}

export const addBuilding = async(building) => {
    return await axios.post(urlBuildings, building)
}

export const editBuilding = async(id,building) => {
    return await axios.put(`${urlBuildings}/${id}`, building)
}

export const deleteBuilding = async (id) => {
    return await axios.delete(`${urlBuildings}/${id}`);
}

const urlOffices = `http://localhost:3006/offices`

export const getOffices = async (id) => {
    id = id || '';
    return await axios.get(`${urlOffices}/${id}`)
}

export const addOffice = async(office) => {
    return await axios.post(urlOffices, office)
}

export const editOffice = async(id,office) => {
    return await axios.put(`${urlOffices}/${id}`, office)
}

export const deleteOffice = async (id) => {
    return await axios.delete(`${urlOffices}/${id}`);
}
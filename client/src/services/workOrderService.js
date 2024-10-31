import axios from 'axios'

// Base URL for all workorder requests -- matches backend endpoint
const baseUrl = '/api/workorders'

// Function to get all work orders
const getAll = () => {
    return axios.get(baseUrl)
}

// Taking a new work order object and sending it to the backend
const create = newObject => {
    return axios.post(baseUrl, newObject)
}

// Add new delete function
const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, remove }

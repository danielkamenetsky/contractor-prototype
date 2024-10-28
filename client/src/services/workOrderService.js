import axios from 'axios'

// Base URL for all workorder requests -- matches backend endpoint
const baseUrl = '/api/workorders'

// Function to get all work orders
const getAll = () => {
    return axios.get(baseUrl)
}

export default { getAll }

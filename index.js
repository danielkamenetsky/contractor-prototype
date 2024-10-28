const express = require('express')

const app = express()

let workOrders = [
    {
        id: 1,
        wo: 343064,
        municipality: "East Gwillimbury",
        rin: "67-36",
        roadside: "West",
        address: "Not Entered",
        roadName: "McCowan Road"
    },
    {
        id: 2,
        wo: 343065,
        municipality: "East Gwillimbury",
        rin: "67-37",
        roadside: "East",
        address: "123 McCowan Road",
        roadName: "McCowan Road"
    },
    {
        id: 3,
        wo: 343066,
        municipality: "Markham",
        rin: "45-22",
        roadside: "North",
        address: "Not Entered",
        roadName: "16th Avenue"
    }
]


app.get('/api/workorders', (req, res) => {
    res.json(workOrders)
})

// Fetching a single work order

// Handles all HTTP GET requests of the form api/workorders/SOMETHING
app.get('/api/workorders/:id', (req, res) => {
    const id = Number(req.params.id)
    const workorder = workOrders.find(workorder => workorder.id === id)
    if (workorder) {
        res.json(workorder)
    } else {
        // since no data we use status method for setting the status and end for responding to request without sending any data
        res.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

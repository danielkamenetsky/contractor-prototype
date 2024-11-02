require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const WorkOrder = require('./models/workOrder')


const app = express()
app.use(express.json())

// MongoDB connection
mongoose.set('strictQuery', false)
const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB: ', error.message);
    })




// Shows requests coming in 
const requestLogger = (req, res, next) => {
    console.log('Method: ', req.method) // GET, POST, etc
    console.log('Path', req.path); // /api/workorders, etc
    console.log('Body: ', req.body); // Data sent in request
    console.log('---');
    next() //  Move to next middleware/route
}

app.use(requestLogger)

// Fetch all workorders
app.get('/api/workorders', (req, res) => {
    WorkOrder.find({}).then(workOrders => {
        res.json(workOrders)
    })
})


app.get('/api/workorders/:wo', (req, res, next) => {
    const workOrderNumber = Number(req.params.wo)
    console.log('Looking for WO:', workOrderNumber)  // See what number we're looking for

    WorkOrder.findOne({ wo: workOrderNumber })
        .then(workOrder => {
            console.log('Found workOrder:', workOrder)  // See what we found (if anything)
            if (workOrder) {
                res.json(workOrder)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})



// Deleting a note by filtering by all id's except the note
app.delete('/api/workorders/:wo', (req, res, next) => {
    WorkOrder.findOneAndDelete({ wo: req.params.wo })
        .then(() => {
            res.status(204).end()
        })
        .catch(error => next(error))
})


// Post
app.post('/api/workorders', (req, res, next) => {
    console.log('1. Got request');
    const body = req.body
    console.log('2. Request body:', body);

    if (!body.wo || !body.municipality) {
        return res.status(400).json({
            error: 'work order number and municipality are required'
        })
    }

    console.log('3. Creating new WorkOrder');
    const workOrder = new WorkOrder({
        wo: body.wo,
        municipality: body.municipality,
        rin: body.rin || "Not Entered",
        roadside: body.roadside || "Not Entered",
        address: body.address || "Not Entered",
        roadName: body.roadName || "Not Entered"
    })
    console.log('4. WorkOrder instance:', workOrder);

    workOrder.save()
        .then(savedWorkOrder => {
            console.log('5. Saved successfully:', savedWorkOrder);
            res.json(savedWorkOrder)
        })
        .catch(error => {
            console.log('5. Error saving:', error);
            next(error)
        })
})

// Handles when someone tries to a visit a route that doesn't exist 
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

// Catches errors
const errorHandler = (error, req, res, next) => {
    console.log(error.message);
    // Different types of errors get different responses
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }

    next(error)
}
app.use(errorHandler)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
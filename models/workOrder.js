const mongoose = require('mongoose')

const workOrderSchema = new mongoose.Schema({
    wo: {
        type: Number,
        required: true
    },
    municipality: {
        type: String,
        required: true
    },
    rin: {
        type: String,
        default: "Not Entered"
    },
    roadside: {
        type: String,
        default: "Not Entered"
    },
    roadside: {
        type: String,
        default: "Not Entered"
    },
    address: {
        type: String,
        default: "Not Entered"
    },
    roadName: String
})

// Removing _id and __v

workOrderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        // Create a new 'id' property using the MongoDB _id
        // toString() converts MongoDB's ObjectId to a regular string
        returnedObject.id = returnedObject._id.toString()

        // Remove the _id field from the response
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('WorkOrder', workOrderSchema)
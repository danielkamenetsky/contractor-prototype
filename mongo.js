const mongoose = require('mongoose')
const WorkOrder = require('./models/workOrder')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://dan:${password}@cluster0.o3wgy.mongodb.net/workorder?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

// Trying to connect to MongoDB 
mongoose.connect(url)
    // If successful then this .then block runs
    .then(() => {
        console.log('Connected to MongoDB!')
        // If user provided additional args
        // 3 and beyond are actual data
        if (process.argv.length > 3) {
            // if yes, create a new WO with these arguments
            const workOrder = new WorkOrder({
                wo: Number(process.argv[3]),
                municipality: process.argv[4] || "Not Entered",
                rin: process.argv[5] || "Not Entered",
                roadside: process.argv[6] || "Not Entered",
                address: process.argv[7] || "Not Entered",
                roadName: process.argv[8] || "Not Entered"

            })

            // Try to ssave the wo to MongoDB
            workOrder.save().then(result => {
                // If save successful, log it and close connection
                console.log('work order saved!');
                mongoose.connection.close()
            })
                .catch(error => {
                    // If save fails, log error and close connection
                    console.error('Error:', error)
                    mongoose.connection.close()
                })
        } else {
            // if no extra args, find and show all Wos
            WorkOrder.find({}).then(result => {
                result.forEach(workOrder => {
                    console.log(workOrder.toJSON())

                })
                mongoose.connection.close()
            })
        }
    })
    .catch(error => {
        console.log('Error connecting to MongoDB:', error.message)
        mongoose.connection.close()

    })

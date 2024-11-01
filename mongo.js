const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://dan:${password}@cluster0.o3wgy.mongodb.net/workorder?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

// Add error handling to connection
mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB!')

        const noteSchema = new mongoose.Schema({
            content: String,
            important: Boolean,
        })

        const Note = mongoose.model('Note', noteSchema)

        const note = new Note({
            content: 'HTML is easy',
            important: true,
        })

        return note.save()
    })
    .then(result => {
        console.log('Note saved!', result)  // This will show the saved document
        mongoose.connection.close()
    })
    .catch(error => {
        console.error('Error:', error)
        mongoose.connection.close()
    })
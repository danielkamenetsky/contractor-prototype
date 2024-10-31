const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://danielkamenetsky:${password}@cluster0.gq2rb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    name: 'HTML is easy!!',
    number: '1234',
})

note.save().then(result => {
    console.log('note saved!!')
    mongoose.connection.close()
})
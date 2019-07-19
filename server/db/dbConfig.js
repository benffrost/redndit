
import mongoose from 'mongoose'
const connectionString = "mongodb+srv://student:student@cluster0-ur4ua.mongodb.net/dndmeet?retryWrites=true&w=majority";
let connection = mongoose.connection
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.error('[database error]:', err)
})

connection.once('open', () => {
  console.log('database connected!')
})
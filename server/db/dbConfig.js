
import mongoose from 'mongoose'
const connectionString = "";//TODO
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
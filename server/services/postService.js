import mongoose from 'mongoose'


let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, maxlength: 60, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  img: { type: String },
  score: { type: Number }




}, { timestamps: true })

export default mongoose.model('Post', _schema)
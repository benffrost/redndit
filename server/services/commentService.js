import mongoose from 'mongoose'


let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, maxlength: 60, required: true },
  author: { type: String, maxlength: 60, required: true },
  text: { type: String },
  score: { type: Number },
  post: [{ type: ObjectId, ref: 'Post' }]
}, { timestamps: true })

export default mongoose.model('Comment', _schema)
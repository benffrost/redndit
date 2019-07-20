import mongoose from 'mongoose'


let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  author: { type: String, maxlength: 60, required: true },
  text: { type: String, required: true },
  score: { type: Number },
  post: [{ type: ObjectId, ref: 'Post' }]
}, { timestamps: true })

export default mongoose.model('Comment', _schema)
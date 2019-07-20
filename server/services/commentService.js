import mongoose from 'mongoose'


let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  author: { type: String, maxlength: 60, required: true },
  text: { type: String, required: true },
  score: { type: Number, required: true },
  post: [{ type: ObjectId, ref: 'Post', required: true }]
}, { timestamps: true })

export default mongoose.model('Comment', _schema)
import express from 'express'
import bp from 'body-parser'
import cors from 'cors'
import PostController from './controller/postController.js'
import CommentController from './controller/commentController.js'
import './db/dbConfig'



let port = 3000
let server = express()
server.use(cors())
server.use(bp.json())

server.use('/api/posts', new PostController().router)
server.use('/api/comments', new CommentController().router)





server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("your server is running on port: ", port)
})
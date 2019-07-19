import express from 'express'
import bp from 'body-parser'
import PostController from './controller/postController.js'
import CommentController from './controller/commentController.js'
import './db/dbConfig'
import cors from 'cors'

let port = 3000

let server = express()

server.use('/api/posts', new PostController().router)
server.use('/api/comments', new CommentController().router)
server.use(bp.json())


var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))



server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("your server is running on port: ", port)
})
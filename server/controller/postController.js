import PostService from "../services/postService"
import CommentService from "../services/commentService"
import express from 'express'

export default class PostController {
  async getAllPosts(req, res, next) {
    try {
      let posts = await PostService.find()
      res.send(posts)
    } catch (err) {
      next(err)
    }
  }
  async createPost(req, res, next) {
    try {
      let post = await PostService.create(req.body)
      res.send(post)
    } catch (err) {
      next(err)
    }
  }
  async getPost(req, res, next) {
    try {
      let post = await PostService.findById(req.params.postId)
      if (!post) {
        return res.status(400).send("No post at this ID.")
      }
      res.send(post)
    } catch (err) {
      next(err)
    }
  }
  async getPostComments(req, res, next) {
    try {
      let postComments = await CommentService.find({ post: req.params.postId })
      if (!postComments) {
        return res.status(400).send("No comments to show.")
      } else {
        res.send(postComments)
      }
    } catch (error) {
      next(error)
    }
  }

  async editPost(req, res, next) {
    try {
      let editingPost = await PostService.findByIdAndUpdate(req.params.postId, req.body, { new: true })
    } catch (err) {
      next(err)
    }
  }
  async votePost(req, res, next) {
    try {
      let votingPost = await PostService.findByIdAndUpdate(req.params.score, req.body, { new: true })
    } catch (err) {
      next(err)
    }
  }
  async deletePost(req, res, next) {
    try {
      let deletingPost = await PostService.findByIdAndDelete(req.params.postId)
      res.send("Post Deleted")
    } catch (err) {
      next(err)
    }
  }



  constructor() {
    this.router = express.Router()
      .get('', this.getAllPosts)
      .post('', this.createPost)
      .get('/:postId', this.getPost)
      .get('/:postId/comments', this.getPostComments)
      .put('/:postId', this.editPost)
      .put('/:postId', this.votePost)
      .delete('/:postId', this.deletePost)



  }
}
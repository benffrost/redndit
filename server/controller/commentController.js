import CommentService from "../services/commentService"
import express from 'express'

export default class CommentController {
  async createComment(req, res, next) {
    try {
      let comment = await CommentService.create(req.body)
      res.send(comment)
    } catch (err) {
      next(err)
    }
  }
  async getAllComments(req, res, next) {
    try {
      let comments = await CommentService.find()
      res.send(comments)
    } catch (err) {
      next(err)
    }
  }
  async editComment(req, res, next) {
    try {
      let editingComment = await CommentService.findByIdAndUpdate(req.params.commentId, req.body, { new: true })
    } catch (err) {
      next(err)
    }
  }
  async voteComment(req, res, next) {
    try {
      let votingComment = await CommentService.findByIdAndUpdate(req.params.score, req.body, { new: true })
    } catch (err) {
      next(err)
    }
  }
  async deleteComment(req, res, next) {
    try {
      let deletingComment = await CommentService.findByIdAndDelete(req.params.commentId)
      res.send("Comment Deleted")
    } catch (err) {
      next(err)
    }
  }



  constructor() {
    this.router = express.Router()
      .get('', this.getAllComments)
      .post('', this.createComment)
      .put('/:commentId', this.editComment)
      .put('/:commentId', this.voteComment)
      .delete('/:commentId', this.deleteComment)



  }
}
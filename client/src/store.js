import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api'
})


export default new Vuex.Store({
  //temp placeholders in defaults so we can work on formatting

  state: {
    posts: [
      {
        name: "Carl's Tavern",
        author: "Carl",
        data: {
          text: "hello and welcome to my tavern",
          img: "placehold.it/150x150"
        },
        score: 0,
        postID: "1254235"
      },
      {
        name: "Jarl's Tavern",
        author: "Jarl Carl",
        data: {
          text: "hello and welcome to my other tavern",
          img: "placehold.it/150x150"
        },
        score: 0,
        postID: "76534"
      }],

    comments: [
      {
        title: "N/A",
        author: "Jarl Carl",
        text: "my other tavern is nicer",
        score: 0,
        parent: "1254235",
        commentID: "972548"
      }],

    post: {}
  },



  mutations: {
    setPosts(state, data) {
      state.posts = data
    },
    setPost(state, data) {
      state.post = data
    },

    addPost(state, data) {
      state.posts.push(data)
    },

    editPost(state, data) {
      let index = state.posts.findIndex(el => el._id == data._id)
      state.posts[index] = data
    },
    deletePost(state, postID) {
      let index = state.posts.findIndex(el => el._id == postID)
      state.posts.splice(index, 1)
    },


    setComments(state, data) {
      state.comments = data
    },

    addComment(state, data) {
      state.comments.push(data)
    },

    editComment(state, data) {
      let index = state.comments.findIndex(el => el._id == data._id)
      state.comments[index] = data
    },
    deleteComment(state, commentID) {
      let index = state.comments.findIndex(el => el._id == commentID)
      state.comments.splice(index, 1)
    },



    sortPosts(state, data) { //TODO
    },
    sortComments() { //TODO
    }
  },
  actions: {

    async getAllPosts({ commit, dispatch }) {
      let suffix = "/posts"
      try {
        let res = await api.get(suffix)
        commit("setPosts", res.data)
      } catch (err) { console.error(err) }
    },

    async getPost({ commit, dispatch }, postID) {
      let suffix = "/posts/" + postID
      try {
        let res = await api.get(suffix)
        commit("setPost", res.data)
      } catch (err) { console.error(err) }
    },

    async addPost({ commit, dispatch }, data) {
      let suffix = "/posts"
      try {
        let res = await api.post(suffix, data)
        commit("addPost", res.data)
      } catch (err) { console.error(err) }
    },
    async editPost({ commit, dispatch }, data) {
      let suffix = "/posts/" + data._id
      try {
        let res = await api.put(suffix, data)
        commit("editPost", res.data)
      } catch (err) { console.error(err) }
    },
    async deletePost({ commit, dispatch }, postID) {
      let suffix = "/posts/" + postID
      try {
        let res = await api.delete(suffix)
        commit("deletePost", postID)
      } catch (err) { console.error(err) }
    },


    async getComments({ commit, dispatch }, parentID) {
      let suffix = "/comments/" + parentID
      try {
        let res = await api.get(suffix)
        commit("setComments", res.data)
      } catch (err) { console.error(err) }
    },


    async addComment({ commit, dispatch }, data) {
      let suffix = "comments/"
      try {
        let res = await api.post(suffix, data)
        commit("addComment")
      } catch (err) { console.error(err) }
    },
    async editComment({ commit, dispatch }, data) {
      let suffix = "comments/" + data._id
      try {
        let res = await api.put(suffix, data)
        commit("editComment", res.data)
      } catch (err) { console.error(err) }
    },
    async deleteComment({ commit, dispatch }, commentID) {
      let suffix = "comments/" + commentID
      try {
        let res = await api.delete(suffix)
        commit("deleteComment", commentID)
      } catch (err) { console.error(err) }
    },
  }
})
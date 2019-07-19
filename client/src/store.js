import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//localhost:3000/api',
  withCredentials: true
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
  },



  mutations: {
    setPosts(state, data) {
      this.posts = data
    },
    setComments(state, data) {
      this.comments = data
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
      } catch (err) { console.error(err) }//TODO
    },
    vote_on_comment({ commit, dispatch }) {//TODO
    }
  }
})
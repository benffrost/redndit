import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PostController from 'controller/postController'
import CommentController from 'controller/commentController'


new Vue({
  router,
  store,
  render: function () { return (App) }
}).$mount('#app')
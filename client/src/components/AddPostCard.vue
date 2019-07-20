<template>
  <div class="addPost">
    <form class="col-8" @submit.prevent="addPost">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          name="title"
          class="form-control"
          id="title"
          placeholder="Post title"
          v-model="post.title"
        />
      </div>
      <div class="form-group">
        <label for="name">Enter your name:</label>
        <input
          type="text"
          name="name"
          class="form-control"
          id="name"
          placeholder="username"
          v-model="post.author"
        />
      </div>
      <div class="form-group">
        <label for="body">Your message:</label>
        <input
          type="text"
          name="body"
          class="form-control"
          id="body"
          placeholder="Post body"
          v-model="post.text"
        />
      </div>
      <b-button type="submit" variant="outline-primary">Submit Post</b-button>
    </form>
  </div>
</template>


<script>
export default {
  name: "addPost",
  data() {
    return {
      post: {
        title: "",
        author: "",
        text: ""
      }
    };
  },
  computed: {},
  methods: {
    addPost() {
      this.$store.dispatch("addPost", this.post);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
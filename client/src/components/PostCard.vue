<template>
  <div class="PostCard">
    <hr>
    <h1>{{ post.name }}</h1>
    <h3>{{ post.author}}</h3>
    <p>post.text</p>
    <p></p>

  </div>
</template>


<script>
  export default {
    name: 'PostCard',
    data() {
      return {}
    },
    props: [
      "pID"
    ],
    computed: {
      post() {
        debugger
        return this.$store.state.posts.find(el => el.postID == this.pID)
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>
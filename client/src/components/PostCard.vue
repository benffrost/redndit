<template>
  <div class="PostCard">
    <hr>
    <h2>{{ post.name }}</h2>
    <h4>{{ post.author}}</h4>
    <p>{{ post.data.text }}</p>
    <h4>score: {{ post.score }}</h4>
    <button>VIEW</button>

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
        return this.$store.state.posts.find(el => el.postID == this.pID)
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>
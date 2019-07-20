<template>
  <div class="PostCard" @click="switchView">
    <hr>
    <h2>{{ post.title }}</h2>
    <h4>{{ post.author}}</h4>
    <!-- <p>{{ post.data.text }}</p>
    <h4>score: {{ post.score }}</h4> -->
    <!-- <router-link tag="b-btn" :to="{name: 'PostDisplay', params: {postID: pID }}">
      view me</router-link> -->
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
        return this.$store.state.posts.find(el => el._id == this.pID)
      }
    },
    methods: {
      switchView() {
        this.$router.push({ name: 'PostDisplay', params: { postID: this.pID } })
      }

    },
    components: {}
  }
</script>


<style scoped>

</style>
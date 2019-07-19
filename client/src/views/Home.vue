<template>
  <div class="home">
    <PostCard v-for="post in posts" :key="post._id" :pID="post._id"></PostCard>
  </div>
</template>

<script>
  //NOTE
  // title:required
  // author:required
  // data{text img}
  // timestamp:required
  import PostCard from '@/components/PostCard'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch("getAllPosts")
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    components: {
      PostCard
    }

  }
</script>
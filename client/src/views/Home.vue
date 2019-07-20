<template>
  <div class="home">
    <div>Sort By:
      <b-btn @click="sortByDate">Recent</b-btn>
      <b-btn @click="sortByScore">Score</b-btn>
    </div>
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
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    components: {
      PostCard
    },
    methods: {
      sortByDate() {
        this.$store.dispatch("sortPosts", function (b, a) { return Date.parse(a.createdAt) - Date.parse(b.createdAt) })
      },
      sortByScore() {
        this.$store.dispatch("sortPosts", function (b, a) { return a.score - b.score })
      }
    }

  }
</script>
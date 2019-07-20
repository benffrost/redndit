<template>
  <div class="home">
    <div>Sort By:
      <b-btn @click="sortByDate">Date</b-btn>
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
      this.$store.dispatch("getAllPosts")
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
        //WIP for now just refresh from server?
        // function convertDatetoNumber(date) {

        //   let years = parseFloat(date.slice(0,4))-2019
        //   let months = years*12 + parseFloat(date.slice(5, 7))
        //   let days = months*30 + parseFloat(date)          let seconds = parseFloat(date.slice(17, 24))

        //   return seconds
        // }
        // let x = "2019-07-20T05:20:33.498Z"
        // let y = convertDatetoNumber(x)
        // debugger
        // this.$store.dispatch("sortPosts", function (a, b) { return convertDatetoNumber(a.createdAt) > convertDatetoNumber(b.createdAt) })
      },
      sortByScore() {
        this.$store.dispatch("sortPosts", function (a, b) { return a.score - b.score })
      }
    }

  }
</script>
<template>
  <div class="PostDisplay">
    <b-container fluid>
      <b-row>
        <b-col>
          <PostCard :pID="this.$route.params.postID"></PostCard>
        </b-col>

      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <CommentCard v-for="comment in comments" :key="comment._id" :pID="comment._id">></CommentCard>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>


<script>
  import PostCard from '@/components/PostCard'
  import CommentCard from '@/components/CommentCard'

  export default {
    name: 'PostDisplay',
    data() {
      return {}
    },
    mounted() {
      //      this.$store.dispatch("getComments", this.$route.params.postID)
      this.$store.dispatch("getComments", this.$route.params.postID)
    },
    computed: {
      post() {
        debugger
        return this.$store.state.posts.find(el => el._id == this.$route.params.postID)
      },
      comments() {
        return this.$store.state.comments
      }
    },
    components: {
      PostCard,
      CommentCard
    },

    methods: {},
    components: {}
  }
</script>

<style scoped>

</style>
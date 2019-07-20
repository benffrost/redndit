<template>
  <div class="PostDisplay">
    <b-container fluid>
      <b-row>
        <b-col>
          <PostCard :activePost="post"></PostCard>
          <b-btn @click="deletePost">Delete Post</b-btn>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <CommentCard v-for="comment in comments" :key="comment._id" :pID="comment._id"></CommentCard>
        </b-col>
      </b-row>
      <b-col>
        <AddCommentCard :pID="this.$route.params.postID"></AddCommentCard>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
  import PostCard from "@/components/PostCard";
  import CommentCard from "@/components/CommentCard";
  import AddCommentCard from "@/components/AddCommentCard";

  export default {
    name: "PostDisplay",
    props: [
      "postID"
    ],
    data() {
      return {};
    },
    mounted() {

      this.$store.dispatch("getPost", this.$route.params.postID);
      this.$store.dispatch("getComments", this.$route.params.postID);
    },
    computed: {
      post() {
        return this.$store.state.post;
      },
      comments() {
        return this.$store.state.comments;
      }
    },
    components: {
      PostCard,
      CommentCard,
      AddCommentCard,
    },

    methods: {
      deletePost() {
        this.$store.dispatch('deletePost', this.$route.params.postID)
      }
    }
  };
</script>

<style scoped>
</style>
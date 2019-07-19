<template>
  <div class="PostDisplay">
    <b-container fluid>
      <b-row>
        <b-col>
          <h1>Title: {{ post.name }}</h1>
        </b-col>

      </b-row>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <b-row v-for="comment in comments">
            <b-card header-tag="header" footer-tag="footer">
              <h6 slot="header" class="mb-0">{{ comment.author }}</h6>
              <b-card-text>{{ comment.text }}</b-card-text>
              <h6 slot="footer" class="mb-0">Score: {{ comment.score }} </h6>
            </b-card>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>


<script>
  export default {
    name: 'PostDisplay',
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch("getComments", this.$route.params.postID)
    },
    computed: {
      post() {
        return this.$store.state.posts.find(el => el.postID == this.$route.params.postID)
      },
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {},
    components: {}
  }
</script>

<style scoped>

</style>
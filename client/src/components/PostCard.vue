<template>
  <div class="PostCard" @click="switchView">
    <b-row class="my-2">
      <b-col>
        <b-card header-tag="header" footer-tag="footer">
          <div slot="header" class="mb-0">
            <h3>{{ post.title }}</h3>
            <h6>{{ post.author }}</h6>
          </div>
          <b-card-text>{{ post.text }}</b-card-text>
          <h6 slot="footer" class="mb-0">Score: {{ post.score }} </h6>
        </b-card>
      </b-col>
    </b-row>
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
<template>
  <div class="PostCard">
    <b-row class="my-2">
      <b-col>
        <b-card header-tag="header" footer-tag="footer">
          <div slot="header" class="mb-0" @click="switchView">
            <h3>{{ post.title }}</h3>
            <h6>{{ post.author }}</h6>
          </div>
          <b-card-text>{{ post.text }}</b-card-text>
          <h6 slot="footer" class="mb-0">
            <PostVote :pID="pID"></PostVote>
          </h6>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>


<script>
  import PostVote from "@/components/PostVote";

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
        if (!this.$store.state.post._id) {
          return this.$store.state.posts.find(el => el._id == this.pID)
        } else {
          return this.$store.state.post
        }

      }
    },
    methods: {
      switchView() {
        this.$router.push({ name: 'PostDisplay', params: { postID: this.pID } })
      }
    },
    components: {
      PostVote
    }
  }
</script>


<style scoped>

</style>
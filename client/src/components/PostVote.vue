<template>
  <div class="PostVote">
    <div v-if="post"> <i class="ra ra ra-muscle-up ra-3x" @click="upVote"></i>
      Score: {{ post.score }}
      <i class="ra ra ra-burning-meteor ra-3x" @click="downVote"></i></div>
  </div>
</template>


<script>
  export default {
    name: "PostVote",

    props: ["pID"],
    data() {
      return {};
    },
    computed: {
      post() {
        return this.$store.state.posts.find(el => el._id == this.pID);
      }
    },
    methods: {
      upVote() {
        let data = this.post;
        data.score += 1;
        this.$store.dispatch("editPost", data);
      },
      downVote() {
        let data = this.post;
        data.score -= 1;
        this.$store.dispatch("editPost", data);
      }
    },
    components: {}
  };
</script>


<style scoped>
</style>
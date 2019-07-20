<template>
  <div class="CommentVote">
    <i class="ra ra ra-muscle-up" @click="upVote"></i>Score: {{ comment.score }}<i class="ra ra ra-burning-meteor"
      @click="downVote"></i>


  </div>
</template>


<script>

  export default {
    name: 'CommentVote',

    props: [
      "pID"
    ],
    data() {
      return {}
    },
    computed: {
      comment() {
        return this.$store.state.comments.find(el => el._id == this.pID)
      }
    },
    methods: {
      upVote() {
        let data = this.comment
        data.score += 1
        this.$store.dispatch('editComment', data)
      },
      downVote() {
        let data = this.comment
        data.score -= 1
        this.$store.dispatch('editComment', data)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>
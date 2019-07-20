<template>
  <div class="AddCommentCard">
    <form class="col-3 border border-dark" @submit.prevent="addComment">
      <div class="form-group">
        <input type="text" v-model="comment.author" placeholder="Name" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" name="" v-model='comment.text' placeholder="type here" class="form-control">
      </div>
      <b-button type="submit" variant="outline-primary">Submit Comment</b-button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'AddCommentCard',
    data() {
      return {
        comment: {
          author: '',
          text: '',
          score: 0,
          post: this.pID
        }
      }


    },
    props: [
      "pID"
    ],
    computed: {},
    methods: {
      addComment() {
        this.$store.dispatch('addComment', this.comment)


      }
    },
    components: {}
  }
</script>


<style scoped>

</style>
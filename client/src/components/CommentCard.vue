<template>
  <div class="CommentCard">
    <b-row>
      <b-card header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">{{ comment.author }}</h6>
        <b-card-text>{{ comment.text }}</b-card-text>
        <h6 slot="footer" class="mb-0">Score: {{ comment.score }} </h6>
      </b-card>
    </b-row>
  </div>
</template>


<script>
  export default {
    name: 'CommentCard',
    data() {
      return {}
    },
    props: [
      "pID"
    ],
    computed: {
      comment() {
        return this.$store.state.comments.find(el => el._id == this.pID)
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>
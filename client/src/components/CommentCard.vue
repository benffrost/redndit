<template>
  <div class="CommentCard">
    <b-row class="my-1">
      <b-col cols="1"></b-col>
      <b-col cols="11">
        <b-card header-tag="header" footer-tag="footer">
          <h6 slot="header" class="mb-0">{{ comment.author }}</h6>
          <b-card-text>{{ comment.text }}</b-card-text>
          <div slot="footer" class="mb-0">
            <CommentVote :pID="pID"></CommentVote>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>


<script>
  import CommentVote from "@/components/CommentVote";

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
    components: {
      CommentVote
    }
  }
</script>


<style scoped>

</style>
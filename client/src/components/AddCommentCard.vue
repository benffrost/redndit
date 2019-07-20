<template>
  <div class="AddCommentCard">
    <form class="col-8" @submit.prevent="addComment">
      <div class="form-group">
        <label for="Name">Title</label>
        <input type="text" name="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="Name">Name</label>
        <input type="text" name="name" class="form-control">
      </div>


    </form>
  </div>
</template>


<script>
  export default {
    name: 'AddCommentCard',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>
<template>
  <div class="addPost">
    <form class="col-8" @submit.prevent="addPost">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" name="title" class="form-control" id="title" placeholder="Post title" />
      </div>
      <div class="form-group">
        <label for="name">Enter your name:</label>
        <input type="text" name="name" class="form-control" id="name" placeholder="username" />
      </div>
      <div class="form-group">
        <label for="body">Your message:</label>
        <input type="text" name="body" class="form-control" id="body" placeholder="Post body" />
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "addPost",
  data() {
    return {};
  },
  computed: {},
  methods: { addPost() {} },
  components: {}
};
</script>


<style scoped>
</style>
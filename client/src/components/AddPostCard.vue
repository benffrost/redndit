<template>
  <div class="addPost">
    <form class="col-8" @submit.prevent="addPost">
      <div class="form-group">
        <label for="Name">Title</label>
        <input type="text" name="name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="Name">Name</label>
        <input type="text" name="name" class="form-control" />
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
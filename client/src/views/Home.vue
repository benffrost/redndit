<template>
  <div class="home">
    <PostCard v-for="post in posts" ID="post.ID"></PostCard>
  </div>
</template>

<script>
  //NOTE
  // title:required
  // author:required
  // data{text img}
  // timestamp:required
  import PostCard from '@/components/PostCard'
  export default {
    name: 'home',
    components: {
      PostCard
    }
  }
</script>
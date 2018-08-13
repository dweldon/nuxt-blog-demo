<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style lang="stylus" scoped>
.posts-page
  display: flex
  align-items: center
  justify-content: center
</style>

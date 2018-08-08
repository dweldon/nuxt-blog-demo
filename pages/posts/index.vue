<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList';

export default {
  components: { PostList },
};
</script>

<style lang="stylus" scoped>
.posts-page
  display: flex
  align-items: center
  justify-content: center
</style>

<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :is-admin="isAdmin"
      :preview-text="post.previewText"
      :thumbnail-url="post.thumbnailUrl"
    />
  </section>
</template>

<script>
import PostPreview from './PostPreview';

export default {
  components: { PostPreview },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
.post-list
  display: flex
  padding: 20px
  box-sizing: border-box
  flex-wrap: wrap
  align-items: center
  justify-content: center
</style>

<template>
  <section class="post-list">
    <PostPreview
      id="1"
      title="Is JS really eating the world?"
      :is-admin="isAdmin"
      preview-text="Some people say the JS is eating the world, but I don't think so..."
      thumbnail-url="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1"
    />
    <PostPreview
      id="2"
      title="Circuit boards are a silent killer"
      :is-admin="isAdmin"
      preview-text="These things are everywhere, and they are mutating your brain waves..."
      thumbnail-url="https://previews.123rf.com/images/handmadepictures/handmadepictures1501/handmadepictures150100939/35118263-circuit-board-with-a-lot-of-different-components-close-up-shot-.jpg"
    />
  </section>
</template>

<script>
import PostPreview from './PostPreview';

export default {
  components: { PostPreview },
  props: {
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

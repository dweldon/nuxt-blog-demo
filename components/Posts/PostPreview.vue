<template>
  <nuxt-link
    :to="`/posts/${id}`"
    class="post-preview"
  >
    <article>
      <div
        class="post-thumbnail"
        :style="thumbnailStyle"
      />
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    thumbnailStyle() {
      return {
        backgroundImage: `url(${this.thumbnailUrl})`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.post-preview
  border: 1px solid #ccc
  box-shadow: 0 2px 2px #ccc
  background-color: white
  width: 90%

  @media (min-width: 850px)
    width: 400px
    margin: 10px

a
  text-decoration: none
  color: black

.post-thumbnail
  width: 100%
  height: 200px
  background-position: center
  background-size: cover

.post-content
  padding: 10px
  text-align: center

a:hover .post-content
a:active .post-content
  background-color: #ccc
</style>

<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList';

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  components: { PostList },
  async asyncData() {
    await snooze(1000);
    return {
      loadedPosts: [{
        id: '1',
        title: 'What is your puppy thinking about?',
        isAdmin: 'isAdmin',
        previewText: 'Your canine companion slumbers by your side, but is she dreaming of you?',
        thumbnailUrl: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg',
      }, {
        id: '2',
        title: 'Are zebras just horses with stripes?',
        isAdmin: 'isAdmin',
        previewText: 'Zebras, horses, and donkeys have differing numbers of chromosomes, in fact...',
        thumbnailUrl: 'https://images.pexels.com/photos/39245/zebra-stripes-black-and-white-zoo-39245.jpeg',
      }],
    };
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
  },
};
</script>

<style lang="stylus" scoped>
.posts-page
  display: flex
  align-items: center
  justify-content: center
</style>

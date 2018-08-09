<template lang="html">
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList';

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  components: { PostList },
  async asyncData() {
    await snooze(1500);
    return {
      loadedPosts: [{
        id: '1',
        title: 'Is JS really eating the world?',
        isAdmin: 'isAdmin',
        previewText: "Some people say the JS is eating the world, but I don't think so...",
        thumbnailUrl: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1',
      }, {
        id: '2',
        title: 'Circuit boards are a silent killer',
        isAdmin: 'isAdmin',
        previewText: 'These things are everywhere, and they are mutating your brain waves...',
        thumbnailUrl: 'https://previews.123rf.com/images/handmadepictures/handmadepictures1501/handmadepictures150100939/35118263-circuit-board-with-a-lot-of-different-components-close-up-shot-.jpg',
      }],
    };
  },
};
</script>

<style lang="stylus" scoped>
.intro
  height: 300px
  position: relative
  padding: 30px
  box-sizing: border-box
  background-position: center
  background-size: cover
  background-image: url('~/assets/images/main-page-background.jpg')

.intro h1
  position: absolute
  top: 10%
  left: 5%
  width: 90%
  font-size: 1.5rem
  color: black
  background-color: rgb(211, 211, 211)
  padding: 10px
  border-radius: 10px
  box-shadow: 3px 3px 3px black
  box-sizing: border-box
  border: 1px solid black

  @media (min-width: 768px)
    font-size: 2rem
</style>

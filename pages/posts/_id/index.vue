<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about this post. Send an email to
        <a href="mailto:dave@edthena.com">dave@edthena.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          author: 'David Weldon',
          title: `What is your puppy thinking about? (ID: ${context.params.id})`,
          isAdmin: 'isAdmin',
          content: 'Your canine companion slumbers by your side, but is she dreaming of you?',
          updatedDate: new Date(),
          thumbnailUrl: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg',
        },
      });
    }, 1000);
  },
};
</script>

<style lang="stylus" scoped>
.single-post-page
  padding: 30px
  text-align: center
  box-sizing: border-box

.post
  width: 100%

  @media (min-width: 768px)
    width: 600px
    margin: auto

.post-title
  margin: 0

.post-details
  padding: 10px
  box-sizing: border-box
  border-bottom: 3px solid #ccc
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  @media (min-width: 768px)
    flex-direction: row

.post-detail
  color: rgb(88, 88, 88)
  margin: 0 10px

.post-feedback a
  color: red
  text-decoration: none

.post-feedback a:hover,
.post-feedback a:active
  color: salmon
</style>

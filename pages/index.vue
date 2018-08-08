<template lang="html">
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link
        :to="/posts/ + 1"
        class="post-preview"
      >
        <article>
          <div class="post-thumbnail post-thumbnail--1" />
          <div class="post-content">
            <h1>Post Title</h1>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link
        :to="/posts/ + 2"
        class="post-preview"
      >
        <article>
          <div class="post-thumbnail post-thumbnail--2" />
          <div class="post-content">
            <h1>Post Title 2</h1>
            <p>Preview Text 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
.intro
  height: 300px
  position: relative
  padding: 30px
  box-sizing: border-box
  background-position: center
  background-size: cover

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

.featured-posts
  display: flex
  padding: 20px
  box-sizing: border-box
  flex-wrap: wrap
  align-items: center
  justify-content: center

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

.post-thumbnail--1
  background-image: url('https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1')

.post-thumbnail--2
  background-image: url('https://previews.123rf.com/images/handmadepictures/handmadepictures1501/handmadepictures150100939/35118263-circuit-board-with-a-lot-of-different-components-close-up-shot-.jpg')

.post-content
  padding: 10px
  text-align: center

a:hover .post-content
a:active .post-content
  background-color: #ccc
</style>

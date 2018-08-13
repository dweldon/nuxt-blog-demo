<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '~/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  components: { AdminPostForm },
  methods: {
    async onSubmit(postData) {
      const url = 'https://nuxt-blog-e5b96.firebaseio.com/posts.json';
      await axios.post(url, {
        ...postData,
        updatedDate: new Date(),
      });
      this.$router.push('/admin');
    },
  },
};
</script>

<style lang="stylus" scoped>
.new-post-form
  width: 90%
  margin: 20px auto

@media (min-width: 768px)
  .new-post-form
    width: 500px
</style>

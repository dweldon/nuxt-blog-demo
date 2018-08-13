<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm
        :post="loadedPost"
        @submit="onSubmit"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '~/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  components: { AdminPostForm },
  async asyncData(context) {
    const { postId } = context.params;
    const url = `https://nuxt-blog-e5b96.firebaseio.com/posts/${postId}.json`;
    const res = await axios.get(url);
    return { loadedPost: { ...res.data, id: context.params.postId } };
  },
  methods: {
    async onSubmit(postData) {
      await this.$store.dispatch('editPost', postData);
      this.$router.push('/admin');
    },
  },
};
</script>

<style lang="stylus" scoped>
.update-form
  width: 90%
  margin: 20px auto

@media (min-width: 768px)
  .update-form
    width: 500px
</style>

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
import AdminPostForm from '~/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  middleware: 'auth',
  components: { AdminPostForm },
  async asyncData({ params, app }) {
    const data = await app.$axios.$get(`/posts/${params.postId}.json`);
    return { loadedPost: { ...data, id: params.postId } };
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

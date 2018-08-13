<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  components: { AdminPostForm },
  methods: {
    async onSubmit(postData) {
      await this.$store.dispatch('addPost', postData);
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

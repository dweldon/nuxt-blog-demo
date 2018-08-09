<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm';

export default {
  components: { AdminPostForm },
  data() {
    return {
      loadedPost: {
        title: 'Is JS really eating the world?',
        author: 'David Weldon',
        content: "Some people say the JS is eating the world, but I don't think so...",
        thumbnailUrl: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1',
      },
    };
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

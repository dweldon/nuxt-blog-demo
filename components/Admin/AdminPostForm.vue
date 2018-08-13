<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="post.author">Author Name</AppControlInput>

    <AppControlInput v-model="post.title">Title</AppControlInput>

    <AppControlInput v-model="post.thumbnailUrl">Thumbnail URL</AppControlInput>

    <AppControlInput
      v-model="post.content"
      control-type="textarea"
    >Content</AppControlInput>

    <AppControlInput
      v-model="post.previewText"
      control-type="textarea"
    >Preview Text</AppControlInput>

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >Cancel</AppButton>
  </form>
</template>

<script>
import AppButton from '~/components/UI/AppButton';
import AppControlInput from '~/components/UI/AppControlInput';

export default {
  components: { AppButton, AppControlInput },
  props: {
    post: {
      type: Object,
      required: false,
      default: () => ({
        title: '',
        author: '',
        content: '',
        previewText: '',
        thumbnailUrl: '',
      }),
    },
  },
  data() {
    return { ...this.post };
  },
  methods: {
    onSave() {
      this.$emit('submit', this.post);
    },
    onCancel() {
      this.$router.push('/admin');
    },
  },
};
</script>

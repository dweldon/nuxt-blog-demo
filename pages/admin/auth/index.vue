<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput
          v-model="email"
          type="email"
        >E-Mail Address</AppControlInput>
        <AppControlInput
          v-model="password"
          type="password"
        >Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
        >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
    };
  },
  methods: {
    async onSubmit() {
      const { firebaseKey } = process.env;
      const baseUrl = 'https://www.googleapis.com/identitytoolkit';
      const url = `${baseUrl}/v3/relyingparty/signupNewUser?key=${firebaseKey}`;
      const result = await this.$axios.$post(url, {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      });
      console.log(result);
    },
  },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

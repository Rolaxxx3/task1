<template>
  <div class="login">
    <login-form />
  </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
}
</script>

<style lang="scss">
.login {
  width: 400px;
  height: 300px;
  padding: 36px;
  border-radius: 16px;
  background-color: $app-primary-color;
}
</style>

<template>
  <form
    class="login-form"
    @submit.prevent="submit()"
  >
    <div>
      <el-input
        v-model="form.email"
        type="email"
        placeholder="Please input email"
        required
        class="app__input"
        autocomplete
      />

      <el-input
        v-model="form.password"
        type="password"
        placeholder="Please input password"
        required
        show-password
        class="app__input"
        autocomplete
      />
    </div>
    <span
      v-if="getMessage"
      class="app__error-msg"
    >
      {{ getMessage | humanize }}
    </span>

    <button
      type="submit"
      class="app__button login-form__button"
    >
      Log in
    </button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginForm',
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  computed: {
    ...mapGetters({
      getMessage: 'getMessage',
    }),
  },
  methods: {
    ...mapActions({
      AUTH_USER: 'AUTH_USER',
    }),
    submit() {
      this.AUTH_USER(this.form).then(
        () => {
          this.$router.push('/profile')
        },
        err => {
          console.error(err)
        },
      )
    },
  },
}
</script>

<style lang="scss" scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }

  .login-form__button {
    width: 80%;
    height: 36px;
  }
</style>

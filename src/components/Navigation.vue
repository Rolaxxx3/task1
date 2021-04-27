<template>
  <header class="navigation">
    <nav class="navigation__wrapper">
      <div>
        <router-link
          v-if="getVerified"
          class="navigation__link"
          to="/profile"
        >
          Profile
        </router-link>

        <router-link
          class="navigation__link"
          to="/news"
        >
          News
        </router-link>
      </div>

      <button
        v-if="!getVerified"
        class="app__button"
        @click="$router.push('/login')"
      >
        Log in
      </button>

      <button
        v-else
        class="app__button app__button--red"
        @click="logOut()"
      >
        Log out
      </button>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Navigation",
  computed: {
    ...mapGetters({
      getVerified: 'verified',
    }),
  },
  methods: {
    ...mapActions({
      CLEAR_AUTH: 'CLEAR_AUTH',
    }),
    logOut() {
      this.CLEAR_AUTH().then(() => {
        if (this.$router.currentRoute.path === '/profile') {
          this.$router.push('/')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .navigation {
    background-color: $app-primary-color;
    padding: 24px 32px;
  }

  .navigation__link {
    @include action-text($app-secondary-color);
  }

  .navigation__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation__link {
    margin: 0 8px;

    :first-child {
      margin-left: 0;
    }
    
    :last-child {
      margin-right: 0;
    }
  }
</style>

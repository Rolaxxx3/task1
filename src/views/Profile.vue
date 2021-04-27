<template>
  <div class="profile">
    <template v-if="getUserStatus === REQUEST_STATUSES.loading">
      <div v-loading="getUserStatus" />
    </template>

    <template v-else-if="getUserStatus === REQUEST_STATUSES.success">
      <div>
        <h2 class="app__title">
          {{ getUser.city }}
        </h2>
        <ul>
          <li
            v-for="(item, index) in getUser.languages"
            :key="index"
            class="app__text"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="profile__socials-wrapper">
        <template v-for="(item, index) in getUser.social">
          <a
            :key="index"
            :href="item.link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              class="profile__social-image"
              :src="require(`../../public/img/svg/${item.label}.svg`)"
              :alt="item"
            >
          </a>
        </template>
      </div>
    </template>

    <template v-else>
      <span class="app__error-msg">
        Something went wrong please try again later
      </span>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { REQUEST_STATUSES } from '@/constants/REQUEST_STATUSES'

export default {
  name: 'Profile',
  data: () => ({
    REQUEST_STATUSES,
  }),
  computed: {
    ...mapGetters({
      getUser: 'user',
      getUserStatus: 'userStatus',
    }),
  },
  async created() {
    await this.LOAD_USER()
  },
  methods: {
    ...mapActions({
      LOAD_USER: 'LOAD_USER',
    }),
  },
}
</script>

<style lang="scss">
.profile {
  width: 1024px;
  background-color: $app-primary-color;
  border-radius: 16px;
  height: 600px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.profile__social-image {
  width: 36px;
  height: 36px;
  filter: invert(1);
}
.profile__socials-wrapper {
  display: flex;
  width: 500px;
  justify-content: space-between;
}
</style>

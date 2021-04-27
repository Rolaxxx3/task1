<template>
  <div class="news">
    <template v-if="getNewsStatus === REQUEST_STATUSES.loading">
      <div v-loading="getNewsStatus" />
    </template>

    <template v-else-if="getNewsStatus === REQUEST_STATUSES.success">
      <div
        v-for="item in getNews"
        :key="item.id"
        class="news__item"
      >
        <h1 class="app__title">
          {{ item.title }}
        </h1>
        <p class="app__text">
          {{ item.text }}
        </p>
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
  name: 'News',
  data: () => ({
    REQUEST_STATUSES,
  }),
  computed: {
    ...mapGetters({
      getNews: 'news',
      getNewsStatus: 'newsStatus',
    }),
  },
  async created() {
    await this.LOAD_NEWS()
  },
  methods: {
    ...mapActions({
      LOAD_NEWS: 'LOAD_NEWS',
    }),
  },
}
</script>

<style lang="scss" scoped>
.news {
  width: 1024px;
  min-height: 500px;
  padding: 48px;
  border-radius: 16px;
  background-color: $app-primary-color;
}

.news__item {
  margin-bottom: 48px;
}
</style>

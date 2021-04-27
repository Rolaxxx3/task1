<template>
  <div class="app">
    <navigation />
    <div class="app__wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation,
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>

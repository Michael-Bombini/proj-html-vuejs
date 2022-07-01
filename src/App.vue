<template>
  <div id="app">
    <TheHeader/>
    <TheHero/>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHero
}
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>

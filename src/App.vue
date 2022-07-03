<template>
  <div id="app">
    <TheHeader/>
    <TheHero/>
    <TheMain/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHero,
    TheMain,
    TheFooter
}
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>

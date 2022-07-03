<template>
  <div id="app">
    <TheHeader/>
    <TheHero/>
    <TheMain/>
    <TheFooter/>
    <BottomBar/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';
import BottomBar from './components/BottomBar.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHero,
    TheMain,
    TheFooter,
    BottomBar
}
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>

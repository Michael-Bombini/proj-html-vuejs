<template>
  <nav class="py-1">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="../../public/images/logo.svg" class="logo" alt="" />
      </div>
      <ul class="d-flex justify-content-between">
        <li v-for="link in navLink" :key="link"><a href="#">{{link}}</a></li>
    
      </ul>
    </div>
  </nav>
</template>

<script>
import { state } from '../store';

export default {
  name: "TheNav",
  data() {
    return {};
  },
  
  computed : {
    navLink(){
        return state.navLink;
    }
  }

};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
nav {
  z-index: 999;
  position: relative;
  
  a{color: $white; text-transform: uppercase; padding: 0 0.8rem; font-weight: 600;}

  .logo {
    width: 128px;
    height: 64px;
  }
}
</style>

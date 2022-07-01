<template>
  <nav class="py-1">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="../../public/images/logo.svg" class="logo" alt="" />
      </div>
      <ul class="d-flex justify-content-between">
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
nav {
  z-index: 999;
  color: red;
  position: relative;


  .logo {
    width: 128px;
    height: 64px;
  }
}
</style>

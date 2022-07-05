<template>
  <div class="bottom-bar">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="left">
          Enjoy the low price. We are tracking any intention of piracy.
        </div>
        <div class="right">
          <i class="fa-solid fa-copyright"></i> 2020 NEXGEN is Proudly Powered
          by <a href="#">Codings</a>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
.bottom-bar {
  padding: $medium-spacer 0;
  background-color: #0d0d11;
  color: rgba($white, 0.7);

  a {
    color: $blue-lagoon;
  }
}
</style>

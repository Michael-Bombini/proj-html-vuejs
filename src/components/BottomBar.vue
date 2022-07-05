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
    <div class="scrollTop" v-if="scrolled >= 300" @click="scrollaSu()"><i class="fa-solid fa-arrow-up"></i></div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",

  data() {
    return {
      scrolled: 0,
    };
  },

  methods : {
    scrollaSu(){
    window.scroll(0,0);
    }
  },

  mounted() {
    window.addEventListener("scroll", () => {
      this.scrolled = window.scrollY;
    });
  },

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

.scrollTop {
  position: fixed;
  right: 10px;
  bottom: 10px;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  font-size: 20px;
  background-color: #121117;
  color: #038483;
  cursor: pointer;
}


}
</style>

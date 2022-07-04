<template>
  <div id="app">
    <TheHeader />
    <TheHero />
    <TheMain />
    <TheFooter />
    <BottomBar />

    <div class="scrollTop" v-if="scrolled >= 300" @click="scrollaSu()"><i class="fa-solid fa-arrow-up"></i></div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import TheMain from "./components/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";
import BottomBar from "./components/BottomBar.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheHero,
    TheMain,
    TheFooter,
    BottomBar,
  },

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

<style lang="scss">
@import "./assets/styles/main.scss";
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
</style>

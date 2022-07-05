<template>
  <nav class="py-1" :class="{ 'sticky-color': stickyColor }">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="../../public/images/logo.svg" class="logo" alt="" />
      </div>
      <ul class="d-none d-md-flex justify-content-between align-items-center">
        <li v-for="link in navLink" :key="link">
          <a href="#">{{ link }}</a>
        </li>
        <li><button class="mx-4 btn-main">Get in touch</button></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { state } from "../store";

export default {
  name: "TheNav",
  data() {
    return {
      stickyColor: false,
    };
  },

  computed: {
    navLink() {
      return state.navLink;
    },
  },

  mounted() {
    window.addEventListener("scroll", () => {
      this.scrolled = window.scrollY;
      if (this.scrolled >= 100) this.stickyColor = true;
      else this.stickyColor = false;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
nav {
  z-index: 999;
  position: relative;

  a {
    color: $white;
    text-transform: uppercase;
    padding: 0 0.8rem;
    font-weight: 600;

    &:hover {
      color: $blue-lagoon;
    }
  }

  .logo {
    width: 128px;
    height: 64px;
  }
}
.sticky-color {
  position: sticky;
  top: 0px;
  background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
}
</style>

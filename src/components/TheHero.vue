<template>
  <section class="hero">
    <div class="overlay"></div>
    <TheNav />

    <div class="absolute">
      <div class="container text-center">
        <h1 class="text-light">Lead ~ <strong>Customer</strong></h1>
        <p>
          Successful strategies require data analysis, creativity and customer
          focus,taking advantage of the latest technologies to offer excellent
          services.
        </p>
        <button class="mx-2 btn-main">Get in touch</button>
        <button class="mx-2 btn-main outline">Read More</button>
      </div>
    </div>
  </section>
</template>

<script>
import TheNav from "./TheNav.vue";
export default {
  name: "TheHero",
  data() {
    return {};
  },
  components: { TheNav },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";

.hero {
  height: 90vh;
  background-image: url(../../public/images/hero-image.png);
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .absolute {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 150px;

    h1 {
      font-size: clamp(3rem,7vw,5rem);
      font-weight: 900;
      margin-bottom: $medium-spacer;
    }

    p {
      max-width: 64ch;
      text-align: center;
      margin: 0 auto;
      color: $edward;
      font-weight: 500;
      margin-bottom: $medium-spacer;
    }
  }
  strong {
    background: rgba($blue-lagoon, 0.2);
    padding: 0.4rem 0.7rem;
  }

  button {
    transition: transform 0.5s ease, background 0.5s ease;
    &:hover {
      transform: translateY(-10px);
      transition: transform 0.5s ease, background 0.3s ease;
      background: $blue-lagoon;
    }
  }
}
</style>

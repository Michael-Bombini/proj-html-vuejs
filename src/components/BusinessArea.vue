<template>
  <section>
    <div class="container">
      <div class="about">OUR BUSINESS AREAS</div>
      <h2>Excellence in <span>Services</span></h2>
      <div class="d-flex align-items-baseline justify-content-between">
      <p class="description">
        We are leaders in providing consultancy services with a set of
        cutting-edge technologies and a team of experienced and renowned
        professionals. These are some options that you can hire.
      </p>
      <button class="btn-main outline py-2 my-2">SEE ALL</button>
      </div>
      <div class="row g-4">
        <div
          class="col-4"
          v-for="(card, i) in businessCards"
          :key="card.title + i"
        >
          <div class="card-section">
            <i :class="card.icon"></i>
            <h3>{{ card.title }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class="btn-main outline">READ MORE</button>
          </div>
        </div>
      </div>
    </div>

    <div class="square"></div>
  </section>
</template>

<script>
export default {
  name: "BusinessArea",
  props: {
    businessCards: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
section {
  position: relative;
  padding: $section-spacer 0;
  background-color: $wood-smoke;

  .square {
    position: absolute;
    width: 200px;
    height: 100px;
    background-image: url("../../public/images/patterndot.svg");
    background-size: cover;
    left: 50%;
    top: -50px;
    transform: translate(-50%);
  }

  .about {
    font-size: $text-small;
    font-weight: 700;
    color: lighten($blue-lagoon, 5%);
    margin-bottom: $large-spacer;
  }

  h2 {
    font-weight: 900;
    font-size: $text-big;
    color: #fff;
    margin-bottom: $medium-spacer;

    span {
      background-color: rgba($blue-lagoon, 0.3);
      padding: 0.5rem;
      border-radius: 4px;
    }
  }

  p {
    color: lighten($slate-gray, 30%);
    font-size: $text-small;
    max-width: 80ch;
  }

  .description {
    margin-bottom: $large-spacer;
  }

  .card-section {
    background-color: #19191f;
    i {
      margin-bottom: $medium-spacer;
      color: $blue-lagoon;
      font-size: 40px;
    }
    h3 {
      font-weight: 700;
      color: $white;
      margin-bottom: $small-spacer;
    }
    p {
      margin-bottom: $medium-spacer;
    }
    button {
      margin-bottom: $small-spacer;
    }
  }
}
</style>

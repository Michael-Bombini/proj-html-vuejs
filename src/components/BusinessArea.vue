<template>
  <section>
    <div class="container">
      <div class="about">OUR BUSINESS AREAS</div>
      <h2>Excellence in <span>Services</span></h2>
      <p class="description">
        We are leaders in providing consultancy services with a set of
        cutting-edge technologies and a team of experienced and renowned
        professionals. These are some options that you can hire.
      </p>

      <div class="row">
        <div class="col-4">
          <div class="card-section">

          </div>
        </div>
      </div>
    </div>

    <div class="square"></div>
  </section>
</template>

<script>
export default {};
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
    background-color: #1e2223;
  }
}
</style>

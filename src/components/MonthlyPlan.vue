<template>
  <section>
    <div class="container">
      <div class="text-center">
        <div class="about">MONTHLY PLAN</div>
        <h2><span>Pricing</span> Table</h2>
        <p class="description text-center">
          We can help you deliver and execute your future, wherever you compete,
          using the latest technologies, from strategy development to
          implementation.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
section {
  padding: $section-spacer 0;
  background-color: $gray-nurse;

  .about {
    font-size: $text-small;
    font-weight: 700;
    color: lighten($blue-lagoon, 5%);
    margin-bottom: $medium-spacer;
  }

  h2 {
    font-weight: 900;
    font-size: $text-big;
    margin-bottom: $medium-spacer;
    color : $dark-muted;
    span {
      color: $blue-lagoon;
      background-color: darken($primary, 10%);
      padding: 0.5rem;
      border-radius: 4px;
    }
  }

  p {
    font-size: $text-small;
    max-width: 80ch;
    margin: 0 auto;
  }

  .description {
    margin-bottom: $large-spacer;
  }
}
</style>

<template>
  <section>
    <div class="container">
      <!-- Heading price upper area -->
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

    <!-- Pricing Tables -->

    <div class="container">
      <div class="row g-3">
        <div class="col-4" v-for="feature in whichFeature" :key="feature.price">
        <h1>{{feature.title}}</h1>
          <ul class="price-info" v-for="(n, i) in 5" :key="n">
            <li>
              {{ names[i] }}
              {{ feature.hasFeature[i] }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MonthlyPlan",
  props: {
    whichFeature: Array,
  },
  data() {
    return {
       names: ["Standard Accounting", "Platform Access", "Business Orientation", "Dedicated Consultant", "Personal Assistance"],
    };
  },
};
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
    margin-bottom: $small-spacer;
  }

  h2 {
    font-weight: 900;
    font-size: $text-big;
    margin-bottom: $medium-spacer;
    color: $dark-muted;
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

  .price-table {
    border-radius: 8px;
    background-color: #fff;
    padding: 0.5rem 2rem 1rem;
  }
}
</style>

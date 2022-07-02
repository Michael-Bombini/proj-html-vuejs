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
      <div class="row g-4">
        <div class="col-4" v-for="feature in whichFeature" :key="feature.price">
          <div class="price-info">
            <div class="text-center py-4">
              <i :class="feature.icon" class="fa-3x"></i>
              <h3>{{ feature.title }}</h3>
              <div class="price"><span class="dollar">$ </span><strong>{{feature.price}}</strong><span> / mo</span></div>
            </div>
            <ul>
              <li  v-for="(n, i) in names.length" :key="n">
                <span class="name">{{ names[i] }}</span>
                <span class="feature">{{ feature.hasFeature[i] }}</span>
              </li>
            </ul>
          </div>
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
      names: [
        "Standard Accounting",
        "Platform Access",
        "Business Orientation",
        "Dedicated Consultant",
        "Personal Assistance",
      ],
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

  .price-info {
    border-radius: 10px;
    background-color: #fff;
    padding: 1.5rem 2rem 2rem;

  i {color: $blue-lagoon; margin-bottom: $small-spacer;}

  h3{
    font-size: $text-medium;
    font-weight: 700;
    color: $dark-muted;
    margin-bottom: $medium-spacer;
  }

  li {
    margin-bottom: $small-spacer+0.4rem;
    display: flex;
  }
  .dollar {font-size: $text-medium;}
  .price {font-size: $text-big; color: $blue-lagoon;}
  span {
  color: $blue-lagoon; font-size: $text-small; font-weight: 500;}

  .name{
    color: darken($edward,10%);
  }
  

  }
}
</style>

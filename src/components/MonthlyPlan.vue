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
          <div class="price-info" :class="{'position-relative' : feature.isPopular===true}">
            <div class="text-center py-4">
              <i :class="feature.icon" class="fa-3x"></i>
              <h3>{{ feature.title }}</h3>
              <div v-if="feature.isPopular===true" class="popular">Most <br> Popular</div>
              <div class="price"><span class="dollar">$ </span><strong>{{feature.price}}</strong><span> / mo</span></div>
            </div>
            <ul class="px-4">
              <li  v-for="(n, i) in names.length" :key="n">
                <span class="name">{{ names[i] }}</span>
                <span class="feature" v-if="feature.hasFeature[i]===true"><i class="fa-solid fa-check"></i></span> 
                <span class="feature" v-else><i class="fa-solid fa-xmark"></i></span> 
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
      background-color: $primary;
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
    margin-bottom: 2px;
    display: flex;
    justify-content: space-between;
  }
  .dollar {font-size: $text-medium;}
  .price {font-size: $text-big; color: $blue-lagoon;}
  span {
  color: $blue-lagoon; font-size: $text-small; font-weight: 500;}

  .name{
    color: darken($edward,10%);
  }
  
  .feature {
    font-size: 20px;
    font-weight: 700;
    padding-right: 1.5rem;
  }


  .popular{
    position: absolute;
    top: 20px;
    left: 0;
    color: $white;
    background-color: lighten($blue-lagoon,5%);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    width: 80px;
    height: 50px;
    text-align: center;
    line-height: 20px;
    font-size: $text-small;
    padding: 0.2rem 0;
  }


  }
}
  .price-info.position-relative {padding-bottom: 5rem;}
  .price-info:not(.position-relative){
    margin-top: 1.5rem;
  }

</style>

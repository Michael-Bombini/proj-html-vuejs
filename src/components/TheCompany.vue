<template>
  <section>
    <div class="row m-auto">
      <div class="col-sm-12 col-md-6 d-flex justify-content-end">
        <div class="left-info">
          <div class="about">ABOUT THE NETWORK</div>
          <h2><strong>The</strong> <span>Company</span></h2>
          <p class="description">
            For 12 years we have been providing audit and warranty, financial
            advice,risk advice,taxes and related services to select clients.
          </p>
          <div class="row g-4">
            <div
              class="col-12 col-lg-6"
              v-for="icon in icons"
              :key="icon.title"
            >
              <div class="col-icon">
                <div class="col-head">
                  <i :class="icon.icon"></i>
                  <h3>{{ icon.title }}</h3>
                </div>
                <p>{{ description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 p-0">
        <img src="../../public/images/about-3.jpg" alt="" />
      </div>
    </div>

    <div class="square"></div>
  </section>
</template>

<script>
export default {
  name: "TheCompany",
  data() {
    return {
      icons: [
        {
          icon: "fa-solid fa-medal",
          title: "Tradition",
        },
        {
          icon: "fa-solid fa-lock",
          title: "Security",
        },
        {
          icon: "fa-solid fa-pen-to-square",
          title: "Certificate",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          title: "Expertise",
        },
      ],

      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
section {
  position: relative;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .left-info {
    padding: $section-spacer + 5rem $section-spacer;
    padding-left: $section-spacer + 5rem;
  }

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

    strong {
      color: $blue-lagoon;
      background-color: $primary;
      padding: 0.5rem;
    }

    span {
      color: $dark-muted;
    }
  }

  p {
    color: $scarpa-flow;
    font-size: $text-small;
  }

  .description {
    margin-bottom: $large-spacer;
  }

  i {
    color: $blue-lagoon;
    font-size: $text-large;
    margin: 0 0.3rem;
  }

  h3 {
    font-size: $text-medium;
    color: $dark-muted;
    display: inline-block;
    font-weight: 700;
  }

  .col-head {
    margin-bottom: $small-spacer;
  }
  .col-icon {
    margin-bottom: $medium-spacer;
  }
}
</style>

<template>
  <section>
    <div class="container">
      <div class="about">OUR EDITORIAL CONTENT</div>
      <h2>Latest <span> News</span></h2>
      <div class="d-flex align-items-baseline justify-content-between">
        <p class="description">
          Every week we publish content about what is best in the business
          world.
        </p>
        <button class="btn-main" @click="showAll()">{{ textSwitch }}</button>
      </div>
      <!-- Card Area -->
      <div class="row g-4">
        <div
          class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
          v-for="(post, i) in editorialPost"
          :key="post + i"
          :class="{ 'col-sm-12 col-lg-6 col-xl-6': post.hide !== undefined }"
        >
          <div class="post" v-if="!post.hide">
            <img :src="post.image" class="post-image" alt="" />
            <div class="overlay"></div>
            <div class="post-info">
              <div class="position-relative w-100 h-100">
                <div class="upper-info d-flex justify-content-between">
                  <div class="left">
                    <i class="fa-solid fa-user px-2"></i>
                    <span> {{ post.author }}</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-clock px-2"></i>
                    <span>{{ post.daysAgo }} Days Ago</span>
                  </div>
                </div>
                <div class="bottom-info">
                  <h3>{{ post.title }}</h3>
                  <p class="info-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EditorialContent",
  data() {
    return {
      textSwitch: "See All",
      switched: false,
    };
  },
  props: {
    editorialPost: Array,
  },
  methods: {
    showAll() {
      if (this.textSwitch === "See All") this.textSwitch = "See less";
      else this.textSwitch = "See All";

      this.editorialPost.forEach((post) => {
        if (post.hide !== undefined || post.hide === true)
          post.hide = !post.hide;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
section {
  padding: $section-spacer 0;
  background-color: $white;

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
  }

  .description {
    margin-bottom: $large-spacer;
  }
}

.upper-info {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.bottom-info {
  position: absolute;
  bottom: 5%;
  text-align: center;

  p {
    opacity: 1;
    padding: 1.5rem 0;
    max-width: 30ch;
    margin: 0 auto;
    opacity: 0;
    transition: opacity 0.8s ease;
  }
}

.post {
  position: relative;
  border-radius: 20px;

  img.post-image {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    transition: backdrop-filter 0.8s ease;
  }

  .post-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    padding: 2.2rem;
    color: #fff;

    h3 {
      font-weight: 700;
      text-align: center;
    }
  }

  &:hover {
    .overlay {
      backdrop-filter: blur(10px) brightness(60%);
      transition: backdrop-filter 0.5s ease;
    }

    .upper-info,
    .bottom-info p {
      opacity: 1;
      transition: opacity 0.8s ease;
    }
  }
}
</style>

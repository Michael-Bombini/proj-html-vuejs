<template>
  <section>
    <div class="container">
      <!-- Heading price upper area -->
      <div class="row align-items-center">
        <div class="col-6">
            <div class="px-5 mx-5">
          <div class="about">NEWSLETTER</div>
          <h2><span>Know</span> First</h2>
          <p class="description">
            Follow closely and receive content about our company and the news of
            the current market.
          </p>
          </div>
        </div>
        <div class="col-6">
            <form>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
            <label for="name">Name</label>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
            <label for="email">Email</label>
          </div>
          <button class="btn-main px-4 py-3">SUBSCRIBE</button>
          </form>
        </div>
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
  background-color: $white;
  background-image: url("../../public/images/bg-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
    color: $white;
    span {
      background-color: $primary;
      padding: 0.5rem;
      border-radius: 4px;
    }
  }

  p {
    font-size: $text-small;
    max-width: 42ch;
    color: rgba($white, 0.7);
  }

  .description {
    margin-bottom: $large-spacer;
  }


input {
    background-color: rgba($white,0.5);
    width: 450px;
    margin-bottom: $small-spacer+0.5rem;
    border-radius: 4px;
    &active {
        background-color: rgba($white,0.7);
    }
}

}
</style>

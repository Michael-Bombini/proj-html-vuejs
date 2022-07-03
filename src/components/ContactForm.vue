<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="about">SEND A MESSAGE</div>
          <h2>Get in <span> Touch</span></h2>
          <p class="description">
            We will respond to your message as soon as possible.
          </p>
          <div class="row g-4">

              <div class="col-6">
                <input type="text" placeholder="Name">
              </div>
          <div class="col-6"><input type="email" placeholder="Email"></div>
          <div class="col-6"><input type="text" placeholder="Phone"></div>
          <div class="col-6"><input type="text" placeholder="More Info"></div>
          <div class="col-12">
            <textarea placeholder="Message" rows="4" class="mb-4"></textarea>
          </div>
          </div>
          <button class="btn-main">SEND</button>
        </div>
        <div class="col-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          ipsum?
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


input , textarea {
    background-color: rgba($edward,0.25);
    border: none;
    padding: 1rem ;
    width: 100%;
    resize: none;
}

}
</style>

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
          <div class="row g-3">
            <div class="col-6">
              <input type="text" placeholder="Name" />
            </div>
            <div class="col-6"><input type="email" placeholder="Email" /></div>
            <div class="col-6"><input type="text" placeholder="Phone" /></div>
            <div class="col-6">
              <input type="text" placeholder="More Info" />
            </div>
            <div class="col-12">
              <textarea placeholder="Message" rows="4" class="mb-4"></textarea>
            </div>
          </div>
          <button class="btn-main">SEND</button>
        </div>
        <div class="col-6">
          <div class="contacts">
            <h3>Example Inc.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="">Praesent diam lacus,dapibus sed imperdiet consectetur.</p>
            <ul class="my-5">
              <li v-for="(contact,i) in contacts" :key="contact+i">
              <i :class="contact.icon" class="mx-3"></i><span>{{contact.info}}</span>
              </li>
            </ul>
            <button class="btn-main outline">VIEW MAP</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name : "ContactForm",
  props : {
    contacts : Array,
  }
};
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

  input,
  textarea {
    background-color: rgba($edward, 0.25);
    border: none;
    padding: 1rem;
    width: 100%;
    resize: none;
  }

  .contacts {
    padding: 0 $large-spacer;

    h3 {
      font-size: $text-medium;
      color: $dark-muted;
      font-weight: 700;
      margin-bottom: $medium-spacer;
    }
    p {
      max-width: 35ch;
      margin-bottom: $medium-spacer;
    }

  

    li {
      margin-bottom: $medium-spacer;
    }

    i,span {
      font-size: $text-small+6px;
      color: $blue-lagoon;

    }

    i {
      background-color: $primary;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      text-align: center;
      line-height: 48px;
    }


    button {
      color: $blue-lagoon;
    }


  }
}
</style>

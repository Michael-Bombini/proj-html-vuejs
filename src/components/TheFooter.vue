<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img class="logo" src="../../public/images/logo.svg" alt="" />
          <p>A functional HTML Template for Corporate & Business.</p>
          <ul class="mb-4">
            <li
              class="mb-3"
              v-for="(contact, i) in getContacts"
              :key="contact + i"
            >
              <i :class="contact.icon" class="mx-2"></i
              ><span class="mx-2">{{ contact.info }}</span>
            </li>
          </ul>
          <button class="btn-main outline mt-2">GET IN TOUCH</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { state } from "../store";

export default {
  name: "TheFooter",
  computed: {
    getContacts() {
      return state.contacts;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
footer {
  padding: $section-spacer 0;
  background-color: $wood-smoke;
  color: rgba($white, 0.7);

  .logo {
    width: 168px;
    margin-bottom: $medium-spacer;
  }

  p {
    max-width: 23ch;
    margin-bottom: $medium-spacer;
  }
}
</style>

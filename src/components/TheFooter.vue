<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-3">
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
        <div class="col-3" v-for="(content,i) in getFooterContent" :key="content+i">
            <div class="footer-card">
                <h2>{{content.title}}</h2>
                <ul>
                    <li class="mb-2" v-for="link in content.links" :key="link"><i class="fa-solid fa-angle-right"></i><span class="mx-3">{{link}}</span></li>
                </ul>
            </div>
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
    getFooterContent(){
        return state.footerContent;
    }
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


.footer-card {
    height: 100%;
    width:  100%;
    padding: $large-spacer;
    background: $shark;
    border-radius: 14px;

h2 {
    font-size: $text-medium;
    color: $white;
    font-weight: 700;
    margin-bottom: $medium-spacer;
}



}

li {
  &:hover {
    color: $blue-lagoon;
    cursor: pointer;
  }
}

}
</style>

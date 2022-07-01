<template>
  <header class="py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <i class="fa-solid fa-clock px-1"></i>
        Open Hours: Mon - Sat - 9:00 - 18:00
      </div>
      <ul class="d-flex justify-content-between">
        <li v-for="(icon,i) in headerInfo" :key="i ">
          <a href="#"><i :class="icon.iconClass"></i>{{icon.linkText}}</a>
        </li>

   
      
    
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      headerInfo: [
        {
          iconClass : "fa-solid fa-phone",
          linkText : " +1 (305) 1234-5678",
        },
         {
          iconClass : "fa-solid fa-envelope px-2",
          linkText : "hello@example.com",
        },
         {
          iconClass : "fa-brands fa-facebook-f",
          linkText : "",
        },
         {
          iconClass : "fa-brands fa-twitter",
          linkText : "",
        },
        {
          iconClass : "fa-brands fa-linkedin-in",
          linkText : "",
        },



        ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";

/* HEADER */

header {
  background-color: $dark-muted;
  font-size: $text-small;
}
div,
ul {
  color: $edward;
}
a {
  color: $edward;
  display: block;
  padding: 0 1rem;
}
</style>

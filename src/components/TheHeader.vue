<template>
  <header class="py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <i class="fa-solid fa-clock px-1"></i>
        Open Hours: Mon - Sat - 9:00 - 18:00
      </div>
      <ul class="d-flex justify-content-between">
        <li>
          <a href="#"><i class="fa-solid fa-phone"></i> +1 (305) 1234-5678</a>
        </li>
         <li>
          <a href="#"><i class="fa-solid fa-envelope px-2"></i>hello@example.com</a>
        </li>
         <li>
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        </li>
         <li>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </li>
         <li>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </li>
  
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name : "TheHeader",
  
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
ul{
  color: $gray-nurse;
}
a {color: $gray-nurse; display: block; padding: 0 1rem;}



</style>

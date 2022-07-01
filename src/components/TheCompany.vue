<template>
  <section>

        <div class="row m-auto">
            <div class="col-6">
                <div class="left-info text-center">
                    <p>ABOUT THE NETWORK</p>
                </div>
            </div>
            <div class="col-6 p-0">
                <img src="../../public/images/about-3.jpg" alt="">
            </div>
        </div>

   
 


    <div class="square"></div>
  
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
section {
  position: relative;

.square {
  position: absolute;
  width: 90px;
  height: 50px;
  background: #000;
  left: 50%;
  top: -25px;
  transform: translate(-50%);
}

img{max-width: 100%; max-height: 100%;}


.left-info {
    padding: $section-spacer 0;
}


p {
    font-size: $text-small;
    font-weight: 700;
    color: $blue-lagoon;
}

}
</style>

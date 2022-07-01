<template>
    <section class="hero">
    <div class="overlay"></div>
    <div class="display-1 text-light fw-bolder ">LEAD CUSTOMER</div>

    </section>
</template>

<script>
    export default {
        
    }


</script>




<style lang="scss" scoped>
.hero{
    height: 80vh;
    background-image: url(../../public/images/hero-image.png);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    position: relative;
    

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
}
}

</style>
<template>
    <section>
      <div class="container">
        <div class="row">
            <div class="col-4" v-for="(card,i) in sectionTreCard" :key="card + i">
                <div class="card-section">
                    <i :class="card.icon"></i>
                    <h2>{{card.title}}</h2>
                    <p>{{card.description}}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "FirstCardSection",
        props : {
            sectionTreCard : Array,
            
        }
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
section {
    padding: $section-spacer 0;
    background-color: $gray-nurse;

 .card-section {
    background: $white;
    max-width: 400px;
    
    i {
        background-color: #DAECED;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        color: $blue-lagoon;
    }

    h2 {
        color: $dark-muted;
        font-weight: 700;
    }

    p {
        color: $slate-gray;
    }
    
    }   
}
</style>
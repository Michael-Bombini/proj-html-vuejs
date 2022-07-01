<template>
    <main>
       <FirstCardSection/>
       <TheCompany/>
       <BusinessArea/>
       <MonthlyPlan/>
       <EditorialContent/>
       <NewsLetter/>
       <ContactForm/>
    </main>
</template>

<script>
import FirstCardSection from './FirstCardSection.vue';
import TheCompany from './TheCompany.vue';
import BusinessArea from './BusinessArea.vue';
import MonthlyPlan from './MonthlyPlan.vue';
import EditorialContent from './EditorialContent.vue';
import NewsLetter from './NewsLetter.vue';
import ContactForm from './ContactForm.vue';
    export default {
    components: { FirstCardSection, TheCompany, BusinessArea, MonthlyPlan, EditorialContent, NewsLetter, ContactForm }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
</style>
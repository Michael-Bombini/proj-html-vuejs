<template>
  <main>
    <FirstCardSection :sectionTreCard="sectionTreCard" />
    <TheCompany />
    <BusinessArea />
    <MonthlyPlan />
    <EditorialContent />
    <NewsLetter />
    <ContactForm />
  </main>
</template>

<script>
import FirstCardSection from "./FirstCardSection.vue";
import TheCompany from "./TheCompany.vue";
import BusinessArea from "./BusinessArea.vue";
import MonthlyPlan from "./MonthlyPlan.vue";
import EditorialContent from "./EditorialContent.vue";
import NewsLetter from "./NewsLetter.vue";
import ContactForm from "./ContactForm.vue";
export default {
  components: {
    FirstCardSection,
    TheCompany,
    BusinessArea,
    MonthlyPlan,
    EditorialContent,
    NewsLetter,
    ContactForm,
  },
  data() {
    return {
      sectionTreCard: [
        {
          icon: "fa-solid fa-user-group",
          title: "Human Capital",
          description:
            "Humanizing business: Harness the power of technology to improve the way people work.",
        },
        {
          icon: "fa-solid fa-chart-pie",
          title: "Core Business",
          description:
            "It takes innovative approaches to transform, modernize, and run existing platforms.",
        },
           {
          icon: "fa-solid fa-gauge-high",
          title: "Performance",
          description:
            "Achieving maximum impact and value from investments in finance and supply chain.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/general";
</style>

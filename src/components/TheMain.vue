<template>
  <main>
    <FirstCardSection :sectionTreCard="sectionTreCard" />
    <TheCompany />
    <BusinessArea :businessCards="businessCards" />
    <MonthlyPlan :whichFeature="whichFeature" />
    <EditorialContent :editorialPost="editorialPost" />
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
  name: "TheMain",
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

      businessCards: [
        {
          icon: "fa-solid fa-sitemap",
          title: "Audit & Assurance",
        },
        {
          icon: "fa-solid fa-briefcase",
          title: "Financial Advisory",
        },
        {
          icon: "fa-solid fa-chart-simple",
          title: "Analytics an M&A",
        },
        {
          icon: "fa-solid fa-plane-departure",
          title: "Middle Marketing",
        },
        {
          icon: "fa-solid fa-globe",
          title: "Legal Consulting",
        },
        {
          icon: "fa-solid fa-box-open",
          title: "Regulatory Risk",
        },
      ],

      whichFeature: [
        {
          icon: "fa-solid fa-rocket",
          title: "Standard",
          price: 490,
          hasFeature: [true, true, false, false, false],
        },
        {
          icon: "fa-solid fa-briefcase",
          title: "Professional",
          price: 890,
          hasFeature: [true, true, true, false, false],
          isPopular: true,
        },
        {
          icon: "fa-solid fa-gem",
          title: "Ultimate",
          price: 1390,
          hasFeature: [true, true, true, true, true],
        },
      ],

      editorialPost: [
        {
          author: "Andrea Miller",
          daysAgo: "2",
          title: "Increasing creativity is possible for everyone",
          image: require("../../public/images/news-1.jpg"),
        },
        {
          author: "Mario Rossi",
          daysAgo: "5",
          title: "Because market research is part of the business plan",
          image: require("../../public/images/news-2.jpg"),
        },
        {
          author: "Maria Verdi",
          daysAgo: "11",
          title: "Working from home is now a trend",
          image: require("../../public/images/news-3.jpg"),
        },
        {
          author: "Tizio Caio",
          daysAgo: "17",
          title: "Working from office is not a trend",
          image: require("../../public/images/news-4.jpg"),
          hide: true,
        },
        {
          author: "Pippo Bruno",
          daysAgo: "23",
          title: "veniam, quis nostrud exercitation ullamco laboris",
          image: require("../../public/images/news-5.jpg"),
          hide: true,
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

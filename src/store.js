import Vue from "vue";

export const state = Vue.observable({
  navLink: ["Home", "About", "Services", "Pricing", "Blog"],
  contacts: [
    {
      icon: "fa-solid fa-phone",
      info: "+1 (305) 1234-5678",
    },
    {
      icon: "fa-solid fa-envelope",
      info: "hello@example.com",
    },
    {
      icon: "fa-solid fa-location-dot",
      info: "Main Avenue, 987",
    },
  ],

  footerContent: [
    {
      title: "About",
      links: [
        "The Company",
        "Institutional",
        "Social & Events",
        "Innovation",
        "Environment",
        "Technology",
      ],
    },
    {
      title: "Services",
      links: [
        "Audit & Assurance",
        "Financial Advisory",
        "Analytics and M&A",
        "Middle Marketing",
        "Legal Consulting",
        "Regulatory Risk",
      ],
    },
    {
      title: "Support",
      links: [
        "Responsability",
        "Term of Use",
        "About Cookies",
        "Privacy Policy",
        "Accessibility",
        "Information",
      ],
    },
  ],
});

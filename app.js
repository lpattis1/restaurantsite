// Variables:

// Links
const links = document.querySelectorAll(".main-link");
const jumpLink = document.querySelector(".header__jump-btn");

// Cart
const cart = document.querySelector(".cart");
let count = document.querySelector(".count");

// Page Sections
const sections = document.querySelectorAll(".page-section");
const topBar = document.querySelector(".top-bar");
const nav = document.querySelector(".navbar");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

// ----------------------------------

// Intersection Observer

function scrollAnimations() {
  const observer = new IntersectionObserver(function (sections, observer) {
    sections.forEach((section) => {
      if (!section.isIntersecting) {
        return;
      }

      console.log(section);

      for (let i = 0; i < links.length; i++) {
        let linkName = links[i].classList[2];
        console.log(linkName);
        console.log(section.target.id);
        if (linkName === section.target.id) {
          links[i].classList.add("link-section");
        } else {
          links[i].classList.remove("link-section");
        }

        if (section.target.id === "home") {
          topBar.classList.remove("fixed-nav");
          nav.classList.remove("fixed-nav");
        } else {
          topBar.classList.add("fixed-nav");
          nav.classList.add("fixed-nav");
        }

        if (section.target.id === "about") {
          const aboutBanner = document.querySelector(".about__banner");
          const aboutTxt = document.querySelector(".about-us__text");
          const aboutImage = document.querySelector(".about-us__img > img");
          aboutBanner.classList.add("display");
          setTimeout(() => {
            aboutTxt.classList.add("display");
            aboutImage.classList.add("display");
          }, 1000);
        } else if (section.target.id === "menu") {
          const menuBanner = document.querySelector(".menu__banner");
          const menuCategories = document.querySelector(".menu-categories");
          const menuItems = document.querySelector(".menu-items");
          menuBanner.classList.add("display");
          setTimeout(() => {
            menuCategories.classList.add("display");
            menuItems.classList.add("display");
          }, 1000);
        } else if (section.target.id === "contact") {
          const contactBanner = document.querySelector(".contact__banner");
          contactBanner.classList.add("display");
        }
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
}

scrollAnimations();

// --------------------------------------

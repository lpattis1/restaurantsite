// Variables:

// Links
const links = document.querySelectorAll(".main-link");
const jumpLink = document.querySelector(".header__jump-btn");

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
  const observer = new IntersectionObserver(function (sections, options) {
    sections.forEach((section) => {
      if (!section.isIntersecting) {
        return;
      }

      for (let i = 0; i < links.length; i++) {
        let linkName = links[i].classList[2];

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

  //   What to observe
  sections.forEach((section) => {
    observer.observe(section);
  });
}

scrollAnimations();

// --------------------------------------

// Hover for sub categories function

function hoverToDisplaySubCategories() {
  // Variables:

  // Item Categories
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("click", function (e) {
      console.log(category.nextElementSibling);
      category.nextElementSibling.classList.add("hovered-show");
    });

    category.nextElementSibling.addEventListener("mouseleave", function (e) {
      console.log(category.nextElementSibling);
      category.nextElementSibling.classList.remove("hovered-show");
    });
  });
}

// Sort menu items - main and sub menus

function sortMenuItemsGeneral() {
  // Variables:

  // Item Categories
  const categories = document.querySelectorAll(".category");
  const menuItems = document.querySelectorAll(".item");
  const menuTitles = document.querySelectorAll(".food-title");
  const sections = document.querySelectorAll(".section");
  const allCategory = document.querySelector(".all-btn");

  categories.forEach((category) => {
    category.addEventListener("click", function (e) {
      let categoryType = category.dataset.category;

      for (let i = 0; i < menuItems.length; i++) {
        if (!menuItems[i].classList.contains(categoryType)) {
          menuItems[i].classList.add("hide-item");
          menuItems[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        } else {
          menuItems[i].classList.remove("hide-item");
          menuItems[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        }
      }

      for (let i = 0; i < menuTitles.length; i++) {
        if (menuTitles[i].textContent.toLowerCase() !== categoryType) {
          menuTitles[i].classList.add("hide-item");
        } else {
          menuTitles[i].classList.remove("hide-item");
        }
      }

      for (let i = 0; i < sections.length; i++) {
        if (sections[i].firstElementChild.classList.contains("hide-item")) {
          sections[i].classList.add("hide-item");
          sections[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        } else {
          sections[i].classList.remove("hide-item");
          sections[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        }
      }
    });

    allCategory.addEventListener("click", function (e) {
      for (let i = 0; i < menuItems.length; i++) {
        if (allCategory) {
          menuItems[i].classList.remove("hide-item");
          menuItems[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
          sections.forEach((section) => {
            section.classList.remove("hide-item");
          });

          menuTitles.forEach((title) => {
            title.classList.remove("hide-item");
          });
        }
      }
    });
  });
}

function sortMenuItemsSpecific() {
  // Variables:

  // Item Categories
  const categories = document.querySelectorAll(".category");
  const menuItems = document.querySelectorAll(".item");
  const hoveredItems = document.querySelectorAll(".hovered-item");

  hoveredItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      let specificCategory = item.dataset.hovered;

      for (let i = 0; i < menuItems.length; i++) {
        if (!menuItems[i].classList.contains(specificCategory)) {
          menuItems[i].classList.add("hide-item");
          menuItems[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        } else {
          menuItems[i].classList.remove("hide-item");
          menuItems[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        }
      }
    });
  });
}

hoverToDisplaySubCategories();
sortMenuItemsGeneral();
sortMenuItemsSpecific();

// Add items function

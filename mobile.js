hamburgerMenu.addEventListener("click", function (e) {
  mobileNavbar.classList.toggle("show-nav");

  if (mobileNavbar.classList.contains("show-nav")) {
    hamburgerMenu.children[0].classList.remove("fa-bars");
    console.log(hamburgerMenu.children[0]);
    hamburgerMenu.children[0].classList.add("fa-times");
  } else {
    hamburgerMenu.children[0].classList.remove("fa-times");
    hamburgerMenu.children[0].classList.add("fa-bars");
  }
});

console.log(hamburgerMenu);

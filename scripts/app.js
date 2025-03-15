const hamburgerMenu = document.querySelector("#hamburger-menu");
const mobileNav = document.querySelector("#mobile-nav");

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("active") || mobileNav.classList.contains("active")) {
    hamburgerMenu.classList.remove("active");
    mobileNav.classList.remove("active");
  } else {
    hamburgerMenu.classList.add("active");
    mobileNav.classList.add("active");
  }
});

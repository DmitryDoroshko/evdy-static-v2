const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.remove("active");
  } else {
    hamburgerMenu.classList.add("active");
  }
});

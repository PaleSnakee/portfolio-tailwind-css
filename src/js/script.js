// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  });
});

// Tutup menu jika klik di luar hamburger & nav menu
document.addEventListener("click", function (e) {
  const isClickInside =
    hamburger.contains(e.target) || navMenu.contains(e.target);

  if (!isClickInside) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

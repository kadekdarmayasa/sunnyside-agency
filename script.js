const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLink = document.querySelector('.nav-link');

hamburgerMenu.addEventListener('click', function () {
  navLink.classList.toggle('show');
});

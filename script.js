// ============================================================
// KALESAN SUKUN ALU — SHARED SITE SCRIPT
// Navbar scroll state + mobile menu toggle
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  var mobileToggle = document.querySelector('.navbar__mobile-toggle');
  var mobileClose = document.querySelector('.mobile-menu__close');
  var mobileBackdrop = document.querySelector('.mobile-menu__backdrop');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');

  function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('is-open');
    if (mobileBackdrop) mobileBackdrop.classList.add('is-open');
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('is-open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('is-open');
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });
});

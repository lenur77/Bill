import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

function slider() {
  const swiper = new Swiper('.testimonials__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    //   effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    autoplay: {
      delay: 5000,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.testimonials__swiper-button-next',
      prevEl: '.testimonials__swiper-button-prev',
    },
  });
}
slider();

function submitSubscribe() {
  document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');

  });
}
submitSubscribe();

function slideMenu() {
  const links = document.querySelectorAll('.menu-header__link');
  links.forEach((item) => {
    item.addEventListener('click', () => {
      const el = document.getElementById(item.getAttribute('data-link'));

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  });
}
slideMenu();

function stickyMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    let nav = document.getElementById('nav');
    let current_pos = nav.offsetTop;
    window.onscroll = () => {
      let window_pos = document.documentElement.scrollTop;
      if (window_pos >= current_pos) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');

      }
    }
  });
}
stickyMenu();

function navBurger() {
  let menu = document.querySelector('.mobile-nav');
  let button = menu.querySelector('.burger-menu');
  let links = menu.querySelectorAll('.menu-header__link');
  let overlay = menu.querySelector('.mobile-nav__overlay');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  [].forEach.call(links, function (el) {
    el.addEventListener('click', () => toggleMenu());
  });
  overlay.addEventListener('click', () => toggleMenu());
 
  function toggleMenu() {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }
}
navBurger();
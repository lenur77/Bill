import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

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

  document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
    
  });
  
  const links = document.querySelectorAll(".menu-header__link");
  links.forEach((item)=>{
    item.addEventListener("click", ()=>{
    const el = document.getElementById(item.getAttribute("data-link"));
  
    el.scrollIntoView({behavior:"smooth", block:"center"});
  })
});

document.addEventListener("DOMContentLoaded",()=>{
  let nav = document.getElementById("nav");
  let current_pos = nav.offsetTop;
  window.onscroll = ()=>{
    let window_pos = document.documentElement.scrollTop;
    if(window_pos>=current_pos){
      nav.classList.add("sticky");
    }
    else{
      nav.classList.remove("sticky");

    }
  }
})
 
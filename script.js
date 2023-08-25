/*--------Header + title-----------*/
gsap.to('.nav li', {
  duration: 1,
  y: -20,
  stagger: 0.3,
  opacity: 1,
  delay: 0.5,
});
gsap.to('.logo', { duration: 1, y: -20, opacity: 1, delay: 0.5 });
gsap.to('.logo', { duration: 1, y: -20, opacity: 1, delay: 0.5 });
gsap.to('.logo', { duration: 1, y: -20, opacity: 1, delay: 0.5 });
gsap.to('.heading h2', { duration: 1, y: -20, opacity: 1, delay: 1.5 });
gsap.to('.heading p', { duration: 1, y: -30, opacity: 1, delay: 2 });
gsap.to('.fusion', { x: 300, delay: 2.7, duration: 2, opacity: 1 });
gsap.to('.sushi', { x: -300, delay: 2.7, duration: 2, opacity: 1 });
gsap.to('.title_img__nigiri', {
  rotation: 720,
  opacity: 1,
  delay: 3.6,
  duration: 2,
});
gsap.to('.title_img__bg', { opacity: 1, delay: 4, duration: 1.5 });

// Hamburger menu
let navs = document.querySelectorAll('#navItem');

navs.forEach((nav) => {
  nav.addEventListener('click', () => {
    document.querySelector('#menu_toggle').checked = false;
  });
});

// Footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
footer.querySelector(
  'p'
).innerHTML = `© ${currentYear} by <span>Natallia Langerbeins</span>`;

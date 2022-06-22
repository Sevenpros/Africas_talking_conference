const mobileMenu = document.querySelector('.mobile-menu-list');
const menu = document.querySelector('.navbar-mobile');
const showButton = document.querySelector('#show-menu');
const hideButton = document.querySelector('#hide-menu');
const menuList = document.querySelectorAll('.menu-list li');

showButton.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileMenu.classList.remove('invisible');
});

hideButton.addEventListener('click', () => {
  mobileMenu.classList.add('invisible');
  menu.classList.remove('invisible');
});

menuList.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('invisible');
    menu.classList.remove('invisible');
  });
});
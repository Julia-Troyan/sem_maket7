const menuActive = document.querySelector('.menu-active'); // Находим меню
const burger = document.querySelector('.burger'); // Находим кнопку бургера
const menuClose = document.querySelector('.menu-close'); // Находим кнопку крестика

function toggleMenu() {
  menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
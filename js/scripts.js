
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('nav ul li a');

burger.addEventListener('click', e => menu.classList.toggle('open'));
closeBtn.addEventListener('click', e => menu.classList.remove('open'));
[...links].forEach(link => link.addEventListener('click', e => menu.classList.remove('open')));


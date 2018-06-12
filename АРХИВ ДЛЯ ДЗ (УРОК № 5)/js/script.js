let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let li = document.createElement('li');
li.textContent = 'Пятый пункт';
li.classList.add('menu-item');
menu.appendChild(li);
menu.insertBefore(menuItem[2], menuItem[1]); 
//let prod = document.getElementById('title');
//prod = 'Мы продаем только подлинную технику Apple';
//console.log(prod);
let bd = document.querySelector('body');
bd.style.backgroundImage = 'url(./img/apple_true.jpg)';
let title = document.querySelector('.title');
title.textContent = 'Мы продаем только подлинную продукцию Apple';
let recl = document.querySelector('.adv');
let pr = document.getElementsByClassName('column');
//let pr1 = document.querySelector('.column');
pr[1].removeChild(recl);
let text = prompt('отношение к технике Apple');
let otn = document.querySelector('.prompt');
otn.textContent = text;







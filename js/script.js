"use strict"
//(Функції)
//Задача № 1
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!')
//Задача № 2
//showMessage();
/*function showMessage() {
	console.log('Сooбщение');
}
*/
//Задача № 3
let showMessage = function () {
	console.log('Сooбщение');
};
showMessage();
//Задача № 4
showMessage();
if (2>1) {
	function showMessage() {
		console.log('Сooбщение')
	}
};
//Масиви
//Задача № 1
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
//Задача № 2
/*Создайте массив usres с элементами "Ваня" и "Иштван".
Добавьте Оля в конец.
Замените значение в   "Иштван" на "Петя".
Ваш код для поиска значения должен работать для массивов
с любой длинной. Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
/*let users = ["Ваня", "Иштван",];
users.push("Oля");
users.splice(1, 1, "Петя",);
let removed = users.splice(1, 1);
users.unshift("Маша", "Паша",);
console.log(users);
console.log(removed);
*/
//Задача № 3
//Удалить элемент "Иштван" и возвратить его в переменную
let arrOne = ["Ваня", "Иштван", "Oля",];
let removed = arrOne.splice(1, 1);
console.log(arrOne);
console.log(removed);

//Задача № 4
//Сделать из строки массив
let str = "Ваня,Иштван,Oля";
let arrThree = str.split(',');
console.log(arrThree);
//Задача № 5
//Чему равен previousValue в начале работы метода?
/*let arrStart = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/
//DOM
//Задача № 1
/* Получть в переменную элемент с атрибутом data-say-hi и 
прочитать значение этого атрибута
*/
const yes = document.querySelector("[data-say-hi]");
console.log(yes);
//Задача № 2
// Получть в переменную элемент с текстом Йончи
const elem = document.querySelectorAll('li')[1];
console.log(elem);
//Задача № 3
//Получть в переменную коллекцию элементов с классом like
const elems = document.querySelectorAll('.like');
console.log(elems);

//Задача № 4
//Куда добавится <li>Текст</li>
/*const list = document.querySelector('ul');
list.insertAdjacentHTML (
	'beforeend',
	'<li>Текст</li>'
);
*/
//Розміри прокручування та координати елементів на сторінці та вікна браузера
//Задача № 1
//Узнать ширину полосы прокрутки
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const scrollTabLength = window.innerWidth - mainElementWidth;
console.log(scrollTabLength);

//Задача № 2
//Заставьте браузер прокрутиться на 100рх сверху
//спустя секунду после открытия страницы
function setScrollBy() {
	window.scrollBy(0, 100);
	const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}
setTimeout(setScrollBy, 1000);

//Задача № 3
//Получите координаты любых трех элементов на странице
const One = document.querySelector('.object');
const getItemCoords = One.getBoundingClientRect();
console.log(getItemCoords);
const Two = document.querySelector('.object-two');
const getItemCoord = Two.getBoundingClientRect();
console.log(getItemCoord);
const Three = document.querySelector('.object-three');
const getItemCoordss = Two.getBoundingClientRect();
console.log(getItemCoordss);
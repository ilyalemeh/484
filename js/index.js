//Задание 485
// //№1
// function setText(selector, text) {
// 	let elem = document.querySelector(selector);
// 	elem.textContent = text;
// }
// setText('#elem1', 'text1');
// setText('#elem2', 'text2');
// //№2
// function setAttr(selector, attrName, attrValue) {
//     let elem = document.querySelector(selector);
//     elem.setAttribute(attrName, attrValue);
//     }
//     setAttr('#elem3', 'id', 'new-elem3');
//     setAttr('#elem4', 'id', 'new-elem4');

//486//
// function appendText(selector, text) {
// let elems = document.querySelectorAll(selector);
//
// for (let elem of elems) {
// elem.textContent += text;
// }
// }
// appendText('.elem', 'Мой текст');

//487//
// forEach('.elem', function(elem) {
// elem.textContent = elem.textContent + '!';
// });
//
// function forEach(selector, func) {
// let elems = document.querySelectorAll(selector);
//
// for (let elem of elems) {
// func(elem);
// }
// }

//488//
// forEach('.elem', function(elem, index) {
// elem.textContent = index + elem.textContent;
// });
//
// function forEach(selector, func) {
// let elems = document.querySelectorAll(selector);
//
// for (let i = 0; i < elems.length; i++) {
// func(elems[i], i);
// }
// }

//489//
// function appendText(elem, text){
// elem.textContent = elem.textContent + text;
// }
//
// let elem11 = document.getElementById('elem11');
// appendText(elem11, ' носков');
//
// let elem22 = document.getElementById('elem22');
// appendText(elem22, ' геля для душа');

// function appendText2(elem, text){
// elem.textContent = elem.textContent + text;
// }
//
// let elems = document.querySelectorAll('.abzac');
//
// for (let elem of elems) {
// appendText2(elem, '!');
// }

// function setValue(inputElem, text){
// inputElem.value = text;
// }
//
// let input1 = document.querySelector('.input');
// setValue(input1, 'Привет, мир!');

//490//
// function appendText(elems, text) {
// for (let elem490 of elems) {
// elem490.textContent = elem490.textContent + text;
// }
// }
// let elems = document.querySelectorAll('.elem490');
// appendText(elems, 'text');

// function appendElem(ulElem, text){
// let li = document.createElement('li');
// li.textContent = text;
// ulElem.appendChild(li);
// }
//
// let ul1 = document.querySelector('#ul1');
// appendElem(ul1, 'Новый элемент списка');

// function appendElem2(ulElem, text){
// let li = document.createElement('li');
// li.textContent = text;
// ulElem.appendChild(li);
// }
//
// let ul11 = document.querySelector('#ul11');
// let arr = ['gaga', 'gagagagaga', 'gegegegagaga'];
//
// for (let i = 0; i < arr.length; i++) {
// appendElem2(ul11, arr[i]);
// }

//491//
// function createTable(rows, cols, parent) {
// let table = document.createElement('table');
//
// for (let i = 0; i < rows; i++) {
// let tr = document.createElement('tr');
// for (let j = 0; j < cols; j++) {
// let td = document.createElement('td');
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }
//
// parent.appendChild(table);
// }
//
// let div = document.querySelector('#elememe');
// createTable(3, 4, div);
// 492 1
// function createTable(rows, cols) {
//     const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const row = table.insertRow();
//         for (let j = 0; j < cols; j++) {
//             const cell = row.insertCell();
//             cell.textContent = Row ${i + 1}, Cell ${j + 1};
//         }
//     }
//     return table;
// }

// 492 2
// function createTable() {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     for (var i = 1; i <= 3; i++) {
//         var tr = document.createElement('tr');
//         var td = document.createElement('td');
//         td.appendChild(document.createTextNode(i));
//         tr.appendChild(td);
//         tbody.appendChild(tr);
//     }
//     table.appendChild(tbody);
//     document.getElementById('elem').appendChild(table);
// }
// createTable();

// 493 1
// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
// div.appendChild(table);
// function createTableByArr(arr) {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     for (var i = 0; i < arr.length; i++) {
//       var row = document.createElement('tr');
//       for (var j = 0; j < arr[i].length; j++) {
//             var cell = document.createElement('td');
//             cell.textContent = arr[i][j];
//             row.appendChild(cell);
//         }
//         tbody.appendChild(row);
//     }
//     table.appendChild(tbody);
//     return table;
// }
// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
// div.appendChild(table);

// 497
// ;(function(selector) {
//   let button = document.querySelector(selector);
//   button.addEventListener('click', handleButtonClick);
// })('#calculate');
// function avg1(arr) {
// 	return sum(arr, 1) / arr.length;
// }

// function avg2(arr) {
// 	return sum(arr, 2) / arr.length;
// }

// function avg3(arr) {
// 	return sum(arr, 3) / arr.length;
// }

// function sum(arr, pow) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem ** pow;
// 	}
	
// 	return res;
// }

// export { avg1, avg2, avg3 };

// import { avg1, avg2, avg3 } from './mathFunctions.js';

// const numbers = [1, 2, 3, 4, 5];
// console.log(avg1(numbers));
// console.log(avg2(numbers));
// console.log(avg3(numbers));

502
// ;(function() {
//     let str1 = 'переменная модуля';
//     let str2 = 'переменная модуля';
//     let str3 = 'переменная модуля';
  
//     function func1() {
//       alert('функция модуля 1');
//     }
  
//     function func2() {
//       alert('функция модуля 2');
//     }
  
//     function func3() {
//       alert('функция модуля 3');
//     }
  
//     function func4() {
//       alert('функция модуля 4');
//     }
  
//     function func5() {
//       alert('функция модуля 5');
//     }
  
   
//     let module = {
//       str1,
//       str2,
//       func1,
//       func2,
//       func3,
//       func4,
//       func5
//     };
  
//     window.module = module;
//   })();

// import { avg1, avg2, avg3 } from './mathFunctions.js';

// const numbers = [1, 2, 3, 4, 5];
// console.log(avg1(numbers));
// console.log(avg2(numbers));
// console.log(avg3(numbers));

// function avg1(arr) {
// 	return sum(arr, 1) / arr.length;
// }

// function avg2(arr) {
// 	return sum(arr, 2) / arr.length;
// }

// function avg3(arr) {
// 	return sum(arr, 3) / arr.length;
// }

// function sum(arr, pow) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem ** pow;
// 	}
	
// 	return res;
// }

// export { avg1, avg2, avg3 };
// ;(function(selector) {
//     let button = document.querySelector(selector);
//     button.addEventListener('click', handleButtonClick);
//   })('#calculateBtn');
"use strict";

/* 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины. */

// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// let vegetablesLength = vegetables.map((elem) => {
//   return elem.length;
// });

// console.log(vegetablesLength);

/* 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно. */

// let numbers = [2, 3, 5, 7, 11, 13, 17];

// function currentSums(numbers) {
//   let newArr = [];
//   let nSum = numbers.reduce((sum, item) => {
//     newArr.push(sum);
//     return sum + item;
//   });
//   newArr.push(nSum);
//   return newArr;
// }

// console.log(currentSums(numbers));

/* 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д. */

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
//   let arrPairs = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === 7) {
//         arrPairs.push(numbers[i] + ":" + numbers[j]);
//       }
//     }
//   }
//   return arrPairs;
// }

// console.log(sumSeven(arr));

/* 4. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str. */

// const str = "Каждый охотник желает знать, где сидит фазан.";

// function getFirstChar(str) {
//   let newArr = str.split(" ");
//   let firstChar = [];
//   for (let elem of newArr) {
//     firstChar.push(elem.slice(0, 1));
//   }
//   return firstChar;
// }

// console.log(getFirstChar(str));

// let getFirstChar = (str) => {
//   return str.split(" ").map((_) => _[0]);
// };

// console.log(getFirstChar(str));

/* 5. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. */

// const str = "JavaScript";

// function strSymb(str) {
//   let arrSymb = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] == undefined) {
//       arrSymb.push(str[i] + str[i + 1]);
//     } else if (str[i + 1] == undefined) {
//       arrSymb.push(str[i - 1] + str[i]);
//     } else {
//       arrSymb.push(str[i - 1] + str[i] + str[i + 1]);
//     }
//   }
//   return arrSymb;
// }

// console.log(strSymb(str));

// function strSymb(value, index, str) {
//   return str.substring(index - 1, index + 2);
// }

// let newArr = Array.prototype.map.call(str, strSymb);

// console.log(newArr);

/* 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений. */

// let numerics = [5, 7, 2, 9, 3, 1, 8];

// function matchingChars(first, second) {
//   if (first === second) {
//     return 0;
//   } else if (first > second) {
//     return -1;
//   } else {
//     return 1;
//   }
// }
// numerics = numerics.sort(matchingChars);

// console.log(numerics);

/* 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел. */

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9];
// function getArr(a, b, c) {
//   let d = a.concat(b, c);
//   let f = d.pop();
//   let newArr = [];
//   while (f != undefined) {
//     newArr.push(f);
//     f = d.pop();
//   }
//   let str = newArr.toString().replace(/\,/g, " ");
//   console.log(str);
// }

// getArr(a, b, c);

/* 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение. */

// const arr = [[1, 2, 3], [4, 5], [6]];

// function allSum(arr) {
//   let newArr = arr.reduce(function (a, b) {
//     return a.concat(b);
//   });
//   let newSum = newArr.reduce(function (d, e) {
//     return d + e;
//   });
//   console.log(newSum);
// }

// allSum(arr);

/* Version 2 */

// let sum = arr.flat(Infinity).reduce(function (a, b) {
//   return a + b;
// });

// console.log(sum);

/* 9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */

// const arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// let sum = arr.flat(Infinity).reduce(function (a, b) {
//   return a + b;
// });

// console.log(sum);

/* 10. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. */

// let arr = [2, 5, 9, 8, 12, 4, 0, 5];

// function reverse(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i > -1; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(reverse(arr));

/* 11. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */

// let arr = [2, 15, 1, 8, 12, 4, 0, 5];

// function sumChars(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) {
//       console.log("количество элементов - ", i + 1);
//       console.log("сумма ", sum);
//       return sum;
//     }
//   }
// }

// sumChars(arr);

/* 12. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. */

// function arrayFill(sym, char) {
//   let arr = [];
//   for (let i = 0; i < char; i++) {
//     arr.push(sym);
//   }
//   return arr;
// }

// console.log(arrayFill("x", 5));

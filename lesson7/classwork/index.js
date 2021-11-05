"use strict";
// const arr = "каждый охотник желает знать";
// const subarr = "знать";

// arring.prototype.endsWith = (arr, subarr) => {
//   const findarr = arr.match(/(\S+)$/g);
//   if (subarr == findarr) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(arring.prototype.endsWith(arr, subarr));

// const arr = "Астрономия - Наука о небесных телах";

// const getSubarr = (arr, char, pos) => {
//   if (pos === "before") {
//     return arr.slice(0, char);
//   } else if (pos === "after") {
//     return arr.slice(char);
//   } else {
//     return "Error";
//   }
// };

// console.log(getSubarr(arr, 10, "after"));

// const arr = "Астрономия - Наука о небесных телах";
// const qwer = (arr, arrSymbol) => {
//   let count = 0;
//   arr = arr.toLowerCase();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arrSymbol) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(qwer(arr, "о"));

// const arr1 = new Array(1, 2, 3, 9, 88);

// console.log(arr1.length);

// const arr2 = new Array(4);
// console.log(arr2);

// const arr3 = [1, 3, 5, 8, 9, 77, 9];
// console.log(arr3);

// arr3[0] = 10;

// console.log(arr3);

// const arr = [];
// console.log(arr);

// arr[0] = "zero";
// console.log(arr);

// arr[10] = "ten";
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr);

// arr.length = 2;

// console.log(arr);

// const arr = [];

// arr.push(1);
// arr.push(12, 100, 77);

// console.log(arr);

// const arr = "Астрономия - Наука о небесных телах";
// const customFind = (arr, arrSymbol) => {
//   let result;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arrSymbol) {
//       result = arr[i];
//     }
//   }
//   return result;
// };

// console.log(customFind([1, 2, 3, 4, 5], 3));

// console.log([1, 2, 3, 4, 5].find((el) => el === 3));

// const data = [
//   { title: "first", writer: "Alex" },
//   { title: "cecond", writer: "Max" },
//   { title: "third", writer: "Ivan" },
//   { title: "fourth", writer: "Max" },
//   { title: "fifth", writer: "Alex" },
//   { title: "sixth", writer: "Alex" },
// ];

// console.log(data);

// const filterData = data.filter((el) => el.writer === "Alex");
// console.log(filterData);
// console.log(data);

// const newData = data.map((el) => el.title);

// console.log(newData);

// const testForEach = data.forEach((el) => console.log(el.title));
// console.log(testForEach);

// const testForEach = data.map((el) => {
//   console.log(el.title);
//   return el.title;
// });
// console.log(testForEach);

// const data = [
//   5, 44, 12,
//   { value: 2, month: "january" },
//   { value: 8, month: "february" },
//   { value: 7, month: "march" },
// ];

// const valueSum = data.reduce((accum, curValue) => accum + curValue);
// const valueSum = data.reduce((accum, curValue) => accum + curValue.value, 0);
// console.log(valueSum);

// const sum = (arr) =>
//   arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((accum, value) => accum + value);

// console.log(sum([1, 2, 3, 4, -6]));

const arr = [1, 1, 1, 1, 1, 6, 5, 4, 6, 4, 8, 7, 1, 2, 4, 9, 11];

// let uniqNumber = (arr) =>
//   arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
// console.log(uniqNumber(arr));

// const uniqArr = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(uniqArr(arr));

// const uniqArr = (arr) => {
//   const result = [];
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };

// console.log(uniqArr(arr));

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];

// let compare = (arr1, arr2) => arr1.toString() === arr2.toString();

// console.log(compare(arr1, arr2));

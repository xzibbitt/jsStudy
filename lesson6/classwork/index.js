"use strict";
// const isPalindrom = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += str[str.length - i - 1];
//   }
//   if (newStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrom("aabgb"));

// let num1 = 1;
// let num2 = num1;
// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

// const obj1 = {
//   name: "Alex",
// };

// const obj2 = obj1;
// console.log(obj1, obj2);

// obj1.name = "Ivan";
// console.log(obj1, obj2);

// const obj = {};
// obj.true = 1;

// console.log(obj);

// let value = "name";
// let people = {
//   [value]: "Ivan",
// };

// console.log(people.name);

// const obj = {};
// // console.log(obj);

// obj.age = "12";
// obj.name = "Ivan"; /* obj.[name-user]  с тире только такой вариант ключа*/

// // console.log(obj);
// // console.log(obj.age);

// obj.age = "18";
// obj.name = "Max";

// console.log(obj);
// console.log(obj.age);
// delete obj.age;
// console.log(obj.age); /* undefined */

// const obj = {
//   sayHi: function () {
//     console.log("Hi, User!!!");
//   },
// };

// obj.sayHi();

// const obj = {
//   sayHi: function (name) {
//     console.log("Hi, User, ", name);
//   },
// };

// obj.sayHi("Max");

// const myFavoriteFilm = {};
// myFavoriteFilm.name = "Indiana Jones";
// myFavoriteFilm.date = "1985";
// myFavoriteFilm.director = "Lucas";
// myFavoriteFilm.country = "USA";

// myFavoriteFilm.money = "200 mln $";

// console.log(myFavoriteFilm);

// delete myFavoriteFilm.date;
// console.log(myFavoriteFilm);

// myFavoriteFilm.sayName = function () {
//   console.log(myFavoriteFilm.name);
// };

// myFavoriteFilm.sayName();

// const str = "string";
// str[0] = "S";
// console.log(str);

// let figure = (min, max) => {
//   const a = Math.random() * (max - min) + min;
//   return Math.round(a);
// };

// console.log(figure(1, 100));

// let getRegistr = (str, n) => {
//   if (n > str.length) {
//     console.log("неверный параметр задачи");
//     return;
//   }
//   if (str[n] === str[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// getRegistr("RvhgfRjh", 2);

let customReplaceAll = (str, find, replaceStr) => {
  //   while (str.includes(find)) {
  //     str = str.replace(find, replaceStr);
  //   }
  //   return str;
  str = str.replace(find, replaceStr);
  if (str.includes(find)) {
    return customReplaceAll(str, find, replaceStr);
  } else {
    return str;
  }
};

console.log(customReplaceAll("hi this is, hi its me", "hi", "Hello"));

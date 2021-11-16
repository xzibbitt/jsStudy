// "use strict";
// const obj1 = { a: "Hello" };
// const obj11 = { b: "Hello Alex" };

// const obj2 = Object.assign({}, obj1, obj11);

// console.log(obj1, obj2);

// obj1.a = "Goodbye";
// console.log(obj1, obj2);

// const obj1 = {
//   sayHello: "Hello",
//   user: { nameUser: "Alex", age: { date: "28", year: "1996", month: "03" } },
// };

// const obj2 = Object.assign({}, obj1);
// console.log(JSON.stringify(obj1));
// const obj2 = JSON.parse(JSON.stringify(obj1));

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = "2021";

// console.log(obj1.user, obj2.user);

// const arr1 = [1, 3, 5, 7, 8, 9];
// const arr2 = [2, 4, 6];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const obj1 = { name: "Alex", age: "25" };

// const obj2 = { ...obj1, name: "Max" };

// console.log(obj1, obj2);

// obj1.name = "Ivan";

// console.log(obj1, obj2);

// const getSum = (a, b, ...args) => {
//   console.log(args);
//   // return
// };

// getSum(1, 2, 3, 4);

// const arr = [1, 7, 5, 13, 23];

// for (let elem of arr) {
//   console.log(elem);
// }

// const obj = { a: 1, b: 2 };
// for (let elem in obj) {
//   console.log(obj[elem]);
// }

// const obj = { name: "Indiana Jones", date: "1985", country: "USA" };

// const objA = Object.assign({}, obj);

// const objS = { ...obj };

// objS.date = "1984";
// console.log(obj);
// console.log(objA);
// console.log(objS);

//todo
// const sum = (...args) => {
//   let result = 0;
//   for (let elem of args) {
//     if (elem % 2 === 0) {
//       return (result += elem);
//     }
//   }
//   return result;
// };

// console.log(sum(1, 2, 4, 9));

// let arr1 = [1, 3, 5, 7, 7, 7, 9, 4];
// let arr2 = [1, 4, 9, 3, 2, 8];

// const comparison = (arr1, arr2) => {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
//       newArr.push(arr1[i]);
//     }
//   }
//   return newArr;
// };

// console.log(comparison(arr1, arr2));

//* * New Theme

// console.log(global);

// function example() {
//   console.log(this);
// }
// example();

// const user = {
//   name: "Alex",
//   age: "25",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// user.getName();

// function getName() {
//   console.log(this.name);
// }

// function setName(newName) {
//   this.name = newName;
// }

// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };

// user.getUserName();

// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setAdminName: setName,
// };

// admin.getAdminName();
// user.setUserName("Ira");
// console.log(user.name);
// console.log(user);

// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

//*?  Dungeons and dragons

// function startFight() {
//   return this.strange * this.agility;
// }

//*! work uncorrect
// const startFight = () => {
//   return this.strange * this.agility;
// };
//*!

// const hero = {
//   name: "Jon",
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
// };

// const dracula = {
//   name: "Vlad",
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight) {
//   console.log("hero wins!!!!");
// } else {
//   console.log("Loose!!! Hero is dead!");
// }

//*?

// const city = {
//   name: "Brasilia",
//   population: "18 mln",
//   getName: function () {
//     return console.log(this.name);
//   },
//   getPopulation: function () {
//     return console.log(this.population);
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// city.getName();
// city.getPopulation();
// console.log(city);
// city.setSomeValue("population", "15 mln");

// console.log(city);

// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// console.log(sayFullName("Alex", "Shirokov"));

// console.log(sayFullName.call({ phrase: "Hello!" }));

// let boundFullName = sayFullName.bind({ phrase: "Bye!!" }, "Max", "Petrov");

// let sayHelloKate = sayFullName.bind({ phrase: "Hello!!!" }, "Kate");
// console.log(sayHelloKate("Petrova"));
// console.log(sayHelloKate("Ivanova"));

//?

// const city = {
//   name: "Brasilia",
//   population: "18 mln",
//   getName: function () {
//     return this.name;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const city2 = {
//   name: "Rio-de-Janeiro",
//   population: "25 mln",
// };

// console.log(city.getName.call(city2));
// console.log(city.getPopulation.call(city2));
// console.log(city2);

// let bound = city.setSomeValue.bind(city2);
// bound("population", "20 mln");
// bound("country", "Brasil");
// console.log(city2);

/* let a = 0;
console.log(a);

const test = () => {
  a = 10;
};

test();
console.log(a); */

// function getFullName() {
//   const firstName = "Alex";

//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }

//   return getSecondName;
// }

// const clouser = getFullName();
// console.log(clouser("Smirnov"));

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));
// console.log(areaWithTen(230));

// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));
// console.log(areaWithFour(21));

// const getVolume = (a) => {
//   return (b, c) => a * b * c;
// };

// const volumeWithTen = getVolume(10);

// console.log(volumeWithTen(10, 10));

// const getVolume = () => {
//   const a = 10;
//   return (b, c) => a * b * c;
// };

// const volumeWithTen = getVolume();

// console.log(volumeWithTen(10, 10));

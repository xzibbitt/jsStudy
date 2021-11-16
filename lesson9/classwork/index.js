//*PROTOTYPE

// const user = {};

// console.log(user.__proto__);

// const people = {
//   getName: function () {
//     return this.name;
//   },
// };

// const user = {
//   name: "Alex",
//   __proto__: people,
// };

// const admin = {
//   name: "Vasya",
//   __proto__: people,
// };

// console.log(user.getName());
// console.log(admin.getName());

// let animal = {
//   jumps: "Прыжок!",
// };

// let rabbit = {
//   __proto__: animal,
//   jumps: "Заяц прыгнул!",
// };

// console.log(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2)

// delete animal.jumps;

// console.log(rabbit.jumps); // ? (3)

//*Функции-конструкторы

// function CreateUser() {
//   console.log("User CREATE");
// }

// // new CreateUser();
// const user = new CreateUser();

// console.log(user);

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }

// CreateUser.prototype.sayHi = function () {
//   return `Hello!!! My name is ${this.userName}`;
// };

// let firstUser = new CreateUser("Alex", 25);
// let secondUser = new CreateUser("Max", 30);

// console.log(firstUser);
// console.log(secondUser);

// console.log(firstUser.sayHi());

//*my
// function CreateCard(from, to) {
//   this.from = from;
//   this.to = to;
// }

// CreateCard.prototype.show = function () {
//   return `This card goes from ${this.from} to ${this.to}`;
// };

// let firstCard = new CreateCard("Anna", "Alex");
// console.log(firstCard.show());

// CreateCard.prototype.changeFrom = function (newName) {
//   this.from = newName;
// };

// firstCard.changeFrom("Max");
// console.log(firstCard.show());

//*teacher
// function CreatePostCard(from, to) {
//   this.from = from;
//   this.to = to;
// }

// const firstCard = new CreatePostCard("Alex", "Ivan");

// CreatePostCard.prototype.show = function () {
//   console.log(`${this.from} Отправил открытку ${this.to}`);
// };

// CreatePostCard.prototype.setFromValue = function (newFrom) {
//   this.from = newFrom;
// };
// console.log(firstCard);
// firstCard.show();
// firstCard.setFromValue("Max");
// console.log(firstCard);
// firstCard.show();

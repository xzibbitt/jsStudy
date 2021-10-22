// function helloWorld() {
//   console.log("hello, world!");
// }

// helloWorld();

// const isUserAuth = false;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("доступ есть");
//   } else {
//     console.log("доступа нет");
//   }
// }

// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Hello, User!");
//   } else {
//     console.log("Hello, Guest!");
//   }
// }

// writeMessage();

// function sum(a, b = 0) {
//   console.log(a + b);
// }
// sum(1, 0);
// sum(16);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после return");
// }

// getName("Ivan");
// const userName = getName("Max");
// console.log(userName);

// function getName(name) {
//   return;
// }

// const userName = getName("Max");
// console.log(userName);

// function getName(name) {}

// const userName = getName("Max");
// console.log(userName);

// let name = "Alex";

// function getName(userName) {
//   return userName;
// }
// const nameUserOne = getName(name);
// console.log(nameUserOne);

// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = "Alex";
// console.log(name, "1");
// function sayHi(userName) {
//   userName = "Petr";
//   console.log(userName, "function");
// }

// sayHi(name);
// console.log(name, "2");

// let a = 0;
// let b = 0;

// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();

// function exp(a, b = 1) {
//   console.log(a ** b);
// }

// exp(2, 2);
// exp(4, 3);
// exp(7);

// let str = "abcde";
// console.log(str.length);
// let last = str.length - 2;
// console.log(str[last]);

// let str = `ab
// ce
// ef`;
// console.log(str);

// let a = "5.5px";
// let b = "6.25px";

// sum = parseFloat(a) + parseFloat(b);
// console.log(sum + " px");

// let a = "123569";

// console.log(a[0] + a[1]);
// console.log(Number(a[0]) + Number(a[1]));

// function summ() {
//   let sum = 0;
//   for (i = 1; i <= 100; i++) {
//     sum += i;
//   }
//   return sum;
// }

// summ();
// console.log(summ());

// function func(num) {
//   console.log(num * num);
// }

// func(2);
// func(3);

// function func(num) {
//   num > 0 ? console.log("+++") : console.log("---");
// }

// func(8);
// func(-8);
// func(0);

// function func(a, b, c) {
//   console.log(a + b + c);
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 6;

// func(param1, param2, param3);

// function cube(num) {
//   return num * num * num;
// }

// console.log(cube(3), cube(4));
// console.log(cube(3) + cube(4));

// function sqrt(num) {
//   return Math.sqrt(num);
// }
// function round(num) {
//   return num.toFixed(3);
// }

// console.log(round(sqrt(2)));

function sqrt(num) {
  return Math.sqrt(num);
}

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

let result = sqrt(sum(2, 3, 4));
console.log(result);

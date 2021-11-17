"use strict";

/* 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.
Пример:
foo(start, end). 
При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.
 */

function time(start, end) {
  return function () {
    for (let i = end; i > start; i--) {
      console.log(i);
    }
    console.log("end");
  };
}

time();
let f = time();
f(8, 1);
/* 2. Что выведет функция?  */

// function f() {
//   console.log(this); // ?
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();

//* Ответ - null при режиме 'use strict' и global без использования строгого режима

/* 3. Можем ли мы изменить this дополнительным связыванием? */

// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

//* Ответ - нет. Будет использоваться только первый bind

/* 4. В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ. */

// function sayHi() {
//   console.log(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// console.log(bound.test); // что выведет? почему?

//* Ответ - будет выведен undefined, т.к. у функции bound нет свойства test

/* 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа. Однако, его вызов приводит к ошибке. Почему? */

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk, user.loginFail);

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//* Ответ: привызове функции askPassword, теряется контекст this. Поэтому необходимо зафиксировать контекст с помощью bind

/* 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
 */

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(?, ?); // ?

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

/* 8. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value */

// let elem = { value: "Привет" };

// function func(surname, name) {
//   console.log(this.value + ", " + surname + " " + name);
// }

// func = func.bind(elem);
//Тут напишите конструкцию с bind()

// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

/* 9. Есть функция которая складывает три числа.
const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem. Выполните каррирование. */

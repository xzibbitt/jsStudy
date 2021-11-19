"use strict";

/* 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.
Пример:
foo(start, end). 
При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.
 */

// function time(start, end) {
//   return function () {
//     for (let i = end; i > start; i--) {
//       console.log(i);
//     }
//     console.log("end");
//   };
// }

// time();
// let f = time();
// f(8, 1);
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

//* Задачи на классы

/* 1/ Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника. */

// class Worker {
//   constructor(name, surname, rate, day) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.day = day;
//   }

//   getFullName() {
//     return `ФИО: ${this.name} ${this.surname}`;
//   }
//   getSalary() {
//     return `${this.getFullName()}, Зарплата: ${this.day * this.rate} рублей`;
//   }
// }

// const firstWorker = new Worker("Semen", "Popov", 2000, 20);

// console.log(firstWorker.getSalary());
// console.log(firstWorker.getFullName());

// const secondWorker = new Worker("Igor", "Zverev", 3100, 20);
// console.log(secondWorker.getSalary());
// console.log(secondWorker.getFullName());

/* 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников. */

// class Boss extends Worker {
//   constructor(name, surname, rate, day, workers) {
//     super(name, surname, rate, day);
//     this.workers = workers;
//   }

//   getSalary() {
//     return `${this.getFullName()}, Зарплата: ${
//       this.day * this.rate * this.workers
//     } рублей`;
//   }
// }

// const firstBoss = new Boss("Petr", "Popov", 3600, 20, 5);
// console.log(firstBoss);
// console.log(firstBoss.getFullName());
// console.log(firstBoss.workers);
// console.log(firstBoss.getSalary());

/* 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.  */

// class Worker {
//   constructor(name, surname, rate, day) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._day = day;
//   }

//   getName() {
//     return this._name;
//   }
//   getSurname() {
//     return this._surname;
//   }
//   getRate() {
//     return this._rate;
//   }

//   getDays() {
//     return this._day;
//   }
//   getFullName() {
//     return `ФИО: ${this._name} ${this._surname}`;
//   }
//   getSalary() {
//     return `${this.getFullName()}, Зарплата: ${this._day * this._rate} рублей`;
//   }
// }

// const firstWorker = new Worker("Semen", "Popov", 2000, 20);

// console.log(firstWorker.getSalary());
// console.log(firstWorker.getFullName());
// console.log(firstWorker.getName());

/* 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры */

// class Worker {
//   constructor(name, surname, rate, day) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._day = day;
//   }

//   getName() {
//     return this._name;
//   }
//   getSurname() {
//     return this._surname;
//   }
//   getRate() {
//     return this._rate;
//   }

//   getDays() {
//     return this._day;
//   }

//   setRate(value) {
//     this._rate = value;
//   }

//   setDay(value) {
//     this._day = value;
//   }

//   getFullName() {
//     return `ФИО: ${this._name} ${this._surname}`;
//   }
//   getSalary() {
//     return `${this.getFullName()}, Зарплата: ${this._day * this._rate} рублей`;
//   }
// }

// const firstWorker = new Worker("Semen", "Popov", 2000, 20);

// console.log(firstWorker.getSalary());
// console.log(firstWorker.getFullName());
// console.log(firstWorker.getName());

// firstWorker.setRate(2100);
// firstWorker.setDay(15);
// console.log(firstWorker.getSalary());
// console.log(firstWorker.getRate());

/* 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки. */

// class MyString {
//   constructor(str) {
//     this.str = str;
//   }
//   reverseStr() {
//     return [...this.str].reverse().join("");
//   }

//   ucFirst() {
//     return this.str[0].toUpperCase() + this.str.slice(1);
//   }

//   ucWords() {
//     return this.str
//       .toLowerCase()
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   }
// }

// const str = new MyString("qwerty Tfbsmkj lkmJgJHHJ");
// console.log(str.reverseStr());

// console.log(str.ucFirst());

// console.log(str.ucWords());

/* 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона. */

// class Validator {
//   constructor(text) {
//     this.text = text;
//   }

//   isEmail = () =>
//     this.text.indexOf("@") > 0 &&
//     this.text.indexOf("@") === this.text.lastIndexOf("@") &&
//     this.text.indexOf(".") > 0 &&
//     this.text.indexOf("@") < this.text.indexOf(".") &&
//     this.text.indexOf(".") < this.text.length - 1;

//   isDomain () =>

//   isDate = () => /\d{2}(.+)\d{2}\1\d{4}/.test(this.text);
//   isPhone = () => /^(\+?7|8)?9\d{9}$/.test(this.text);
// }

// const newVal = new Validator("dgyjgtyh@mailr.@u");

// console.log(newVal.isEmail());

// const newVal2 = new Validator("+790404684178");
// console.log(newVal2.isPhone());

// const newVal3 = new Validator("12.04.1984");
// console.log(newVal3.isDate());

/* 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно. */

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `ФИО: ${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, yearAdmission) {
    super(name, surname);
    this.yearAdmission = yearAdmission;
  }

  getCourse() {
    return console.log(
      `${new Date().getFullYear() - this.yearAdmission} ${"курс"}`
    );
  }
}

const studentOne = new Student("Nina", "Ivanova", 2019);
console.log(studentOne.getFullName());
studentOne.getCourse();

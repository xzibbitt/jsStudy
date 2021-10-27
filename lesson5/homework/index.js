"use strict";

/* 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. */

// function square(num) {
//     return num * num
// }

// console.log(square(5));

/* 2. Сделайте функцию, которая возвращает сумму двух чисел. */

// function sum (a,b) {
//     return a + b
// }
// console.log(sum(4,4));

/* 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. */

// function func (a,b,c) {
//     return (a - b) / c
// }
// console.log(func(6,4,2));

/* 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */

// function day (num) {
//     switch (num) {
//         case 1:
//         console.log('понедельник');
//         break
//         case 2:
//         console.log('вторник');
//         break
//         case 3:
//         console.log('среда');
//         break
//         case 4:
//         console.log('четверг');
//         break
//         case 5:
//         console.log('пятница');
//         break
//         case 6:
//         console.log('суббота');
//         break
//         case 7:
//         console.log('воскресенье');
//         break
//         default:
//             console.log('Insert number from 1 to 7');
//     }
//     return num
// }

// day(5)

/* 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false. */

// let func = (a,b) => a === b ? console.log('true') : console.log('false');
// func(2,8)

/* 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false. */

// let func = (a,b) => a + b > 10 ? console.log('true') : console.log('false');
// func (5,1)

/* 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false. */

// let func = (a) => a  > 0 ? console.log('true') : console.log('false');
// func(-7)

/* 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */

// let isNumberInRange = (a) => a  > 0 && a < 10 ? console.log('true') : console.log('false');
// isNumberInRange(-9)

/* 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. */

// let arr = [5, 8, -9, 10, 13, -7, 1, 6, 11];
// let arr2 = []
// let isNumberInRange = (a) => a  > 0 && a < 10 ? true : false

// for (let i=0; i < arr.length; i++) {
//    if (isNumberInRange (arr[i])) {
//     arr2.push(arr[i])
//    }
// }
// console.log(arr2);

/* 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр. */

// function getDigitSum(num) {
//   num = num.toString();
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }
//   return sum;
// }
// console.log(getDigitSum(115));

/* 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи. */

// let num = 1;
// function getDigitSum(num) {
//   num = num.toString();
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }
//   return sum;
// }

// for (; num <= 2020; num++) {
//   if (getDigitSum(num) === 13) {
//     console.log(num);
//   }
// }

/* 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */

// let isEven = (num) =>
//   num % 2 == 0 ? console.log("true") : console.log("false");

// isEven(9);

/* 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. */

// let arr = [2, 9, 8, 16, 47, 5, 2, 14];
// let isEven = (num) => (num % 2 == 0 ? true : false);
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);

/* 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число). */

// let arr = [];
// function getDivisors(num) {
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// getDivisors(95);
// console.log(arr);

/* 15.  Дан массив с числами. Выведите последовательно его элементы. */

// let arr = [1, 48, 3, 11, -7, 8, 6];

// function viewArr() {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// viewArr();

/* 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). */

// let num = 123456789012345;
// function getDigitSum(num) {
//   num = num.toString();
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }
//   return sum;
// }
// while (getDigitSum(num) > 9) {
//   num = getDigitSum(num);
// }
// console.log(getDigitSum(num));

// const evenNine = (num) => {
//   num = `${num}`;
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += +num[i];
//   }

//   if (sum > 9) {
//     return evenNine(sum);
//   } else {
//     return sum;
//   }
// };

// console.log(evenNine(2439));

let arr = [1, 48, 3, 11, -7, 8, 6];

const arrSort = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!i) {
      result[i] = arr[i];
      continue;
    }
    if (arr[i] > result[i - 1]) {
      result[i] = arr[i];
    } else {
      const a = result[i - 1];
      result[i - 1] = arr[i];
      result[i] = a;
    }
  }
  console.log(result);
};
console.log(arrSort(arr));

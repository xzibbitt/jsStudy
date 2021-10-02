// String - строковое преобразование
/* const firstValue = String(5)


console.log(typeof firstValue)
 */

/* const obj = {
    foo: 67
}

console.log(typeof String(obj.foo)) */

// NUMBER - числовое преобразование
/* 
let testValue  /* при попытке использовать const вылезает ошибка */

/* console.log(typeof testValue);

testValue = Number(testValue);

console.log(testValue);
 */

/* const isUser = true;
const isAdmin = false;

console.log(Number(isUser), Number(isAdmin)); */
/* 
const voidString = "";

console.log(Number(voidString));
 */

// BOOLEAN Лошическое преобразование

// const value = '     '

// console.log(typeof Boolean(value), Boolean(value))

// const obj = [1].length;

// console.log(Boolean(obj));

// console.log(7%4) // result 3

//Унарный плюс

// const value = 5;

// console.log(typeof value, typeof +value);

// const value = '5';

// console.log(typeof value, typeof +value, typeof Number(value));

// Бинарный плюс

// let sum = 5 + 6;
// console.log(sum);

// sum = 1 + true;
// console.log(sum);

// sum = 5 + null
// console.log(sum)

// const stringValue = "alex";
// const numberValue = 34;
// console.log(stringValue + numberValue);
// console.log(typeof (numberValue + stringValue));

// const stringValue = "12"; // 12x результат NaN и  number
// const numberValue = 34;
// console.log(+stringValue + numberValue);
// console.log(typeof (numberValue + +stringValue));

// const firstName = "alex";
// const lastName = "shirokov";

// // console.log(firstName + " " + lastName);

// console.log(`${firstName} ${lastName}`);

//Операции сравнения

// console.log(5 == 5); //равно
// // console.log(7 != 5);  //не равно
// console.log(false == 0) //false приводится в число

// console.log(typeof 5 == "string"); //false

// const firstString = "apple";
// const secondString = "applе";//е - кириллица

// console.log(firstString == secondString);

// const a = 0;

// const b = "0";

// console.log(a == b);

// console.log(a === b);



console.log(null === null)
console.log(null === undefined)


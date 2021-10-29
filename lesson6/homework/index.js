"use strict";
/* 1. Преобразовать строку в массив слов

Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */
// const str = "Каждый охотник желает знать";
// let arr = [];
// function stringToArray(str) {
//   arr = str.split(" ");
// }

// stringToArray(str);
// console.log(arr);

/* 2. Удаление указанного количества символов из строки

Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */

// const str = "Каждый охотник желает знать";

// function delete_characters(str, length) {
//   return str.substr(0, length);
// }

// console.log(delete_characters(str, 6));

/* 3. Вставить тире между словами строки

Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр */

// const str = "HTML JavaScript PHP";

// function insert_dash(str) {
//   return str.replace(/ /g, "-").toUpperCase();
// }

// console.log(insert_dash(str));

/* 4. Сделать первую букву строки прописной

Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний. */

// const str = "string not starting with capital";

// function cursive_letter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(cursive_letter(str));

/* 5. Первая буква каждого слова заглавная

Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы. */

// const str = "каждый охотник желает знать";

// function capitalize(str) {
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   let result = arr.join(" ");
//   console.log(result);
// }

// capitalize(str);

/* 6. Смена регистра символов строки
Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк». */

// const str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
// let newStr = "";
// function change_register(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newStr += str[i].toLowerCase();
//     } else {
//       newStr += str[i].toUpperCase();
//     }
//   }

//   return newStr;
// }

// console.log(change_register(str));

/* 7. Удалить все не буквенно-цифровые символы
Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов. */

// const str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
// let newStr = "";

// function remove_char(str) {
//   newStr = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
//   return newStr;
// }

// console.log(remove_char(str));

/* 8. Нулевое заполнение строки
Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента. */

// function zeros(num, len, sign) {
//   return sign
//     ? String(num)
//         .padStart(len, "0")
//         .padStart(len + 1, sign)
//     : String(num).padStart(len, "0");
// }

// console.log(zeros(15, 9, "+"));

/* 9. Сравнение строк без учёта регистра. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов. */

// function comparison(str1, str2) {
//   let new1 = str1.toUpperCase();
//   let new2 = str2.toUpperCase();

//   if (new1 === new2) {
//     console.log("строки идентичны");
//   } else {
//     console.log("строки отличаются");
//   }
// }
// comparison("WordPress", "wowdpress");

/* 10. Поиск без учета регистра. Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов. */

// function insensitive_search(str1, str2) {
//   let new1 = str1.toUpperCase();
//   let new2 = str2.toUpperCase();
//   if (new1.indexOf(new2) != -1) {
//     console.log("Есть совпадения");
//   } else {
//     console.log("нет совпадений");
//   }
// }

// insensitive_search("aDobePhotoShop", "phto");

/* 11. ВерблюжийРегистр (CamelCase)
Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.*/

// let str = "hEllo woRld";
// function initCap(str) {
//     return str
//     .toLowerCase()
//     .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
//       return index === 0 ? word.toLowerCase() : word.toUpperCase();
//     })
//     .replace(/\s+/g, "");
// }

// console.log(initCap(str));

/* 12. Змеиный_регистр (snake_case)
Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы. */

// function initSnake(str) {
//   return (
//     str.charAt(0).toLowerCase() +
//     str
//       .slice(1)
//       .replace(/\W+/g, " ")
//       .replace(/([a-z])([A-Z])([a-z])/g, "$1 $2$3")
//       .split(/\B(?=[A-Z]{2,})/)
//       .join(" ")
//       .split(" ")
//       .join("_")
//       .toLowerCase()
//   );
// }

// console.log(initSnake("snakeCase"));

/* 13. Повторить строку n раз.Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз. */

// function repeatStr(str, n) {
//   let newStr = str.repeat(n);
//   console.log(newStr);
// }

// repeatStr("Wega", 6);

/* 14. Получить имя файла. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу. */

// const pathname = "/home/user/dir/file.txt";

// function path(pathname) {
//   let result = pathname.slice(pathname.lastIndexOf("/") + 1);
//   console.log(result);
// }

// path(pathname);

/* 15. Заканчивается ли строка символами другой строки. Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки. */

// const str = "Каждый охотник желает знать";
// const str1 = "скрипт";
// const str2 = "знать";

// String.prototype.endsWith = function (substring) {
//   let newStr = str.slice(str.lastIndexOf(" ") + 1);
//   if (newStr === str2) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };

// String.prototype.endsWith();
/* version2 */

// console.log(str.endsWith(str1));
// console.log(str.endsWith(str2));

/* 16. Подстрока до/после указанного символа. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos. */

// const str = "Астрономия — Наука о небесных телах";
// let newStr;

// function getSubstr(str, char, pos) {
//   if (pos === "after") {
//     newStr = str.slice(str.indexOf(char) + 1);
//     console.log(newStr);
//   } else if (pos === "before") {
//     newStr = str.slice(0, str.indexOf(char));
//     console.log(newStr);
//   } else {
//     return str, console.log("нет совпадений");
//   }
// }

// getSubstr(str, "я", "after");

/* 17. Вставить подстроку в указанную позицию строки. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки. */

// let newStr;
// function insert(str, substr, pos = 0) {
//   if (pos <= str.length) {
//     newStr = str.slice(0, pos) + substr + str.slice(pos);
//     console.log(newStr);
//   } else {
//     console.log("число больше длины строки");
//   }
// }

// insert("Астрономия — Наука о небесных телах", "это ", 50);

/* 18. Ограничить длину строки
Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb. */

// let newStr;
// function limitStr(str, n, symb = "...") {
//   if (str.length > n) {
//     newStr = str.slice(0, n) + symb;
//     console.log(newStr);
//   } else {
//     console.log(str);
//   }
// }

// limitStr("Астрономия — Наука о небесных телах", 10);

/* 19. Количество вхождений символа в строке Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str. */

// let symb = "н";
// const str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//   let a = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === symb) {
//       a++;
//     }
//   }
//   return a, console.log("количество совпадений =", a);
// }

// count(str, symb);

/* 21. Удалить лишние пробелы из строки. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str. */

// let str = "    Max is a good      boy     ";
// let newStr;

// function strip(str) {
//   newStr = str.replace(/\s+/g, " ").replace(/^\s/, "").replace(/\s$/, "");
//   console.log(newStr);
// }

// strip(str);

/* 23. Удалить лишние слова из строки. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов. */

// let str = "Сила тяжести приложена к центру масс тела";
// let newStr;

// function cutString(str, n) {
//   newStr = str.split(" ").splice(0, n).join(" ");
//   console.log(newStr);
// }

// cutString(str, 4);

/* 24. Найти слово в строке. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word. */

// const str = "abc def ghi jkl mno pqr stu";

// function findWord(word, str) {
//   str.includes(word) ? console.log("true") : console.log("false");
// }

// findWord("gi", str);

// !============= модуль 3 ========

// ? № 1
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["jazz", "Blues"];
// genres.push("Рок-н-рол");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// // console.log(genres.splice(0, 1));
// console.log(genres.unshift("Country", "Reggae"));
// console.log("🚀 ~ genres", genres);

// ? № 2
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
//     значення яких зберігаються у змінній values у вигляді рядка.Значення гарантовано розділені пробілом.

// const values = "8 11";
// const arrValues = values.split(" ");
// console.log(arrValues[0] * arrValues[1]);

// ? № 3
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента.
// Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (fruit of fruits) {
//   console.log(`${fruits.indexOf(fruit) + 1}: ${fruit}`);
// }

// ? № 4
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const arrName = names.split(",");
// const arrPhones = phones.split(",");
// for (i = 0; i < arrName.length; i += 1) {
//   console.log(arrName[i] + ` має номер: ` + arrPhones[i]);
//   console.log(`${arrName[i]} має номер: ${arrPhones[i]}`);
// }

// ? № 5
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
//  Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
//  Скрипт повинен працювати для будь - якого рядка.

// const string = "Welcome to the future";
// const arrString = string.split(" ");
// const resArr = [];
// let resString = "";
// for (i = 1; i < arrString.length - 1; i += 1) {
//   console.log(arrString[i]);
//   resString += arrString[i] + " ";
//   resArr.push(arrString[i]);
// }
// console.log(resString);
// console.log(resArr.join(" "));

// ? № 6
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = "Welcome to the future";
// const arrString = string.split("");
// const arrMirrorString = [];
// for (i = arrString.length - 1; i >= 0; i -= 1) {
//   arrMirrorString.push(arrString[i]);
// }
// console.log(arrMirrorString.join(""));

// // * варіант 2
// let mirrorString = "";
// for (i = string.length - 1; i >= 0; i -= 1) {
//   mirrorString += string.slice(i, i + 1);
// }
// console.log("🚀 ~ mirrorString", mirrorString);

// !============= модуль 1 ========
// ? № 1
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.?
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// ? #2
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// ? #3
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ? #4
// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз
//  і т.д.значення змінної value.Використовуй методи
// Math.floor(), Math.ceil() та Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = [27.5, 27.3, 27.7];

// console.log(value.map((num) => Math.floor(num)));
// console.log(value.map((num) => Math.ceil(num)));
// console.log(value.map((num) => Math.round(num)));

// ? #5
// Склади фразу за допомогою шаблонних рядків A has B bots in stock,
//     де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${defenceBots + repairBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ? #6
// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти
// людини у метрах.
// Вага та висота зберігаються у змінних weight та height,
// але не як числа, а в вигляді рядків(спеціально для завдання).
// Hе цілі числа можуть бути задані у вигляді 24.7 або 24, 7,
//     тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";
// function ifStringToNumber(string) {
//   if (Number(string)) {
//     return string;
//   } else {
//     return Number(string.replace(",", "."));
//   }
// }
// function bmi(weight, height) {
//   return (ifStringToNumber(weight) / ifStringToNumber(height) ** 2).toFixed(1);
// }

// console.log(bmi(weight, height)); // 28.8

// ? #9
// Отрефактори код так, щоб у змінну value присвоювалося значення
// змінної incomingValue, якщо воно не рівне undefined або null.
// В іншому випадку має присвоюватися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue:
// null, undefined, 0, false.
// Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = null;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ? #10
// Напиши скрипт, який переведе значення totalMinutes(кількість хвилин)
//  в рядок у форматі годин та хвилин HH: MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 181;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

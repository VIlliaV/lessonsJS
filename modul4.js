// !============= модуль 4 ========

// ? № 1

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
//  Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані як рядки.
//  Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7,
//     тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//   return (ifStringToNumber(weight) / ifStringToNumber(height) ** 2).toFixed(1);
// }

// function ifStringToNumber(stringOrNumber) {
//   if (!Number(stringOrNumber.replace(`,`, `.`))) {
//     console.log(`${stringOrNumber} це не число. Цьому параметру присвоєна 1`);
//     return 1;
//   } else return stringOrNumber.replace(`,`, `.`);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

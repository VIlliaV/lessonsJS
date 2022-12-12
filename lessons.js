// Напиши скрипт, який розраховує індекс маси тіла людини.
//  Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа,
//     а в вигляді рядків(спеціально для завдання).Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7,
//         тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = "88,3";
let height = "1.75";
function ifStringToNumber(string) {
  if (Number(string)) {
    return string;
  } else {
    return Number(string.replace(",", "."));
  }
}
function bmi(weight, height) {
  return (ifStringToNumber(weight) / ifStringToNumber(height) ** 2).toFixed(1);
}

console.log(bmi(weight, height));// 28.8


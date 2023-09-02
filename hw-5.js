// 2.5 Функции


// Задание 1
// Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4.
// Если передадим 6 и 6, то функция должна вернуть 6.
function getLess(firtstParameter, secondParameter) {
    return firtstParameter < secondParameter ? firtstParameter : secondParameter;
}

console.log(getLess(8, 4));
console.log(getLess(6, 6));


// Задание 2
// Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.
function getMessage(parameter) {
    return parameter % 2 == 0 ? "Число четное" : "Число нечетное";
}

console.log(getMessage(8));
console.log(getMessage(7));


// Задание 3
// 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
// 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.
function printNumberSquare(parameter) {
    console.log(parameter ** 2);
}

function getNumberSquare(parameter) {
    return parameter ** 2;
}

printNumberSquare(3);
console.log(getNumberSquare(4));


// Задание 4
// Создайте функцию, которая:
// Спрашивает у пользователя, сколько ему лет.
// Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
// Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».
// *Подсказка: можете выполнить это задание с помощью оператора
// if else
let userAge;
let resultText;

userAge = prompt("Сколько Вам лет?");

if (userAge < 0) {
    resultText = "Вы ввели неправильное значение";
}
else if (userAge >= 0 && userAge <= 12) {
    resultText = "Привет, друг!";
}
else {
    resultText = "Добро пожаловать!";
}

alert(resultText);

// Задание 5
// Напишите функцию, которая на вход принимает 2 числа:
// Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и
// isNaN() помогут.)
// Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
// Если оба параметра — числа, то вернуть произведение данных чисел.
function getNumbersMultiplication(firstParameter, secondParameter) {
    let firstNumber = Number(firstParameter);
    let secondNumber = Number(secondParameter);

    return isNaN(firstNumber) || isNaN(secondNumber) ? "Одно или оба значения не являются числом" : firstNumber * secondNumber;
}

console.log(getNumbersMultiplication(7, 3));
console.log(getNumbersMultiplication(NaN, 4));
console.log(getNumbersMultiplication(6, NaN));


// Задание 6
// Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку:
// 'n в кубе равняется <получившееся значение>'. Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.
// Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами
// от 0 до 10 включительно.
function askUserNumber() {
    let userNumber = prompt("Введите число");

    if (isNaN(userNumber) || userNumber === "" || userNumber === " " || userNumber === null) {
        console.log("Переданный параметр не является числом");
    }
    else {
        console.log(`${userNumber} в кубе равняется ${userNumber ** 3}`);
    }
}

askUserNumber();


// Задание 7
// Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea
// , которое возвращает площадь круга через радиус, а также getPerimeter, который возвращает периметр окружности.
function getClientArea() {
    return Math.PI * this.radius ** 2;
}

function getCllientPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 =
{
    radius: 12,

    getArea: getClientArea,
    getPerimeter: getCllientPerimeter
}

const circle2 =
{
    radius: 18,

    getArea: getClientArea,
    getPerimeter: getCllientPerimeter
}

console.log(`First circle area = ${circle1.getArea()}`);
console.log(`First circle perimeter = ${circle1.getPerimeter()}`);

console.log(`Second circle area = ${circle2.getArea()}`);
console.log(`Second circle perimeter = ${circle2.getPerimeter()}`);

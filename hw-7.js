// 2.7 Встроенные объекты


// Задание 1
// Преобразуйте строку js в верхний регистр JS.
let originalString = "js";

console.log(originalString.toUpperCase());


// Задание 2
// Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив,
// содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.
let stringArray = ["map", "value", "pen", "machine", "table"];
let stringValue = "ma";

let resulArray = [];

function getResultArray(stringArrayParameter, stringValueParameter) {
    let array = [];

    stringArrayParameter.forEach(parameter => {
        parameter = parameter.toLowerCase();
        stringValueParameter = stringValueParameter.toLowerCase();

        if (parameter.startsWith(stringValueParameter)) {
            array.push(parameter);
        }
    });

    return array;
}

resulArray = getResultArray(stringArray, stringValue);

console.log(`resulArray - ${resulArray}`);


// Задание 3
// Округлите число 32.58884:
// До меньшего целого
// До большего целого
// До ближайшего целого
console.log(`Меньшее целое для 32.58884 - ${Math.floor(32.58884)}`);
console.log(`Большее целое для 32.58884 - ${Math.ceil(32.58884)}`);
console.log(`Ближайшее целое для 32.58884 - ${Math.round(32.58884)}`);


// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.
let numbersArray = [52, 53, 49, 77, 21, 32];

console.log(`Наименьшее число из исходного массива - ${Math.min(...numbersArray)}`);
console.log(`Наибольшее число из исходного массива - ${Math.max(...numbersArray)}`);


// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
console.log(`Random value from 1 to 10 - ${getRandomValueFromRange(1, 10) + 1}`);   // function from tast 7


// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа.
// Длина массива должна быть в 2 раза меньше переданного числа.
let resultRandomNumbersArray = [];
let maximumValue = 20;

function getRandomNumbersArray(value) {
    let randomNumbersArray = [];
    let resultArrayLength = Math.floor(value / 2);

    for (let index = 0; index < resultArrayLength; index++) {
        let randomValue = Math.random() * (value + 1);
        randomValue = Math.floor(randomValue);

        randomNumbersArray.push(randomValue);
    }

    return randomNumbersArray;
}

resultRandomNumbersArray = getRandomNumbersArray(maximumValue);

console.log(`Массив случайных целых чисел от 0 до ${maximumValue} - ${resultRandomNumbersArray}`);


// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.
let randomValueFromRange;

function getRandomValueFromRange(firstValue, secondValue) {
    return Math.floor(Math.random() * (secondValue - firstValue));
}

randomValueFromRange = getRandomValueFromRange(5, 167);

console.log(`Random value - ${randomValueFromRange}`);


// Задание 8
// Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.
console.log(`Current date - ${new Date()}`);


// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.
let currentDate = new Date();
let nextDate = new Date();

nextDate.setDate(currentDate.getDate() + 73)

console.log(`Result date - ${nextDate}`);


// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.
const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

let anyFutureDate = new Date(2024, 5, 25, 12, 30, 20, 10);

function printDetaileDate(randomDate) {
    let dayOfWeek = randomDate.getDay();
    let dayOfMonth = randomDate.getDate();
    let month = randomDate.getMonth();
    let year = randomDate.getFullYear();

    let hour = randomDate.getHours();
    let minute = randomDate.getMinutes();
    let second = randomDate.getSeconds();

    console.log(`Дата: ${dayOfMonth} ${months[month]} ${year} - это ${days[dayOfWeek]}`);
    console.log(`Время: ${hour}:${minute}:${second}`);
}

printDetaileDate(anyFutureDate);
// 2.6 Массивы

// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.
let arrayTaskOne = [1, 5, 4, 10, 0, 3];

for (let index = 0; index < arrayTaskOne.length; index++) {
    const element = arrayTaskOne[index];

    console.log(`element = ${element}`);

    if (element == 10) {
        break;
    }
}


// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите позицию (индекс) числа 4 в этом массиве.
// Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.
let arrayTaskTwo = [1, 5, 4, 10, 0, 3];

console.log(`Index of 4 - ${arrayTaskOne.indexOf(4)}`);


// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').
let arrayTaskThree = [1, 3, 5, 10, 20];

console.log(arrayTaskThree.join(" "));


// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].
let arrayTaskFour = [];

for (let horizontalIndex = 0; horizontalIndex < 3; horizontalIndex++) {
    arrayTaskFour[horizontalIndex] = [];

    for (let verticalIndex = 0; verticalIndex < 3; verticalIndex++) {
        arrayTaskFour[horizontalIndex][verticalIndex] = 1;
    }
}

console.log(arrayTaskFour);


// Задание 5
// Дан массив: [1, 1, 1].
// Добавьте в конец массива значения 2, 2, 2.
let arrayTaskFive = [1, 1, 1];

arrayTaskFive.push(2, 2, 2);

console.log(arrayTaskFive);


// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.
let arrayTaskSix = [9, 8, 7, 'a', 6, 5];

arrayTaskSix.sort();
arrayTaskSix.pop();

console.log(arrayTaskSix);


// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал»,
// в противном случае вывести «Не угадал».
let arrayTaskSeven = [9, 8, 7, 6, 5];

let userNumber = Number(prompt("Угадайте число"));
arrayTaskSeven.includes(userNumber) ? console.log("Угадал") : console.log("Не угадал");


// Задание 8
// Дана строка: 'abcdef'.
// Необходимо, чтобы программа вывела в консоль 'fedcba'.
let originalString = 'abcdef';
let reversedString;

reversedString = Array.from(originalString);
reversedString.reverse();

console.log(reversedString);


// Задание 9
// Дан массив: [[1, 2, 3,],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].
let arrayTaskNine =
    [
        [1, 2, 3],
        [4, 5, 6]
    ];

let oneDimensionalArray = arrayTaskNine.reduce((fisrtArray, secondArray) => fisrtArray.concat(secondArray));

console.log(oneDimensionalArray);


// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for
// и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего.
let arrayTaskTen = [5, 7, 3, 6, 1, 0, 8, 2, 1];

for (let index = 0; index < arrayTaskTen.length - 1; index++) {
    console.log(`${arrayTaskTen[index]} + ${arrayTaskTen[index + 1]} = ${arrayTaskTen[index] + arrayTaskTen[index + 1]}`);
}


// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
let arrayTaskEleven = [5, 7, 3, 6, 1, 0, 8, 2, 1];
let resultArray;

function getArrayWitnSquareElements(originalArray) {
    let array = [];

    for (let index = 0; index < originalArray.length; index++) {
        array[index] = originalArray[index] ** 2;
    }

    return array;
}

resultArray = getArrayWitnSquareElements(arrayTaskEleven);

console.log(resultArray);

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
// Пример вызова: getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]
let originalWordsArray = ["слово", "", "слог", "длинное предложение", "буква"];
let lengthWordsArray = [];

function getLengthWordsArray(wordsArray) {
    let array = [];

    for (let index = 0; index < wordsArray.length; index++) {
        let element = wordsArray[index];
        let length = String(element).length;
        array[index] = length;
    }

    return array;
}

lengthWordsArray = getLengthWordsArray(originalWordsArray);

console.log(lengthWordsArray);


// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.
// function filterPositive(array) {
//   // Допишите код функции
// }

// filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
// filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]
let filteredArray = [];

function filterPositive(numbersArray) {
    let array = [];

    for (let index = 0; index < numbersArray.length; index++) {
        let element = numbersArray[index];

        if (element < 0) {
            array.push(element);
        }
    }

    return array;
}

filteredArray = filterPositive([-1, 0, 5, -10, 56]);
console.log(filteredArray);

filteredArray = filterPositive([-25, 25, 0, -1000, -2]);
console.log(filteredArray);
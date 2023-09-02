// 2.8 Callback, setTimeout, setInterval
//
// Задание 1
// С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.
// Пример сортировки по свойству в массиве объектов вы можете найти в документации:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort.
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];
//
// Допишите колбэк для sort, изучите, как работает колбэк, в документации
// console.log(people.sort(...));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

const peopleTaskOne = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function compareRule(firstMan, secondMan) {
    let compareValue = 0; {
        let firstManAge = firstMan.age;
        let secondManAge = secondMan.age;

        if (firstManAge < secondManAge)
            compareValue = -1;
        if (firstManAge > secondManAge)
            compareValue = 1;
    }

    return compareValue;
};

console.log(peopleTaskOne.sort(compareRule));


// Задание 2
// Реализуйте функцию filter, которая должна работать аналогично методу массива filter.
// За основу возьмите функцию map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том,
// добавлять в результирующий массив очередной элемент или нет.
// Возьмите за основу код ниже. Задание считается выполненным, если два console.log в коде выводят правильное значение:
// function isPositive() {
// писать код тут
// }
// function isMale() {
// писать код тут
// }
// function filter() {
// писать код тут
// }
//
// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
//
// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];
//
// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

const values = [3, -4, 1, 9];

const peopleTaskTwo = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

function isPositive(value) {
    return value > 0 ? true : false;
}

function isMale(manObject) {
    return manObject.gender === "male" ? true : false;
}

function filter(specificArray, ruleFunction) {
    let outputArray = [];

    for (let index = 0; index < specificArray.length; index++) {
        let checkedValue = specificArray[index];

        if (ruleFunction(checkedValue)) {
            outputArray.push(checkedValue)
        }
    }

    return outputArray;
}

console.log(filter(values, isPositive));
console.log(filter(peopleTaskTwo, isMale));


// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату.
// Последней строкой должно выводиться сообщение «30 секунд прошло».

let rigthNowDate = new Date();
let interval = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
}, 30000);


// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
// Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.
// function delayForSecond(callback) {
// Код писать можно только внутри этой функции
//    callback();
// }
//
// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })
function delayForSecond(callback) {
    setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


// Задание 5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
//
// Привет, Глеб!
// Прошла одна секунда
//
// Правильный порядок:
// Прошла одна секунда
// Привет, Глеб!
//
// Исправьте код, чтобы он выводил сообщения в правильном порядке:

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
// а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }
//
//     }, 1000)
// }
//
// Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }
//
// Код выше менять нельзя
//
// Нужно изменить код ниже:
// delayForSecond(sayHi('Глеб'))

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
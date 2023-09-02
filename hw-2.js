// 2.2 Переменные. Типы данных


// Задание 1
// Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода alert().
// Затем запишите в нее значение 20, выведите его на экран.
let a;

a = 10;
alert(a);

a = 20;
alert(a);


// Задание 2
// Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран.
const iPhoneBirthYear = 2007;
alert(iPhoneBirthYear);


// Задание 3
// Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран.
const javaScriptAuthor = "Brendon Eich";
alert(javaScriptAuthor);


// Задание 4
// Создайте две переменные 10 и 2. С помощью метода alert() выведите на экран их сумму, разность,
// произведение и частное (результат деления).
let firtstParameter;
let secondParameter;

firtstParameter = 10;
secondParameter = 2;

alert(`a + b = ${firtstParameter + secondParameter}`);
alert(`a - b = ${firtstParameter - secondParameter}`);
alert(`a * b = ${firtstParameter * secondParameter}`);
alert(`a / b = ${firtstParameter / secondParameter}`);


// Задание 5
// Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert().
let result;

result = 2 ** 5;
alert(`2 ^ 5 = ${result}`);


// Задание 6
// Даны переменные: aa = 9 и bb = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода alert().
let aa;
let bb;

aa = 9;
bb = 2;

alert(`aa % bb = ${aa % bb}`);


// Задание 7
// Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):
// let num = 1;
// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;
// alert(num);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = num++;
num = num--;
alert(num);


// Задание 8
// Создайте переменную age, присвойте значение с помощью метода prompt() "Сколько Вам лет?". Результат вывести с помощью alert().
let age;

age = prompt("Сколько Вам лет?");
alert(`Вам ${age}`);


// Задание 9.0
// Создайте объект user, у которого есть следующие свойства: name, age, isAdmin. Значения для свойств придумайте произвольные.
// Обратите внимание, что для свойства name значение должно быть строковым, для age – числовым, а для isAdmin – булевым.
const user =
{
    name: "Sergey",
    age: 35,
    isAdmin: true
};


// Задание 9.1
// Добавьте объекту user свойство city of residence. Обратите внимание на то, как правильно добавлять такие методы:
// через точку или с помощью квадратных скобок.
user["city of residence"] = "Chelyabinsk";
alert(user["city of residence"]);


// Задание 9.2
// Измените у объекта user свойство age на любое другое новое значение.
user.age = 20;
alert(user.age);


// Задание 9.3
// Удалите у объекта user свойство "city of residence".
delete user["city of residence"];


// Задание 9.4
// Создайте переменную info, присвойте ей значение с помощью метода prompt() "Какую информацию хотите узнать о пользователе?".
// Далее обращайтесь к свойствам объекта user через переменную info. Выведите результат с помощью alert.
let info;

info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);


// Задание 10
// С помощью метода prompt() спросите у пользователя его имя и сохраните в переменную. С помощью метода alert()
// выведите на экран шаблонную строку: Привет, ИМЯ!
// Подсказка: вставить ! можно через кавычки
let userName;

userName = prompt("Как Ваше имя?");
alert(`Привет, ${userName}!`);
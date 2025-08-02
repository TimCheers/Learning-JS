console.log("Task 1 ->");
/*
Получи значения name, email и city через деструктуризацию.

Используя rest-оператор, получи объект, содержащий оставшиеся свойства (всё, кроме name и email).
*/
const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    city: "Tokyo"
};
const { name, email, city, ...other } = user;
console.log(name, email, city, other);

console.log("\n\nTask 2 ->");
/*
Получи первые два цвета в переменные firstColor и secondColor.

Помести оставшиеся цвета в новый массив otherColors с помощью rest-оператора.
*/
const colors = ["red", "green", "blue", "yellow"];
const [red, green, ...otherColors] = colors;
console.log(red, green, otherColors);

console.log("\n\nTask 3 ->");
/*
Получи только 1-й и 3-й элементы массива в переменные firstFruit и thirdFruit.
*/
const fruits = ["apple", "banana", "cherry", "date"];
const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit, thirdFruit);


console.log("\n\nTask 4 ->");
/*
Извлеки число 4 в переменную num4 с помощью деструктуризации.
*/
const matrix = [[1, 2], [3, 4], [5, 6]];
//const [[,], [, needNubm], [,]] = matrix; !!! WRONG !!!
const [, [, needNubm]] = matrix;
console.log(needNubm);


console.log("\n\nTask 5 ->");
/*
Используй деструктуризацию параметров в теле функции, чтобы получить только username и role.
*/
const person = { id: 101, username: "bob", role: "admin" };
function f1({ username: curUsername, role: userRole }) {
    console.log(curUsername, userRole);
}
f1(person);

console.log("\n\nTask 6 ->");
/*
Поменяй значения переменных местами без использования временной переменной (temp), используя деструктуризацию.
*/
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);


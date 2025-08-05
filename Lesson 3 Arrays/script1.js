console.log("🟩 Task 1: Создание массива разными способами");
//
// Создай массивы:
// - через литерал
// - с помощью конструктора new Array
// - с помощью Array.of()
// - с помощью Array.from() из строки и множества
//
const arr1 = [];
const arr2 = new Array();
const arr3 = Array.of("a", "b", "c");
const arr4 = Array.from("Hello");
const arr5 = Array.from(arr3);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);


console.log("🟩 Task 2: Свойство length");
//
// Проверь длину созданных массивов.
// Попробуй задать длину вручную.
// Что произойдёт, если length уменьшить или увеличить?
//
//При увеличении длины массива добавятся пустые элементы, при уменшении длины массива крайние элементы будут удален.
console.log(arr3.length);
arr3.length = 5;
console.log(arr3.length);
console.log(arr3);
arr3.length = 2;
console.log(arr3);


console.log("🟩 Task 3: Spread-оператор: объединение массивов");
//
// Объедини 2 массива в 1 с помощью spread.
// Используй числа и строки.
//
const arr6 = [...arr3, "For example", ...arr4];
console.log(arr6);


console.log("🟩 Task 4: Spread-оператор: передача аргументов");
//
// Напиши функцию, принимающую три аргумента.
// Передай ей массив из трёх элементов через spread.
//
arr3[2] = "c";
function print(a, b, c) {
    console.log(`${a}, ${b}, ${c}`);
}
print(...arr3);


console.log("🟩 Task 5: Spread-оператор: копирование массива");
//
// Создай копию массива.
// Убедись, что это не ссылка на оригинал.
//
const arr3Copy = [...arr3];
arr3Copy[0] = "WWW";
console.log(arr3);
console.log(arr3Copy); //arr3[0] не изменился, значит это не ссылка 


console.log("🟩 Task 6: Добавление данных");
//
// Добавь элементы в массив с помощью push(), unshift().
//
arr3Copy.push("last");
arr3Copy.unshift("first");
console.log(arr3Copy);


console.log("🟩 Task 7: Добавление по индексу");
//
// Присвой элемент по конкретному индексу.
// Что будет, если индекс выходит за текущие границы?
//
arr3Copy.splice(3, 0, "midle");
console.log(arr3Copy);
arr3Copy.splice(7, 0, "test");
console.log(arr3Copy); //Если выйти за текущие границы, элемент будет добавлен в конец


console.log("🟩 Task 8: Удаление данных");
//
// Удали элементы с помощью pop() и shift().
//
arr3Copy.pop();
arr3Copy.shift();
console.log(arr3Copy);


console.log("🟩 Task 9: Удаление по индексу через splice()");
//
// Удали элемент из середины массива.
//
arr3Copy.splice(2, 1);
console.log(arr3Copy);


console.log("🟩 Task 10: Замена элементов");
//
// Замени несколько элементов в массиве с помощью splice().
//
arr3Copy.splice(1, 2, "B", "C");
console.log(arr3Copy);


console.log("🟩 Task 11: Копирование массива");
//
// Сделай копию массива с помощью slice().
//
const arr3CopyX2 = arr3Copy.slice();
arr3CopyX2[2] = "QWERTY";
console.log(arr3);
console.log(arr3Copy);
console.log(arr3CopyX2);


console.log("🟩 Task 12: Получение элементов вне диапазона. toSpliced()");
//
// Используй toSpliced(), чтобы получить новый массив с вырезанными элементами.
//
const arr7 = arr3Copy.toSpliced(2, 2, "LOL", "KEK");
console.log(arr7);
const arr8 = arr3Copy.toSpliced(1, 2);
console.log(arr8);


console.log("🟩 Task 13: Сортировка: sort() и toSorted()");
//
// Отсортируй массивы с числами и строками.
// Используй sort() и toSorted().
// Проверь, влияет ли это на оригинал.
//
const arrNumb = [15, 200, 35, 5]
const arrStr = ["Tom", "Sam", "Bob", "Alice", "Kate"]
const arrNumbSortCopy = arrNumb.toSorted((a, b) => a - b);
const arrStrSortCopy = arrStr.toSorted();
console.log("Сортированные копии:");
console.log(arrNumbSortCopy);
console.log(arrStrSortCopy);
console.log("Оригиналы после копии:");
console.log(arrNumb);
console.log(arrStr);
console.log("Оригиналы после сортировки:");
arrNumb.sort((a, b) => a - b)
arrStr.sort();
console.log(arrNumb);
console.log(arrStr);

console.log("🟩 Task 14: Обратный порядок: reverse() и toReversed()");
//
// Разверни массив обычным и безопасным методом.
//
const arr9 = arrNumb.toReversed();
arrNumb.reverse();
console.log(arr9);
console.log(arrNumb);


console.log("🟩 Task 15: Поиск индекса элемента");
//
// Используй indexOf() и lastIndexOf().
//
arrNumb.splice(3, 0, 200);
console.log(arrNumb);
console.log(arrNumb.indexOf(200));
console.log(arrNumb.lastIndexOf(200));


console.log("🟩 Task 16: Проверка наличия элемента");
//
// Используй includes().
//
console.log(arrNumb.includes(35));
console.log(arrNumb.includes(35, 2));


console.log("🟩 Task 16.1 Пропущенные подтемы");
const numbers = [1, -12, 8, -4, 25, 42];
const passed = numbers.every(n => n > 0);
console.log(passed);
const numbers1 = [1, -12, 8, -4, 25, 42];
const passed1 = numbers1.some(n => n > 0);
console.log(passed1); // true
const numbers2 = [1, -12, 8, -4, 25, 42];
const filteredNumbers = numbers2.filter(n => n > 0);
console.log(filteredNumbers); // [1, 8, 25, 42]


console.log("🟩 Task 17: Перебор forEach()");
//
// Перебери массив и выведи каждый элемент с его индексом.
//
arrNumb.forEach((n, i) =>
    console.log(`${i}: ${n}`)
); 


console.log("🟩 Task 18: map()");
//
// Преобразуй массив чисел: возведи каждое число в квадрат.
//
const squares = arrNumb.map(n => n * n);
console.log(squares);

console.log("🟩 Task 19: Поиск элементов");
//
// Найди элемент в массиве объектов с помощью find() и findIndex().
//
console.log(arrNumb.find(n => n < 20));
console.log(arrNumb.findIndex(n => n < 20));


console.log("🟩 Task 20: flat() и преобразование");
//
// Сделай массив из вложенных массивов и "расплющи" его.
//
const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
const flattenPeople = people.flat(2);
console.log(flattenPeople);


console.log("🟩 Task 21: Метод with()");
//
// Измени элемент массива на конкретной позиции с помощью with().
//
const arrNumb2 = arrNumb.with(0, 100);
console.log(arrNumb);
console.log(arrNumb2);


console.log("🟩 Task 22: reduce()");
//
// Используй reduce(), чтобы посчитать сумму всех чисел в массиве.
//
const sum = arrNumb.reduce((prev, current) => prev += current);
console.log(sum);


console.log("🟩 Task 23: Комбинирование методов");
//
// Преобразуй массив: отфильтруй чётные, удвой, просуммируй результат.
//
const dSum = arrNumb
    .filter(n => n % 2 == 0)
    .map(n => n * 2)
    .reduce((prev, current) => prev += current);
console.log(dSum);


console.log("🟩 Task 24: Наследование массивов");
//
// Создай класс CustomArray, унаследованный от Array.
// Переопредели метод push(), чтобы он писал в консоль, сколько элементов добавлено.
//
class CustomArray extends Array {
    constructor(...elem) {
        super(...elem);
    }
    push(...nums) {
        console.log("Элементов добавлено " + nums.length);
        super.push(...nums);
    }
}
const specificArrey = new CustomArray(2, 5, 32, 23, 34, 654, 2, 65, 6);
console.log(specificArrey);
specificArrey.push(...arrNumb);
console.log(specificArrey);
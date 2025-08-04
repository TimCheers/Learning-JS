console.log("Task 1 ->");
/*
Task 1: Определение класса
Создай класс User, который описывает пользователя с именем и возрастом. Класс должен содержать метод greet, который выводит в консоль приветствие с именем.
*/
class User {
    name;
    age;
    greet() {
        console.log(`Привет, меня зовут ${this.name}`);
    };
}


console.log("\n\nTask 2 ->");
/*
 Task 2: Создание объектов
Используя класс User, создай два объекта с разными значениями имени и возраста.
*/
const tom = new User();
tom.age = 12;
tom.name = "Tom";
const tim = new User();
tim.age = 21;
tim.name = "Tim";
console.log(tom);
tom.greet();
console.log(tim);
tim.greet();


console.log("\n\nTask 3 ->");
/*
Task 3: Поля и свойства класса
В классе Product добавь публичные поля name, price. Создай объект, задай значения полям и выведи их в консоль.
*/
class Product {
    name;
    price;
}
const pr = new Product();
pr.name = "meat";
pr.price = 1200;
console.log(pr);


console.log("\n\nTask 4 ->");
/*
Task 4: Поведение класса и его методы
Создай класс Rectangle, который принимает ширину и высоту, и имеет метод getArea, возвращающий площадь прямоугольника.
*/
class Rectangle {
    height;
    width;
    getArea() {
        return this.height * this.width;
    }
}
const newFig = new Rectangle();
newFig.height = 10;
newFig.width = 5;
console.log(newFig.getArea());


console.log("\n\nTask 5 ->");
/*
 Task 5: Обращение к полям и методам внутри класса. Слово this
Внутри метода класса Counter используй this, чтобы получить доступ к полю count. Метод increment должен увеличивать count на 1.
*/
class Counter {
    count;
    increment() {
        this.count++;
    }
}
const x = new Counter();
x.count= 5;
console.log(structuredClone(x))
x.increment();
console.log(structuredClone(x))
x.increment();
console.log(structuredClone(x))


console.log("\n\nTask 6 ->");
/*
Task 6: Определение конструктора
Создай класс Book с полями title, author, которые инициализируются через конструктор. Добавь метод getInfo, возвращающий строку "Название - Автор".
*/
class Book{
    title;
    author;
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    getInfo(){
        return `${this.title} - ${this.author}`;
    }
}
const newBook = new Book("Peace", "TimCheers");
console.log(newBook.getInfo());

console.log("\n\nTask 7 ->");
/*
Task 7: Выражения классов
Создай класс как выражение и присвой его переменной Car. Убедись, что можно создать объект new Car(...) и вызвать метод info().
*/
class Car{
    brand;
    country;
    constructor(brand, country){
        this.brand = brand;
        this.country = country;
    }
    getInfo(){
        return `${this.brand} - ${this.country}`;
    }
}
const bmw = new Car("BMW", "German");
console.log(bmw.getInfo());

console.log("\n\nTask 8 ->");
/*
Task 8: Получение прототипа
Создай класс Animal с методом speak(). Создай объект и получи его прототип с помощью Object.getPrototypeOf.
*/
class Animal{
    speak(){
        console.log("Speaking");
    }
}
const dog = new Animal();
console.log(Object.getPrototypeOf(dog));
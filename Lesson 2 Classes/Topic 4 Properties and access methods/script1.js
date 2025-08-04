console.log("Task 1 ->");
/*
🟩 Task 1: Свойства только для чтения
Описание:
Создай класс Book.
Добавь поле #title и сделай геттер title, чтобы получать название книги.
Запрети изменение названия после создания.
Создай экземпляр и проверь, что изменение title извне невозможно.
*/
class Book {
    #title;                     //т.к. поле приватное, запрет на запись по умолчанию
    constructor(title) {
        this.#title = title;
    }
    get title() {
        return this.#title;
    }
}
const x = new Book("QWERTY");
x.title = "WASD";
console.log(x.title);

console.log("\n\nTask 2 ->");
/*
🟩 Task 2: Свойства только для установки
Описание:
Создай класс TemperatureSensor.
Сделай сеттер temperature, который принимает значение и сохраняет его во внутреннем приватном поле.
Сделай так, чтобы получить значение температуры было нельзя (без геттера).
Проверь работу, установив несколько значений.
*/
class TemperatureSensor {
    #temperature;
    set temperature(t) {
        this.#temperature = t;
    }
}
const z = new TemperatureSensor();
z.temperature = -132;
console.log(z.temperature);


console.log("\n\nTask 3 ->");
/*
🟩 Task 3: Свойства без обращения к полям
Описание:
Создай класс Rectangle.
Добавь два публичных свойства width и height.
Создай геттер area, который возвращает площадь (width * height), но не использует отдельное поле для хранения площади.
Создай несколько прямоугольников и выведи их площади через геттер.
*/
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
}
const y1 = new Rectangle(2, 4);
const y2 = new Rectangle(5, 21);
const y3 = new Rectangle(3, 4);
console.log(y1.area);
console.log(y2.area);
console.log(y3.area);


console.log("\n\nTask 4 ->");
/*
🟩 Task 4: Геттер и сеттер с проверкой
Описание:
Создай класс User.
Добавь поле #age.
Геттер age должен возвращать возраст, а сеттер — устанавливать его, только если возраст больше 0.
Создай пользователя, попробуй задать некорректный возраст.
*/
class User {
    #age;
    get age() {
        return this.#age;
    }
    set age(age) {
        if (age > 0) {
            this.#age = age;
        }
        else {
            console.warn("Некорректный возраст!");
        }
    }
}
const tim = new User();
tim.age = 34;
tim.age = -5;
console.log(tim.age);


console.log("\n\nTask 5 ->");
/*
🟩 Task 5: Комбинированный
Описание:
Создай класс Circle с приватным полем #radius.
Добавь:
геттер radius (чтение радиуса),
сеттер diameter (изменяет радиус на половину переданного диаметра),
геттер area (вычисляет площадь круга).
Проверь, как изменения диаметра влияют на остальные значения.
*/
class Circle {
    #radius = 15;
    get radius() {
        return this.#radius;
    }
    set diameter(val) {
        if (val > 0) {
            this.#radius = val / 2;
        }
        else{
            console.warn("Некорректное значение!");
        }
    }
    get area(){
        return 3.14 * Math.pow(this.#radius, 2);
    }
}
const q = new Circle();
console.log(structuredClone(q.radius));
console.log(structuredClone(q.area));
q.diameter = 40;
console.log(structuredClone(q.radius));
console.log(structuredClone(q.area));
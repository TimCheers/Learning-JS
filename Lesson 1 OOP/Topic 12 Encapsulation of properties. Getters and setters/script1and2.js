console.log("Task 1 ->");
/*
Создай объект user с приватным свойством _name.
Добавь:
геттер name, который возвращает значение _name,
сеттер name, который устанавливает новое имя, если оно длиннее 2 символов.

Выведи начальное имя, попробуй установить короткое, затем корректное имя.

Измените функцию-конструктор Person, чтобы добавилось ещё одно приватное поле _age.

Добавьте соответствующие геттер и сеттер.

В сеттере реализуйте валидацию: возраст должен быть положительным числом и не превышать 120.

При некорректном значении выводите сообщение об ошибке.
*/
function User(name, age) {
    let _name = name;
    let _age = age;
    this.getName = function () { return _name; }
    this.getAge = function () { return _age; }
    this.setName = function (name) {
        if (name.length > 2) {
            _name = name;
        }
        else {
            console.log("Недопустимое значение");
        }
    }
    this.setAge = function (age) {
        if (age > 0 && age <= 120) {
            _age = age;
        }
        else {
            console.log("Недопустимое значение");
        }
    }
}
var user = new User("Tim", 12);
console.log(user.getName());
user._name = "QWERTY";
console.log(user.getName());
user.setName("qq");
console.log(user.getName());
user.setName("Artem");
console.log(user.getName());

console.log(user.getAge());
user.setAge(-50);
console.log(user.getAge());
user.setAge(23);
console.log(user.getAge());

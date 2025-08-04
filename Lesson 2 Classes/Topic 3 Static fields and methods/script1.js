console.log("Task 1 ->");
/*
Тема: Статические поля
✅ Задание 1:
Создай класс AppConfig.
Добавь статическое поле appName, равное "MyApp".
Выведи это поле в консоль без создания экземпляра класса.
*/
class AppConfig {
    static appName = "MyApp";
}
console.log(AppConfig.appName);


console.log("\n\nTask 2 ->");
/*
Тема: Статические методы
✅ Задание 2:
Создай класс NumberTools.
Добавь статический метод isEven(n), возвращающий true, если число чётное.
Проверь метод на нескольких числах.
*/
class NumberTools {
    static isEven(n) {
        if (n % 2 == 0) return true;
        else return false;
    }
}
console.log(NumberTools.isEven(4));
console.log(NumberTools.isEven(16));
console.log(NumberTools.isEven(9));
console.log(NumberTools.isEven(123));


console.log("\n\nTask 3 ->");
/*
Тема: Приватные статические поля
✅ Задание 3:
Создай класс APIKeyStore.
Объяви приватное статическое поле #key, инициализированное строкой "123ABC".
Добавь публичный статический метод getKey(), возвращающий значение поля.
Проверь, что нельзя получить доступ к #key извне.
*/
class APIKeyStore{
    static #key = "123ABC";
    static getKey(){
        return this.#key;
    }
}
// console.log(APIKeyStore.#key); Невозможно
console.log(APIKeyStore.getKey());


console.log("\n\nTask 4 ->");
/*
Тема: Приватные статические методы
✅ Задание 4:
Создай класс Hasher.
Создай приватный статический метод #addSalt(value), добавляющий к строке "SALT_" перед значением.
Добавь публичный статический метод hash(value), который вызывает #addSalt и возвращает результат.
Вызови метод hash и проверь результат.
*/
class Hasher{
    static #addSalt(value){
        return ("SALT_" + value);
    }
    static hash(value){
        return this.#addSalt(value);
    }
}
console.log(Hasher.hash("WoW"));


console.log("\n\nTask 5 ->");
/*
Комбинированное задание
✅ Задание 5:
Создай класс TicketCounter.
Добавь приватное статическое поле #counter, инициализированное 0.
Добавь публичный статический метод nextTicket(), который увеличивает значение #counter и возвращает его.
Вызови метод несколько раз и проверь, как меняется значение.
*/
class TicketCounter{
    static #counter = 0;
    static nextTicket(){
        this.#counter++;
        return this.#counter;
    }
}
console.log(structuredClone(TicketCounter.nextTicket()));
console.log(structuredClone(TicketCounter.nextTicket()));
console.log(structuredClone(TicketCounter.nextTicket()));
console.log(structuredClone(TicketCounter.nextTicket()));

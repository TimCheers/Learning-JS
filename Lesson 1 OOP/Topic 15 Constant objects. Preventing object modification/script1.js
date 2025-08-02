console.log("Task 1 ->");
/*
1. Создай объект const config = { lang: "en", theme: "light" }
2. Измени значение свойства lang.
3. Попробуй переназначить переменную config.
*/
const config = { lang: "en", theme: "light" };
config.lang = "ru";
console.log(structuredClone(config));
//Ошибка - > config = {lang: "jp", theme: "dark"};
console.log(structuredClone(config));


console.log("\n\nTask 2 ->");
/*
1. Создай объект settings = { darkMode: true }
2. Запрети расширение объекта.
3. Попробуй добавить свойство notifications.
4. Убедись, что объект не расширился.
*/
const settings = { darkMode: true };
Object.preventExtensions(settings);
settings.notifications = true;
console.log(settings);

console.log("\n\nTask 3 ->");
/*
1. Создай объект account = { username: "admin", password: "1234" }
2. Примени Object.seal.
3. Измени значение username.
4. Удали свойство password.
5. Добавь новое свойство email.
*/
const account = { username: "admin", password: "1234" };
Object.seal(account);
account.username = "user";
delete account.password;
account.email = "ex@gmail.com";
console.log(account);

console.log("\n\nTask 4 ->");
/*
1. Используй Object.isSealed(account)
2. Выведи результат в консоль
*/
console.log(Object.isSealed(account));


console.log("\n\nTask 5 ->");
/*
1. Создай объект profile = { name: "Alice", age: 25 }
2. Заморозь его с помощью Object.freeze().
3. Попробуй изменить age.
4. Удали name.
5. Добавь новое свойство city.
*/
const profile = { name: "Alice", age: 25 };
Object.freeze(profile);
profile.age = 12;
delete profile.name;
profile.city = "London";
console.log(profile);


console.log("\n\nTask 6 ->");
/*
1. Создай объект:
   person = {
     name: "Bob",
     address: {
       city: "Kyoto"
     }
   }
2. Заморозь person.
3. Измени address.city
4. Объясни, почему это сработало или нет.
*/
const person = {
    name: "Bob",
    address: {
        city: "Kyoto"
    }
};
Object.freeze(person);
person.address.city = "Kobe";
console.log(person);    //т. к. заморожен объект person, а не address (не можем переназначить объект адрес), то мы можем изменять город. Для невозможности изменения города нужно отдельно заморозить person.address

console.log("\n\nTask 7 ->");
/*
1. Проверь состояние объекта person.
2. Выведи результат.
*/
console.log(Object.isExtensible(person));
console.log(Object.isSealed(person));
console.log(Object.isFrozen(person));
console.log("Task 1 ->");
/*
У тебя есть объект car. Получи значение свойства engine, используя ?., чтобы избежать ошибки, если объект пуст или структура изменилась.
*/
const car = {
    brand: "Toyota",
    model: "Corolla",
    specs: {
        engine: "1.8L",
        transmission: "Automatic"
    }
};
console.log(car.specs?.engine);


console.log("\n\nTask 2 ->");
/*
У тебя есть объект user. Получи значение второго элемента в массиве skills, используя ?..
*/
const user = {
    name: "Anna",
    skills: ["HTML", "CSS", "JavaScript"]
};
console.log(user.skills?.[1]);


console.log("\n\nTask 3 ->");
/*
Проверь, существует ли метод getSummary в объекте report и вызови его, используя ?.().
*/
const report = {
    title: "Monthly Report",
    getSummary() {
        return "Summary content";
    }
};
console.log(report.getSummary?.());


console.log("\n\nTask 4 ->");
/*
В объекте data метод generate может отсутствовать. Используй ?.() для безопасного вызова.
*/
const data = {};
console.log(data.generate?.());


console.log("\n\nTask 5 ->");
/*
Получи значение zipcode из следующего объекта, используя цепочку ?..
*/
const person = {
    name: "John",
    address: {
        city: "New York",
        postal: {
            zipcode: "10001"
        }
    }
};
console.log(person.address?.postal?.zipcode);


console.log("\n\nTask 6 ->");
/*
У тебя есть объект profile. Используй ?. в разных местах: для получения свойства, элемента массива и вызова метода.
*/
const profile = {
    user: {
        name: "Tom",
        roles: ["admin", "editor"],
        getRole() {
            return this.roles[0];
        }
    }
};
console.log("Свойство:" + profile.user?.name);
console.log("Элемент массива:" + profile.user?.roles?.[0]);
console.log("Вызов метода:" + profile.user?.getRole?.());

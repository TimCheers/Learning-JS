console.log("🟩 Task 1.1: Конструкция try..catch");
// Входные данные: переменная не определена
// Вызови ошибку доступа к переменной userName, которая не объявлена.
// Оберни в try..catch и выведи: "Произошла ошибка!"
try {
    console.log(userName);
}
catch (error) {
    console.log("Произошла ошибка!\n" + error);
}

console.log("🟩 Task 1.2: Получение ошибки в блоке catch");
// Входные данные: переменная num = undefined
// Попробуй вызвать num.toFixed(2), что вызовет TypeError.
// В блоке catch выведи текст ошибки через error.message
try {
    num.toFixed(2);
}
catch (error) {
    console.log("Произошла ошибка!\n" + error);
}


console.log("🟩 Task 1.3: Блок finally");
// Входные данные: вызов parseInt("abc")
// Оберни вызов parseInt("abc") в try..catch..finally.
// В finally выведи: "Завершена попытка парсинга"
try {
    parseInt("abc")
} catch (error) {
    console.log("Произошла ошибка!\n" + error);
}
finally {
    console.log("Завершена попытка парсинга");
}

console.log("🟩 Task 1.4: Генерация ошибок и оператор throw");
// Входные данные: функция validateAge(age)
// Если age не число или меньше 0 — выбрось ошибку через throw new Error(...)
function validateAge(age) {
    if (isNaN(age) || age < 0) throw new Error("Некоректный возраст");
    else return true;
}


console.log("🟩 Task 1.5: throw в try..catch..finally");
// Входные данные: вызовы validateAge(-10), validateAge("abc"), validateAge(25)
// Оберни каждый вызов в try..catch..finally и выведи сообщение об ошибке и "Готово" в finally
try {
    validateAge(-10);
} catch (error) {
    console.log(error)
}
finally {
    console.log("Готово");
}
try {
    validateAge("abc");
} catch (error) {
    console.log(error)
}
finally {
    console.log("Готово");
}
try {
    validateAge(25);
} catch (error) {
    console.log(error)
}
finally {
    console.log("Готово");
}


console.log("🟩 Task 2.1: Применение типов ошибок");
// Входные данные:
// 1. let x = y + 1; (ReferenceError)
// 2. let a = null; a.toString(); (TypeError)
// 3. eval("if (true {}"); (SyntaxError)
// Обработай каждую ошибку отдельно и выведи её имя: error.name
try {
    let x = y + 1;
} catch (error) {
    console.log(error.name);
}
try {
    let a = null; a.toString();
} catch (error) {
    console.log(error.name);
}
try {
    eval("if (true {}");
} catch (error) {
    console.log(error.name);
}

console.log("🟩 Task 2.2: Обработка нескольких типов ошибок");
// Входные данные: функция processData(data)
// Если data === null → вызови метод toString (TypeError)
// Если data === "fail" → обратись к переменной, которой нет (ReferenceError)
// В блоке catch проверь через instanceof и выведи разные сообщения
function processData(data) {
    if (data === null) throw new TypeError("Ошибка в данных");
    if (data === "fail") throw new ReferenceError("Ошибка в ссылке");
}
try {
    processData(null);
    processData("fail");
} catch (error) {
    if (error instanceof TypeError) console.log("Некорректный тип данных.");
    else if (error instanceof ReferenceError) console.log("Некорректная ссылка");
}


console.log("🟩 Task 2.3: Создание своих типов ошибок");
// Входные данные: класс ValidationError (наследник Error)
// Функция checkName(name)
// Если name пустой — выбрось ValidationError
// Протестируй с: "", "Tim"
class ValidationError extends Error {
    constructor(value, ...params) {
        super(...params)
        this.name = "ValidationError"
        this.argument = value;
    }
}
function checkName(name) {
    if (name == null || name == "") throw new ValidationError("name is null");
    else console.log("Name is ok");
}
try {
    checkName("tim");
    checkName("");
} catch (error) {
    console.log(error);
}


console.log("🟩 Task 3.1: Обработка ошибок и стек вызова");
// Входные данные: цепочка функций
// function a() { b(); }
// function b() { c(); }
// function c() { throw new Error("Ошибка в C!"); }
// Оберни вызов a() в try..catch и выведи error.stack
function a() { b(); }
function b() { c(); }
function c() { throw new Error("Ошибка в C!"); }
try {
    a();
} catch (error) {
    console.log(error.stack);
}


console.log("🟩 Task 3.2: Проброс ошибки вверх по стеку");
// Входные данные: та же цепочка a → b → c
// В c() — ошибка
// В b() — поймай и пробрось её (throw error)
// В a() — обработай и выведи error.message
function a2() { b(); }
function b2() {
    try {
        c();
    } catch (error) {
        throw new Error(err.message);
    }
}
function c2() { throw new Error("Ошибка в C!"); }
try {
    a2();
} catch (error) {
    console.log(error.message);
}

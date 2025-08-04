console.log("Task 1 ->");
/*
1. Создай класс BankAccount с приватным полем #balance.
2. Добавь публичный метод getBalance(), возвращающий значение баланса.
3. Попробуй напрямую обратиться к #balance извне.
*/
class BankAccount {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const tmp1 = new BankAccount();
// tmp1.#balance = 999; Невозможно
console.log(tmp1.getBalance());

console.log("\n\nTask 2 ->");
/*
1. В классе UserProfile добавь приватное поле #email.
2. Создай сеттер setEmail(email), который сохраняет значение, только если email содержит "@".
3. Создай геттер getEmail(), возвращающий значение.
4. Проверь работу: задай email, нарушающий правило.
*/
class UserProfile {
    #email;
    setEmail(userEmail) {
        if (userEmail.includes("@")) {
            this.#email = userEmail;
        }
    }
    getEmail() {
        return this.#email;
    }
}
const user = new UserProfile();
user.setEmail("tim@gmail.com");
user.setEmail("tim");
console.log(user.getEmail());



console.log("\n\nTask 3 ->");
/*
1. Создай класс Counter с приватным числовым полем #count, начальным значением 0.
2. Добавь методы: increment(), getCount().
3. Вызови increment несколько раз и выведи результат через getCount().
*/
class Counter {
    #count = 0;
    increment() {
        this.#count++;
    }
    getCount() {
        return this.#count;
    }
}
const newNumb = new Counter();
newNumb.increment();
newNumb.increment();
newNumb.increment();
newNumb.increment();
console.log(newNumb.getCount());


console.log("\n\nTask 4 ->");
/*
1. Создай класс PasswordValidator.
2. Внутри сделай приватный метод #isStrong(password), возвращающий true, если пароль более 6 символов и содержит цифру.
3. Создай публичный метод check(password), который вызывает #isStrong и выводит результат.
*/
class PasswordValidator {
    check(password) {
        return this.#isStrong(password);
    }
    #isStrong(password) {
        if (password.length > 6 && /\d/.test(password))
            return true;
        else return false;
    }
}
const pv = new PasswordValidator();
console.log(pv.check("afijqhdiqhfh"));
console.log(pv.check("afijqh6diqhfh"));


console.log("\n\nTask 5 ->");
/*
1. Создай класс Person с приватным полем #ssn (social security number).
2. Добавь публичный метод verifySSN(input), который вызывает приватный метод #isMatch(input).
3. Метод #isMatch сравнивает input и значение #ssn.
4. Проверь метод на правильном и неправильном значении.
*/
class Person{
    #ssn = 123;
    verifySSN(input){
        return this.#isMatch(input);
    }
    #isMatch(input){
        return input===this.#ssn;
    }
}
const user1 = new Person();
console.log(user1.verifySSN(123));
console.log(user1.verifySSN(324234));

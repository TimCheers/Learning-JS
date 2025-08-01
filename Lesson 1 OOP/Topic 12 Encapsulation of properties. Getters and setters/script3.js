console.log("\n\nTask 3 ->");
/*
Создайте функцию-конструктор BankAccount с приватным полем _balance.

Добавьте методы deposit(amount) и withdraw(amount) для пополнения и снятия средств.

Реализуйте защиту от отрицательного баланса.

Добавьте геттер getBalance() для проверки текущего баланса.
*/

function BankAccount(balance) {
    let _balance = balance;
    this.deposit = function(amount) {
        if (amount > 0) {
            _balance += amount;
        }
        else {
            console.log("Некоректное значение");
        }
    }
    this.withdraw = function(amount) {
        if (amount > 0) {
            if (amount < _balance) {
                _balance -= amount;
            }
            else {
                console.log("Недостаточно средств");
            }
        }
        else {
            console.log("Некоректное значение");
        }
    }
    this.getBalance = function() { return _balance };
}
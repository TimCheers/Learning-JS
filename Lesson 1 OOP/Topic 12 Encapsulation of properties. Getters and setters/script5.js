console.log("\n\nTask 5 ->");
/*
Создайте функцию-конструктор SecureNote, в которой приватно хранится заметка и пароль.

Добавьте метод read(password), который возвращает заметку только при корректном пароле.

Добавьте метод update(password, newText), который позволяет обновить текст заметки.

Доступ к заметке должен быть возможен только через методы.
*/

function SecureNote(note, password) {
    let _note = note;
    let _password = password;
    this.read = function (password) {
        if (password === _password) { return _note }
    }
    this.update = function (password, newText) {
        if (password === _password) {
            _note = newText;
        }
    }
}
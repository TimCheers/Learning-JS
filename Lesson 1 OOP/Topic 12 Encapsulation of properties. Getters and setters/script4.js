console.log("\n\nTask 4 ->");
/*
Создайте функцию-конструктор Rectangle, которая принимает ширину и высоту.

Приватно сохраните их через замыкание.

Добавьте геттер getArea(), который возвращает площадь прямоугольника.

Добавьте сеттеры setWidth(w) и setHeight(h) с валидацией, чтобы значения были положительными.
*/

function Rectangle(wigth, hight) {
    let _wigth;
    let _hight;
    this.getArea = function () { return _hight * _wigth }
    this.setWidth = function (wigth) {
        if (wigth > 0) {
            _wigth = wigth;
        }
        else {
            console.log("Некоректное значение");
        }
    }
    this.setHeight = function (hight) {
        if (hight > 0) {
            _hight = hight;
        }
        else {
            console.log("Некоректное значение");
        }
    }
}

var a = new Rectangle(5, 5);
a.setParam();
console.log(a.getArea());
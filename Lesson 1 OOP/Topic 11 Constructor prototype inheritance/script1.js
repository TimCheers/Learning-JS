console.log("Task 1 ->");
/*
Создай конструктор Animal со свойствами name, age и методом speak(), который выводит в консоль Животное говорит.

Затем создай конструктор Dog, унаследуй от Animal, добавь метод bark(), который выводит Гав!.
*/
function Animal(name, age)
{
    this.name = name;
    this.age = age;
}
Animal.prototype.speak = function() {
    console.log("Животное говорит");
};
function Dog(name, age){
    Animal.call(this, name, age);
    this.bark = function(){
        console.log("Гав!");
    }
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const barsik = new Dog("Barsik", 4);

barsik.speak();
barsik.bark();
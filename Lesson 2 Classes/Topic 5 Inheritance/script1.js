console.log("All tasks ->");
class Animal {
    #id;
    name;
    age;
    speak() {
        console.log("Animal says something.");
    }
    constructor(animalName, animalAge, id) {
        this.age = animalAge;
        this.name = animalName;
        this.#id = id;
    }
}

class Dog extends Animal {
    breed;
    speak() {
        console.log("Dog barks.");
    }
    constructor(animalName, animalAge, breed) {
        super(animalName, animalAge);
        this.breed = breed;
    }
}
const dog = new Dog("dasdas", 23, "Русская борзая")
console.log(dog);

const ani = new Animal("Животное", 1);

dog.speak();
ani.speak();

dog.id = 13;
console.log(dog.id);

class Cat extends Animal { }

const cat = new Cat();

console.log(dog instanceof Animal);
console.log(cat instanceof Animal);
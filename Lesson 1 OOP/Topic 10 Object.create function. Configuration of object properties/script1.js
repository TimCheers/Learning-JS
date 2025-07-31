console.log("Task 1 ->");
const animal = {
    speak: function(){
        console.log("Животное издает звук");
    }
}
const dog = Object.create(animal);
dog.name = "Sharik";
dog.speak();
console.log("\n\nTask 5 ->");
const animal = {
    speak: function() {
        console.log("Звук животного");
    }
};

const dog = Object.create(animal);
dog.name = "Шарик";

console.log(dog.name);      // "Шарик"
dog.speak();                // "Звук животного"

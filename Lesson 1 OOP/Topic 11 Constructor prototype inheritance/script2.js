console.log("\n\nTask 2 ->");
/*
Переопредели метод speak() в Dog, чтобы он выводил:
*/

Dog.prototype.speak = function(){
    console.log(`Собака по кличке ${this.name} лает`);
}

barsik.speak();

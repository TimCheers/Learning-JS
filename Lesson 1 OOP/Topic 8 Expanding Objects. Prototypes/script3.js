console.log("\n\nTask 3 ->");
var user = new Person("Alice", 73);
Person.prototype.sayHi = function(){
    console.log("Hi!");
}
user.sayHi();
console.log("\n\nTask 2 ->");
Person.prototype.species = "Homo sapiens";

var person3 = new Person("Tod", 45);
console.log(person3.species);
console.log(person3.hasOwnProperty("species"));
console.log(person3.hasOwnProperty("name")); 
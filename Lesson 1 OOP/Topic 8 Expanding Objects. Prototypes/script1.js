console.log("Task 1 ->");
function Person(personName, personAge){
    this.name = personName,
    this.age = personAge,
    this.isAdult = personAge >= 18
}

Person.prototype.introduce = function(){
    console.log(`Превет, меня зовут ${this.name}, мне ${this.age} лет`);
};

var person1 = new Person ("Tim", 15);
var person2 = new Person ("Tom", 23);

person1.introduce();
person2.introduce();

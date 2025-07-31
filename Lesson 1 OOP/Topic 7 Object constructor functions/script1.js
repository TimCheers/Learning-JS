console.log("Task 1 ->");
function User(userName, userAge){
    this.name = userName,
    this.age = userAge,
    this.isAdult = userAge >= 18,
    this.greet = function(){  //User.prototype.greet как стат метод, создается 1 раз, экономит память              
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

const user1 = new User("Tim", 23);
const user2 = new User("Tom", 9);

user1.greet();
user2.greet();

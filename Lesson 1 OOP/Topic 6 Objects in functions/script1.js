console.log("Task 1 ->");
function createUser(userName, userAge){
    var user = {
        name: userName,
        age: userAge,
        isAdult: userAge >= 18 ? true: false //better: userAge >= 18
    }
    return user;
}

console.log(createUser("Tom", 9));
console.log(createUser("Tim", 29));
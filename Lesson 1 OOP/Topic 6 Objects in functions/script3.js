function addProperty(user, prop, value){
    const userCopy = Object.assign({}, user);
    userCopy[prop] = value;
    return userCopy;
}

const user1 = { name: "Alice" };
const updatedUser = addProperty(user1, "age", 25);
console.log(user1);
console.log(updatedUser);
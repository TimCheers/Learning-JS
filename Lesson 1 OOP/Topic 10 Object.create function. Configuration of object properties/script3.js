console.log("\n\nTask 3 ->");
const user = Object.create(null);
Object.defineProperty(user, "id", {
    value: 101,
    writable: false,
    enumerable: true,
    configurable: false
})

user.id = 222;
console.log(user.id);
for(prop in user){
    console.log(prop);
}
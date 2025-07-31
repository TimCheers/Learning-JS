console.log("\n\nTask 8 ->");
// const person = {
//     name: "Tom",
//     say:()=> console.log(`Меня зовут ${this.name}`)
// }
// person.say();

//in func!!
const person = {
    name: "Tom",
    hello(){
        console.log("Привет");
        let say = ()=> console.log(`Меня зовут ${this.name}`);
        say();
    }
}
person.hello();
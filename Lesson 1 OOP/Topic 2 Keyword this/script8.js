console.log("\n\nTask 8 ->");
const person = {
    name: "Tom",
    say:()=> console.log(`Меня зовут ${this.name}`)
}
person.say();
console.log("\n\nTask 2 ->");
var user = {
    name: "Tim",
    age: 23
}

function introduce(city, country){
    console.log(`Я ${this.name}, мне ${this.age} лет, я из ${city}, ${country}`)
}

introduce.call(user, "Moscow", "Russia");
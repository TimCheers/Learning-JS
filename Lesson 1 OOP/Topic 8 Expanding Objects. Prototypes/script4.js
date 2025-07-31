console.log("\n\nTask 4 ->");
user.species = "Мутант";
console.log(structuredClone(user));
delete user.species;
console.log(user.species);
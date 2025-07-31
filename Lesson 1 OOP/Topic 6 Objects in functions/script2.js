console.log("\n\nTask 2 ->");
function greetUser(user){
    console.log(`Привет, ${user.name}! Ваша роль:`, user.role)
}

const Tim = {
    name: "Tim",
    role: "Администратор"
}
greetUser(Tim)
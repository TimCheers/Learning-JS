console.log("\n\nTask 5 ->");
var admin = {
    role: "first"
}
var guest = {
    role: "second"
}

function showRole(){
    console.log(`Ваша роль: ${this.role}`)
}

showRole.call(admin);
showRole.call(guest);

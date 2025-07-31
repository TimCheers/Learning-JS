console.log("\n\nTask 3 ->");
function Admin(adminName, adminAge, adminPrermissions){
    this.name=adminName,
    this.age=adminAge,
    this.permissions=adminPrermissions,
    this.showPermissions = function(){
        console.log("Права администратора: \n");
        for(var item in this.permissions){
            console.log(item+ "\t");
        }
    }
}

var admin1 = new Admin("Norbert", 12, ["edit", "delete"]);
console.log(admin1);
admin1.showPermissions();
console.log(admin1 instanceof User)
console.log(admin1 instanceof Object)
console.log(user1 instanceof Object)
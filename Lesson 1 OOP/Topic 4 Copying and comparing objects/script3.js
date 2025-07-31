var userCopy2 = Object.assign({}, user);
userCopy2.name = "Tim";
userCopy2.contact.email = "None";
console.log("\n\nTask 3 ->");
console.log(structuredClone(user));
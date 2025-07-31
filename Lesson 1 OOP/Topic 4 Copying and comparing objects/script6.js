let deepCopy = {
  name: user.name,
  age: user.age,
  contact: {
    email: user.contact.email,
    phone: user.contact.phone
  }
}
deepCopy.contact.phone = "+7 950 556 03 63";
console.log("\n\nTask 6 ->");
console.log(structuredClone(user));
console.log("\n\nTask 4 ->");
const book = {
    title: "ABC"
}

Object.defineProperty(book, "title", {
    writable: false
})

console.log(structuredClone(book.title));
book.title = "UUU";
console.log(structuredClone(book.title));
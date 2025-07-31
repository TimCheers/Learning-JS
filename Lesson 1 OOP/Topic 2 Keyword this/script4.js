console.log("\n\nTask 4 ->");
let logger2 = {
    name: "logger",
    printContext: function(){
        console.log(this);
    }
};

var tmp = {
    name: "name1",
    foo: logger2.printContext
}
tmp.foo();
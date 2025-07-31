console.log("\n\nTask 4 ->");
let logger2 = {
    name: "logger",
    printContext: function(){
        console.log(this);
    }
};

//!!Это не обязательно, но работает
// var tmp = {
//     name: "name1",
//     foo: logger2.printContext
// }

const foo = logger2.printContext;
foo();
//tmp.foo();
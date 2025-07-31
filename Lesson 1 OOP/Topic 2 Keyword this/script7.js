console.log("\n\nTask 7 ->");
function f2(){
    console.log(this.bar);
}

const obj = {bar: "object"}
var bar = "global";
f2();
const func = f1.bind(obj);
func();
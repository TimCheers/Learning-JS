console.log("\n\nTask 6 ->");
function f1(){
    console.log(this.bar);
}

var obj1 = {bar: "obj_bar"}
var bar = "global_bar";
f1();
f1.apply(obj1);
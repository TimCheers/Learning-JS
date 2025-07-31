console.log("\n\nTask 5 ->");

let logger3 = {
    name: "logger",
    printContext: function(){
        console.log(this);
    },
    delayedPrint: function()
    {
        var setTimeout=5;
        console.log(this);
    }
};
logger3.delayedPrint();
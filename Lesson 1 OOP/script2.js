order.getTotal = function(){
    var sum=0;
    for(i in this.items)
    {
        sum += i.price * i.quantity;
    }
    return sum;
};
order.markAsPaid = function(){
    this.paid = true;
};
order.addItem = function(itemName, itemPrice, itemQuantity){
    this.items.push(itemName, itemPrice, itemQuantity);
};
console.log("\n\nTask 2 ->");
console.log("Total: " + order.getTotal());
console.log("Before 'markAsPaid':" + order.paid);
order.markAsPaid();
console.log("After 'markAsPaid':" + order.paid);
console.log("Before 'addItem':" + order.items);
order.addItem("Cola", 1, 1)
console.log("After 'addItem':" + order.items);
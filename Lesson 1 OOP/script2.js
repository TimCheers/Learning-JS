order.getTotal = function(){
    var sum=0;
    for(let item in this.items)
    {
        sum += item.price * item.quantity;
    }
    return sum;
};
order.markAsPaid = function(){
    this.paid = true;
};
order.addItem = function(itemName, itemPrice, itemQuantity){
    this.items.push({name: itemName, price: itemPrice, quantity: itemQuantity});
};
console.log("\n\nTask 2 ->");
console.log("Total: " + order.getTotal());
console.log("Before 'markAsPaid':" + order.paid);
order.markAsPaid();
console.log("After 'markAsPaid':" + order.paid);
console.log("Before 'addItem':");
console.log(order.items);
order.addItem("Cola", 1, 1)
console.log("After 'addItem':");
console.log(order.items);
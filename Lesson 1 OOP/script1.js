var order = { 
    customerName: "John Doe",
    items: [
        { name: "Burger", price: 5.99 , quantity: 2 },
        { name: "Fries", price: 2.49, quantity: 1 },
        { name: "Soda", price: 1.99, quantity: 3 }
    ],
    paid: false
};
console.log("Task 1 ->");
console.log(order.customerName, order.items, order.paid);
const car ={
    brand: "BMW",
    year: 1999,
    drive(){
        console.log("Driving");
    }
};
console.log("Task 1 ->");
console.log("brand" in car);
console.log("drive" in car);
console.log("color" in car);